/**
 * @fileoverview Scans blog prose and code comments for banned words and phrases from banned-words.md, using prose-lint.
 */

import fg from "fast-glob";
import { promises as fs } from "fs";
import path from "path";
import { describe, expect, it } from "vitest";
import { findBannedWords } from "prose-lint";

const ROOT = process.cwd();

const GLOBS = [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "lib/**/*.{ts,tsx}",
    "scripts/**/*.ts",
    "README.md",
];

describe("prose-lint: banned words", () => {
    it("finds no banned words or phrases in prose and comments", async () => {
        const files = await fg(GLOBS, {
            cwd: ROOT,
            ignore: ["**/*.test.{ts,tsx}"],
        });
        const offences: string[] = [];

        for (const file of files) {
            const content = await fs.readFile(path.join(ROOT, file), "utf8");

            for (const offence of findBannedWords(content)) {
                offences.push(
                    `${file}:${offence.line}: "${offence.match}" in: ${offence.text}`
                );
            }
        }

        expect(offences, offences.join("\n")).toEqual([]);
    });
});
