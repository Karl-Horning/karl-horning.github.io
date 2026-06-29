/**
 * @fileoverview Unit tests for the CopyButton client component.
 *
 * Covers clipboard interaction and the two-second "Copied!" reset.
 */

import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import CopyButton from "./CopyButton";

describe("CopyButton", () => {
    it("renders 'Copy' initially", () => {
        render(<CopyButton text="const x = 1;" />);
        expect(
            screen.getByRole("button", { name: "Copy code to clipboard" })
        ).toHaveTextContent("Copy");
    });

    it("writes the provided text to the clipboard on click", async () => {
        const writeText = vi
            .spyOn(navigator.clipboard, "writeText")
            .mockResolvedValue(undefined);
        render(<CopyButton text="const x = 1;" />);
        await userEvent.click(
            screen.getByRole("button", { name: "Copy code to clipboard" })
        );
        expect(writeText).toHaveBeenCalledWith("const x = 1;");
        writeText.mockRestore();
    });

    it("shows 'Copied!' after click", async () => {
        render(<CopyButton text="const x = 1;" />);
        await userEvent.click(
            screen.getByRole("button", { name: "Copy code to clipboard" })
        );
        expect(screen.getByRole("button")).toHaveTextContent("Copied!");
    });

    it("resets to 'Copy' after 2 seconds", async () => {
        vi.useFakeTimers();
        try {
            render(<CopyButton text="const x = 1;" />);
            const button = screen.getByRole("button", {
                name: "Copy code to clipboard",
            });

            // fireEvent avoids userEvent's internal timer conflicts with fake timers.
            // act flushes the clipboard mock promise so setCopied(true) runs.
            await act(async () => {
                fireEvent.click(button);
                await Promise.resolve();
            });

            expect(button).toHaveTextContent("Copied!");

            act(() => vi.advanceTimersByTime(2000));
            expect(button).toHaveTextContent("Copy");
        } finally {
            vi.useRealTimers();
        }
    });
});
