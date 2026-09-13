// scripts/build-rss-from-posts.ts
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

/**
 * Base site and feed configuration.
 *
 * Used to construct absolute URLs and channel metadata
 * for the generated RSS feed.
 */
const SITE_URL = "https://www.karlhorning.dev";
const BLOG_BASE = `${SITE_URL}/blog`;
const FEED_PATH = path.join(process.cwd(), "public", "rss.xml");

/** Channel metadata (rendered in `<channel>`). */
const CHANNEL_TITLE = "Karl Horning's Blog";
const CHANNEL_LINK = BLOG_BASE;
const CHANNEL_DESCRIPTION =
    "Notes on web development, accessibility, and learning tech";
const CHANNEL_LANGUAGE = "en-GB";
const CHANNEL_GENERATOR = "build-rss-from-posts.ts";

/** URL to the feed itself (for the atom:link `self` reference). */
const FEED_SELF_URL = `${SITE_URL}/rss.xml`;

/**
 * Zod schema for a single blog post entry sourced from `/public/data/posts.json`.
 *
 * Fields are validated to ensure correct formatting (for example, ISO date).
 */
const DATE_ONLY_RE = /^\d{4}-\d{2}-\d{2}$/;
const ISO_UTC_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

const PostSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.union([
        z.string().regex(DATE_ONLY_RE),
        z.string().regex(ISO_UTC_RE),
    ]),
    readingTime: z.number().int().positive(),
    slug: z.string(),
    thumbnail: z.object({
        src: z.string(),
        alt: z.string(),
    }),
    topics: z.array(z.string()).default([]),
    draft: z.boolean(),
});

/** Zod schema for an array of posts. */
const PostsSchema = z.array(PostSchema);

/** Inferred TypeScript type for a single post. */
type Post = z.infer<typeof PostSchema>;

/** Two-space indentation used when rendering XML. */
const IND = "  ";

/**
 * Indents each non-empty line of a multi-line string.
 *
 * @param n - Indentation level (number of `IND` units).
 * @param s - The string to indent.
 * @returns The indented string.
 */
const indent = (n: number, s: string) =>
    s
        .split("\n")
        .map((line) => (line ? IND.repeat(n) + line : line))
        .join("\n");

/**
 * Escapes a string for safe inclusion in XML text/attributes.
 *
 * @param s - Unescaped string.
 * @returns XML-escaped string.
 */
function xmlEscape(s: string): string {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

/**
 * Formats a `Date` as an RFC-822 string in UTC with a `+0000` offset.
 *
 * @param d - Date to format.
 * @returns RFC-822 formatted date string (for example, `Mon, 01 Jan 2025 09:00:00 +0000`).
 */
function toRfc822UTC(d: Date): string {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const dayName = dayNames[d.getUTCDay()];
    const day = String(d.getUTCDate()).padStart(2, "0");
    const month = monthNames[d.getUTCMonth()];
    const year = d.getUTCFullYear();
    const hour = String(d.getUTCHours()).padStart(2, "0");
    const min = String(d.getUTCMinutes()).padStart(2, "0");
    const sec = String(d.getUTCSeconds()).padStart(2, "0");
    return `${dayName}, ${day} ${month} ${year} ${hour}:${min}:${sec} +0000`;
}

/**
 * Resolves a URL to an absolute URL string using {@link SITE_URL} as base.
 *
 * @param relativeOrAbsolute - Relative path or absolute URL.
 * @returns Absolute URL string.
 */
function absoluteUrl(relativeOrAbsolute: string): string {
    try {
        return new URL(relativeOrAbsolute).toString(); // already absolute
    } catch {
        return `${SITE_URL}${relativeOrAbsolute.startsWith("/") ? "" : "/"}${relativeOrAbsolute}`;
    }
}

/**
 * Renders a single `<item>` XML block for the RSS feed.
 *
 * Includes title, link, publication date, description with thumbnail,
 * categories (from topics), a `media:thumbnail`, and a permalink GUID.
 *
 * @param p - Validated post object.
 * @returns The `<item>` XML string.
 */
function renderItem(p: Post): string {
    const link = `${BLOG_BASE}/${p.slug}`;
    const guid = link;
    const thumb = absoluteUrl(p.thumbnail.src);
    const alt = xmlEscape(p.thumbnail.alt);
    const categories =
        p.topics
            .map((t) => `${indent(3, `<category>${xmlEscape(t)}</category>`)}`)
            .join("\n") || "";

    const parts = [
        indent(2, "<item>"),
        indent(3, `<title>${xmlEscape(p.title)}</title>`),
        indent(3, `<link>${xmlEscape(link)}</link>`),
        indent(3, `<pubDate>${toRfc822UTC(new Date(p.date))}</pubDate>`),
        indent(
            3,
            `<description><![CDATA[<img src="${xmlEscape(
                thumb
            )}" alt="${alt}" /><br>${p.description}]]></description>`
        ),
        categories,
        indent(3, `<media:thumbnail url="${xmlEscape(thumb)}" />`),
        indent(3, `<guid isPermaLink="true">${xmlEscape(guid)}</guid>`),
        indent(2, "</item>"),
    ].filter(Boolean);

    return parts.join("\n");
}

/**
 * Parses JSON safely and throws a readable error on failure.
 *
 * @param text - Raw JSON text.
 * @returns Parsed JSON value.
 * @throws When the input is not valid JSON.
 */
function safeParseJson(text: string): unknown {
    try {
        return JSON.parse(text);
    } catch (e) {
        throw new Error(
            `posts.json is not valid JSON: ${(e as Error).message}`
        );
    }
}

/**
 * Main entry point: reads posts JSON, validates items, renders RSS XML,
 * and writes the result to {@link FEED_PATH}.
 *
 * Steps:
 * 1. Read `/public/data/posts.json` and parse JSON safely.
 * 2. Validate against {@link PostsSchema}.
 * 3. Filter out drafts, sort newest → oldest.
 * 4. Render `<item>` blocks and channel metadata.
 * 5. Write `public/rss.xml`.
 *
 * @async
 * @returns Resolves when the RSS file has been written.
 */
async function run() {
    const postsPath = path.join(process.cwd(), "public", "data", "posts.json");
    const raw = await fs.readFile(postsPath, "utf-8");
    const parsed = safeParseJson(raw);

    const posts = PostsSchema.parse(parsed);

    // Defensive: `posts.json` should already exclude drafts.
    const published = posts.filter((p) => p.draft === false);

    // Sort newest → oldest by date.
    published.sort((a, b) => {
        const aTime = new Date(`${a.date}T00:00:00.000Z`).getTime();
        const bTime = new Date(`${b.date}T00:00:00.000Z`).getTime();
        return bTime - aTime;
    });

    const itemsXml = published.map(renderItem).join("\n");

    // Channel metadata.
    const now = new Date();
    const lastBuildDate = toRfc822UTC(now);

    const channelParts = [
        indent(1, "<channel>"),
        indent(2, `<title>${xmlEscape(CHANNEL_TITLE)}</title>`),
        indent(2, `<link>${xmlEscape(CHANNEL_LINK)}</link>`),
        indent(
            2,
            `<description>${xmlEscape(CHANNEL_DESCRIPTION)}</description>`
        ),
        indent(2, `<language>${CHANNEL_LANGUAGE}</language>`),
        indent(2, `<generator>${xmlEscape(CHANNEL_GENERATOR)}</generator>`),
        indent(2, `<lastBuildDate>${lastBuildDate}</lastBuildDate>`),
        indent(
            2,
            `<atom:link href="${xmlEscape(
                FEED_SELF_URL
            )}" rel="self" type="application/rss+xml" />`
        ),
        itemsXml,
        indent(1, "</channel>"),
    ];

    const rss = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        "<rss",
        `${IND}version="2.0"`,
        `${IND}xmlns:media="http://search.yahoo.com/mrss/"`,
        `${IND}xmlns:atom="http://www.w3.org/2005/Atom"`,
        ">",
        channelParts.join("\n"),
        "</rss>",
        "",
    ].join("\n");

    await fs.writeFile(FEED_PATH, rss, "utf-8");
    console.log(
        `Wrote ${published.length} items → ${path.relative(process.cwd(), FEED_PATH)}`
    );
}

// Execute the build script.
run().catch((err) => {
    console.error(err);
    process.exit(1);
});
