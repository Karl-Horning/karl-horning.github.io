import styles from "@/components/BlogLayout/BlogLayout.module.css";
import { POSTS, type PostMeta } from "@/lib/posts";
import { LINKEDIN_URL } from "@/lib/constants/links";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

interface Props {
    meta: PostMeta;
    children: React.ReactNode;
}

function formatDate(iso: string): string {
    const date = new Date(iso);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/**
 * Shared layout for individual blog post pages.
 *
 * Renders the post header, rule, two-column body (article + author card),
 * and footer with tags and prev/next navigation. Navigation and the topic
 * eyebrow are derived from the post's metadata.
 *
 * @return The blog post layout element.
 */
export default function BlogLayout({ meta, children }: Props) {
    const eyebrow = meta.topics
        .slice(0, 2)
        .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
        .join(" · ");

    const published = POSTS.filter((p) => !p.draft);
    const idx = published.findIndex((p) => p.slug === meta.slug);
    const showNav = idx !== -1 && published.length > 1;
    const prev = showNav
        ? published[(idx - 1 + published.length) % published.length]
        : null;
    const next = showNav ? published[(idx + 1) % published.length] : null;

    return (
        <>
            <div className={styles.hero}>
                <div className={styles.hero__inner}>
                    <p className={`eyebrow ${styles.hero__eyebrow}`}>
                        — {eyebrow}
                    </p>
                    <h1 className={`display ${styles.hero__title}`}>
                        {meta.title}
                    </h1>
                    <div className={styles.hero__meta}>
                        <time
                            className={styles.hero__date}
                            dateTime={meta.date.split("T")[0]}
                        >
                            {formatDate(meta.date)}
                        </time>
                        <span className={styles.hero__time}>
                            {meta.readingTime} min read
                        </span>
                    </div>
                </div>
            </div>

            <hr className="rule" />

            <div className={styles.body}>
                <div className="wrap">
                    <div className={styles.body__grid}>
                        <article
                            className={styles.article}
                            aria-label="Post content"
                        >
                            {children}
                        </article>

                        <aside
                            className={styles.sidebar}
                            aria-label="About the author"
                        >
                            <div className={styles.author}>
                                <p className={styles.author__eyebrow}>
                                    Written by
                                </p>
                                <Image
                                    className={styles.author__photo}
                                    src="/karl-profile-photo.png"
                                    alt="Karl Horning"
                                    width={72}
                                    height={72}
                                />
                                <p className={styles.author__name}>
                                    Karl Horning
                                </p>
                                <p className={styles.author__bio}>
                                    Web Developer at King&apos;s College London.
                                    I build fast, accessible things that work
                                    for everyone.
                                </p>
                                <a
                                    href={LINKEDIN_URL}
                                    className={styles.author__link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Karl Horning on LinkedIn"
                                >
                                    <FaLinkedin aria-hidden="true" />
                                    Connect on LinkedIn
                                    <FiArrowUpRight aria-hidden="true" />
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <div className="wrap">
                    <ul className={styles.footer__tags} aria-label="Topics">
                        {meta.topics.map((topic) => (
                            <li key={topic} className={styles.tag}>
                                {topic}
                            </li>
                        ))}
                    </ul>

                    {showNav && prev && next && (
                        <nav aria-label="Post navigation">
                            <div className={styles.nav__inner}>
                                <Link
                                    href={`/blog/${prev.slug}`}
                                    className={styles.nav__link}
                                    aria-label={`Previous post: ${prev.title}`}
                                >
                                    <span className={styles.nav__dir}>
                                        <FiArrowLeft aria-hidden="true" />{" "}
                                        Previous
                                    </span>
                                    <span className={styles.nav__name}>
                                        {prev.title}
                                    </span>
                                </Link>
                                <Link
                                    href={`/blog/${next.slug}`}
                                    className={`${styles.nav__link} ${styles.nav__link_next}`}
                                    aria-label={`Next post: ${next.title}`}
                                >
                                    <span className={styles.nav__dir}>
                                        Next <FiArrowRight aria-hidden="true" />
                                    </span>
                                    <span className={styles.nav__name}>
                                        {next.title}
                                    </span>
                                </Link>
                            </div>
                        </nav>
                    )}
                </div>
            </div>
        </>
    );
}
