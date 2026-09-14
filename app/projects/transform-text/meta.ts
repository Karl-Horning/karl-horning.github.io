import {
    CHROME_STORE_URL,
    EDGE_STORE_URL,
    FIREFOX_STORE_URL,
    TRANSFORM_TEXT_REPO_URL,
    TRANSFORM_TEXT_URL,
} from "@/lib/constants/links";
import type { ProjectMeta } from "@/lib/projects";

export const meta = {
    title: "Transform Text Extension",
    description:
        "Built and published a TypeScript Chrome extension that adds Safari's text transformation feature to Chromium browsers and Firefox — 13 transformations, TDD with Vitest, approved first time across all three browser stores.",
    keywords: [
        "TypeScript",
        "Chrome Extension",
        "Manifest V3",
        "esbuild",
        "Vitest",
        "TDD",
        "Firefox",
        "webextension-polyfill",
        "ESLint",
        "Prettier",
    ],
    role: "Developer",
    dateFrom: "10-2023",
    dateTo: "03-2026",
    readingTime: 5,
    number: 3,
    slug: "transform-text",
    draft: false,
    stats: [
        { value: "13", label: "Text transformations" },
        { value: "3", label: "Browsers supported" },
        { value: "3/3", label: "Store approvals, first attempt" },
        { value: "18", label: "Unit tests" },
    ],
    linksTitle: "Store listings and source code",
    links: [
        { label: "Chrome Web Store", href: CHROME_STORE_URL, icon: "chrome" },
        { label: "Microsoft Edge Add-ons", href: EDGE_STORE_URL, icon: "edge" },
        {
            label: "Firefox Add-ons",
            href: FIREFOX_STORE_URL,
            icon: "firefox",
        },
        {
            label: "GitHub Repository",
            href: TRANSFORM_TEXT_REPO_URL,
            icon: "github",
        },
        { label: "Companion Web App", href: TRANSFORM_TEXT_URL, icon: "web" },
    ],
} satisfies ProjectMeta;
