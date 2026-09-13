import type { MetadataRoute } from "next";
import { promises as fs } from "fs";
import path from "path";
import type { PostMeta } from "@/lib/posts";
import { SITE_URL } from "@/lib/config";
import { ROUTES } from "@/lib/routes";

export const dynamic = "force-static";

/**
 * Generates the site's XML sitemap for search engine crawlers.
 *
 * Combines the manually maintained {@link ROUTES} list with blog post routes derived from the pre-generated posts JSON file.
 *
 * @return Array of sitemap entries, one per route.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const postsPath = path.join(process.cwd(), "public", "data", "posts.json");
    const posts: PostMeta[] = JSON.parse(await fs.readFile(postsPath, "utf-8"));

    const staticEntries: MetadataRoute.Sitemap = ROUTES.map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
    }));

    const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
    }));

    return [...staticEntries, ...postEntries];
}
