/**
 * @fileoverview Global setup for Vitest unit tests.
 *
 * Registers jest-dom matchers, mocks Next.js modules that require runtime
 * context (next/link, next/image, next/navigation), and stubs browser APIs
 * absent in jsdom (IntersectionObserver, navigator.clipboard).
 */

import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import React from "react";
import { afterEach, vi } from "vitest";

afterEach(() => {
    cleanup();
});

vi.mock("next/navigation", () => ({
    usePathname: () => "/",
    useRouter: () => ({ push: vi.fn(), replace: vi.fn(), back: vi.fn() }),
}));

vi.mock("next/link", () => ({
    default: ({
        href,
        children,
        ...props
    }: {
        href: string;
        children: React.ReactNode;
        [key: string]: unknown;
    }) => (
        <a href={href} {...props}>
            {children}
        </a>
    ),
}));

vi.mock("next/image", () => ({
    default: ({
        src,
        alt,
        width,
        height,
        className,
    }: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
        className?: string;
    }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
    ),
}));

global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

Object.defineProperty(navigator, "clipboard", {
    value: { writeText: vi.fn().mockResolvedValue(undefined) },
    writable: true,
    configurable: true,
});
