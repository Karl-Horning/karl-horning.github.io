import {
    NPLUSONE_POC_URL,
    OLD_API_POC_URL,
    RATE_LIMIT_POC_URL,
} from "@/lib/constants/links";

export const meta = {
    title: "Learnlight Platform",
    description:
        "Built and optimised the GraphQL API for a global language-learning platform — 700,000+ registered learners across 180 countries. Resolved N+1 query issues, cutting duplicate database calls from 36 to 1 per request: a 70% performance gain.",
    keywords: [
        "Node.js",
        "GraphQL",
        "Apollo Server",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "DataLoader",
        "Mocha",
        "Git CI/CD",
    ],
    role: "Full-Stack Software Engineer",
    dateFrom: "06-2021",
    dateTo: "07-2024",
    readingTime: 5,
    number: 1,
    slug: "learnlight-platform",
    draft: false,
    stats: [
        { value: "700k+", label: "Registered learners" },
        { value: "180+", label: "Countries served" },
        { value: "10×", label: "API performance gain" },
        { value: "99.94%", label: "Platform uptime" },
    ],
    linksTitle: "Proof of concepts on GitHub",
    links: [
        { label: "Oxford Dictionaries API PoC", href: OLD_API_POC_URL },
        { label: "GraphQL Rate Limit PoC", href: RATE_LIMIT_POC_URL },
        { label: "GraphQL N+1 / DataLoader PoC", href: NPLUSONE_POC_URL },
    ],
};
