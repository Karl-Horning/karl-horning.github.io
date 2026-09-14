import { KARLHORNING_DEV_REPO_URL } from "@/lib/constants/links";
import type { ProjectMeta } from "@/lib/projects";

export const meta = {
    title: "karlhorning.dev",
    description:
        "The fourth version of karlhorning.dev — a static Next.js site with a JSON-driven blog, RSS feed, and Playwright + axe-core accessibility testing across every page.",
    keywords: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Playwright",
        "axe-core",
        "CSS Modules",
        "GitHub Pages",
    ],
    role: "Developer",
    dateFrom: "04-2025",
    dateTo: "present",
    readingTime: 3,
    number: 2,
    slug: "karlhorning-dev",
    draft: false,
    stats: [
        { value: "v4", label: "Current version" },
        { value: "48", label: "Playwright tests" },
        { value: "100", label: "Lighthouse performance" },
    ],
    linksTitle: "Source code",
    links: [
        {
            label: "GitHub repository",
            href: KARLHORNING_DEV_REPO_URL,
            icon: "github",
        },
    ],
} satisfies ProjectMeta;
