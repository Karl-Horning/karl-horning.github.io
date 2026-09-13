// scripts/build-posts-json.ts
import { promises as fs } from "fs";
import path from "path";
import fg from "fast-glob";
import { pathToFileURL } from "url";
import { z } from "zod";
import "tsconfig-paths/register";

/**
 * Regular expression for strict ISO 8601 UTC date format:
 * `YYYY-MM-DDTHH:MM:SSZ`.
 *
 * Used to validate blog metadata date fields.
 */
const ISO_UTC_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

/**
 * Zod schema for blog post metadata.
 *
 * This schema validates the `meta` export from each blog post directory, ensuring the correct structure and types for JSON output.
 */
const BlogMetaSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().regex(ISO_UTC_RE),
    readingTime: z.number().int().positive(),
    slug: z.string(),
    thumbnail: z.object({
        src: z.string(),
        alt: z.string(),
    }),
    topics: z.array(z.string()),
    draft: z.boolean(),
});

/**
 * Type representing a validated blog post metadata object.
 * Mirrors the {@link BlogMetaSchema}.
 */
type PostItem = z.infer<typeof BlogMetaSchema>;

/**
 * Base paths for input discovery and output generation.
 */
const ROOT = process.cwd();
const BLOG_GLOB = "app/blog/**/meta.ts";
const OUTPUT_DIR = path.join(ROOT, "public", "data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "posts.json");

/**
 * Dynamically imports and validates a blog post `meta.ts` file.
 *
 * Each `meta.ts` should export either:
 * - a default object containing metadata, or
 * - a named export `meta`.
 *
 * The data is validated with {@link BlogMetaSchema}.
 *
 * @param tsFilePath - Relative path to the `meta.ts` file.
 * @returns The validated blog metadata object.
 * @throws If the import fails or validation fails.
 *
 * @example
 * ```ts
 * const post = await importMeta("src/app/blog/example/meta.ts");
 * console.log(post.title); // → "My Example Post"
 * ```
 */
async function importMeta(tsFilePath: string): Promise<PostItem> {
    const fileUrl = pathToFileURL(path.join(ROOT, tsFilePath)).href;
    const mod = await import(fileUrl);
    const raw = (mod as any).default ?? (mod as any).meta;
    return BlogMetaSchema.parse(raw);
}

/**
 * Main build routine for generating `/public/data/posts.json`.
 *
 * Steps:
 * 1. Find all `meta.ts` files.
 * 2. Import and validate each using {@link importMeta}.
 * 3. Filter out drafts (`draft === false` only).
 * 4. Sort posts by date (newest → oldest).
 * 5. Write a single JSON file with all published posts.
 *
 * The output is consumed by other scripts and pages (for example, RSS builder, blog list).
 *
 * @async
 * @returns Resolves when the JSON file is successfully written.
 *
 * @example
 * ```bash
 * # Run directly via npm script
 * pnpm tsx scripts/build-posts-json.ts
 * ```
 */
async function run() {
    // 1. Find all `meta.ts` files
    const entries = await fg(BLOG_GLOB, { cwd: ROOT });

    // 2. Import and validate metadata (skip invalid files)
    const metas = await Promise.all(
        entries.map(async (p) => {
            try {
                return await importMeta(p);
            } catch (err) {
                console.error(`Invalid blog meta at ${p}:`, err);
                return null;
            }
        })
    );

    // 3. Keep only published posts
    const published: PostItem[] = metas.filter(
        (m): m is PostItem => !!m && m.draft === false
    );

    // 4. Sort by date descending
    const sorted = published.sort((a, b) => {
        const aDate = new Date(a.date).getTime();
        const bDate = new Date(b.date).getTime();
        return bDate - aDate;
    });

    // 5. Prepare output directory and clear existing file
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await fs.rm(OUTPUT_FILE, { force: true });

    // 6. Write JSON (pretty-printed, all fields preserved)
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(sorted, null, 4), "utf-8");

    console.log(
        `Wrote ${sorted.length} posts → ${path.relative(ROOT, OUTPUT_FILE)}`
    );
}

// Execute script
run().catch((e) => {
    console.error(e);
    process.exit(1);
});
