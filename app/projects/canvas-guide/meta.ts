import { CANVAS_GUIDE_REPO_URL, CANVAS_GUIDE_URL } from "@/lib/constants/links";
import type { ProjectMeta } from "@/lib/projects";

export const meta = {
    title: "Canvas Content Styling Guide",
    description:
        "A documentation site covering HTML and CSS best practices for Canvas LMS — 22 pages, 120 copy-paste examples, and 373 searchable icons. Built at Imperial College London and published as a standalone resource for staff across institutions.",
    keywords: [
        "HTML",
        "CSS",
        "Canvas LMS",
        "Accessibility",
        "Technical Writing",
        "Documentation",
    ],
    role: "Developer & Technical Writer",
    dateFrom: "11-2025",
    dateTo: "04-2026",
    readingTime: 3,
    number: 4,
    slug: "canvas-guide",
    draft: false,
    stats: [
        { value: "22", label: "Pages" },
        { value: "120", label: "Copy-paste examples" },
        { value: "373", label: "Searchable icons" },
    ],
    linksTitle: "Documentation site and source code",
    links: [
        { label: "canvas.karlhorning.dev", href: CANVAS_GUIDE_URL, icon: "web" },
        {
            label: "GitHub repository",
            href: CANVAS_GUIDE_REPO_URL,
            icon: "github",
        },
    ],
} satisfies ProjectMeta;
