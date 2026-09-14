import styles from "@/components/BlogLayout/BlogLayout.module.css";
import { POSTS, type PostMeta } from "@/lib/posts";
import { LINKEDIN_URL } from "@/lib/constants/links";
import { FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiCalendar, FiClock } from "react-icons/fi";
import Image from "next/image";
import { MONTHS_FULL } from "@/lib/constants/dates";
import { getPrevNext } from "@/lib/getPrevNext";
import PrevNextNav from "@/components/PrevNextNav/PrevNextNav";

interface Props {
    meta: PostMeta;
    children: React.ReactNode;
}

function formatDate(iso: string): string {
    const date = new Date(iso);
    return `${date.getUTCDate()} ${MONTHS_FULL[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/**
 * Shared layout for individual blog post pages.
 *
 * Renders the post header, rule, two-column body (article + author/topics sidebar), and footer with prev/next navigation. Navigation is derived from the post's metadata.
 *
 * @return The blog post layout element.
 */
export default function BlogLayout({ meta, children }: Props) {
    const { prev, next } = getPrevNext(POSTS, meta.slug);

    return (
        <>
            <div className="page-header">
                <div className="page-header__inner">
                    <h1 className={`display ${styles.hero__title}`}>
                        {meta.title}
                    </h1>
                    <div className={styles.hero__meta}>
                        <span className={styles.hero__meta_item}>
                            <FiCalendar aria-hidden="true" />
                            <time dateTime={meta.date.split("T")[0]}>
                                {formatDate(meta.date)}
                            </time>
                        </span>
                        <span className={styles.hero__meta_item}>
                            <FiClock aria-hidden="true" />
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
                            className="prose"
                            aria-label="Post content"
                        >
                            {children}
                        </article>

                        <aside
                            className={styles.sidebar}
                            aria-label="Post details"
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

                            <div className="card">
                                <p className="card__title">Topics</p>
                                <ul
                                    className="pill-list"
                                    role="list"
                                    aria-label="Topics"
                                >
                                    {meta.topics.map((topic) => (
                                        <li key={topic} className="tag">
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <div className="wrap">
                    <PrevNextNav
                        prev={prev}
                        next={next}
                        basePath="/blog"
                        itemLabel="post"
                        navLabel="Post navigation"
                    />
                </div>
            </div>
        </>
    );
}
