import type { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import type { PostMeta } from "@/lib/posts";
import BlogList from "./BlogList";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Notes on web development, accessibility, and lessons from development work.",
};

/**
 * Blog listing page.
 *
 * Reads published posts from the pre-generated JSON file and passes them to the paginated {@link BlogList} component.
 *
 * @return The blog listing page element.
 */
export default async function Page() {
    const postsPath = path.join(
        process.cwd(),
        "public",
        "data",
        "posts.json"
    );
    const posts: PostMeta[] = JSON.parse(await fs.readFile(postsPath, "utf-8"));

    return (
        <>
            <div className="page-header">
                <div className="page-header__inner">
                    <p className="eyebrow page-header__eyebrow">— Writing</p>
                    <h1 className="display page-header__title">Blog</h1>
                </div>
            </div>

            <hr className="rule" />

            <BlogList posts={posts} />
        </>
    );
}
