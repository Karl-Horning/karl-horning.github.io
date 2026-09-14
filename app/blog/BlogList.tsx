"use client";

import Link from "next/link";
import { useState } from "react";
import type { PostMeta } from "@/lib/posts";
import styles from "./BlogList.module.css";
import { FiArrowLeft, FiArrowRight, FiBookOpen } from "react-icons/fi";
import { MONTHS_FULL, MONTHS_SHORT } from "@/lib/constants/dates";

/** Number of posts shown per page. */
const POSTS_PER_PAGE = 10;

/**
 * Formats an ISO date string as a short month + year label (for example, "Apr 2026").
 *
 * @param iso - ISO 8601 date string.
 * @returns Formatted short date string.
 */
function shortDate(iso: string): string {
    const d = new Date(iso);
    return `${MONTHS_SHORT[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/**
 * Formats an ISO date string as a human-readable aria-label
 * (for example, "Published April 2026").
 *
 * @param iso - ISO 8601 date string.
 * @returns Accessible date label string.
 */
function ariaDate(iso: string): string {
    const d = new Date(iso);
    return `Published ${MONTHS_FULL[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/**
 * Capitalises the first character of a string.
 *
 * @param s - Input string.
 * @returns String with its first character uppercased.
 */
function capitalizeFirst(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Props for {@link BlogList}. */
interface BlogListProps {
    /** All published posts, sorted newest first. */
    posts: PostMeta[];
}

/**
 * Paginated blog post listing.
 *
 * Renders a list of posts with date, title, description, and topic tags.
 * Pagination controls appear when the post count exceeds {@link POSTS_PER_PAGE}.
 *
 * @param props - Component props.
 * @param props.posts - All published posts, sorted newest first.
 * @returns The post list section element.
 */
export default function BlogList({ posts }: BlogListProps) {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    const start = (page - 1) * POSTS_PER_PAGE;
    const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

    return (
        <section className={styles.section} aria-labelledby="posts-heading">
            <div className="wrap">
                <h2 className={styles.sr_only} id="posts-heading">
                    All posts
                </h2>

                <ul className={styles.list} role="list">
                    {pagePosts.map((post) => (
                        <li key={post.slug} className={styles.post}>
                            <span
                                className={styles.post__date}
                                aria-label={ariaDate(post.date)}
                            >
                                {shortDate(post.date)}
                            </span>

                            <div className={styles.post__body}>
                                <h3 className={styles.post__title}>
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className={styles.post__desc}>
                                    {post.description}
                                </p>
                                <ul
                                    className={styles.post__tags}
                                    aria-label="Topics"
                                >
                                    {post.topics.map((topic) => (
                                        <li key={topic} className="tag">
                                            {capitalizeFirst(topic)}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={`/blog/${post.slug}`}
                                className={styles.post__read}
                                aria-label={`Read: ${post.title} — ${post.readingTime} min`}
                            >
                                <FiBookOpen aria-hidden="true" />{" "}
                                {post.readingTime} min
                            </Link>
                        </li>
                    ))}
                </ul>

                {totalPages > 1 && (
                    <nav
                        className={styles.pagination}
                        aria-label="Blog pagination"
                    >
                        <button
                            type="button"
                            className={`btn btn--ghost ${styles.pagination__btn}`}
                            onClick={() => setPage((p) => p - 1)}
                            disabled={page === 1}
                            aria-label="Previous page"
                        >
                            <FiArrowLeft aria-hidden="true" /> Previous
                        </button>
                        <span
                            className={styles.pagination__info}
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            Page {page} of {totalPages}
                        </span>
                        <button
                            type="button"
                            className={`btn btn--ghost ${styles.pagination__btn}`}
                            onClick={() => setPage((p) => p + 1)}
                            disabled={page === totalPages}
                            aria-label="Next page"
                        >
                            Next <FiArrowRight aria-hidden="true" />
                        </button>
                    </nav>
                )}
            </div>
        </section>
    );
}
