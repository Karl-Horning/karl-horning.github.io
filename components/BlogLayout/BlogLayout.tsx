import styles from "@/components/BlogLayout/BlogLayout.module.css";
import { POSTS, type PostMeta } from "@/lib/posts";
import { LINKEDIN_URL } from "@/lib/constants/links";
import { FaLinkedin } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";
import Image from "next/image";
import { MONTHS_FULL } from "@/lib/constants/dates";
import { getPrevNext } from "@/lib/getPrevNext";
import ContentLayout from "@/components/ContentLayout/ContentLayout";
import ExternalLink from "@/components/ExternalLink/ExternalLink";

interface Props {
    meta: PostMeta;
    children: React.ReactNode;
}

function formatDate(iso: string): string {
    const date = new Date(iso);
    return `${date.getUTCDate()} ${MONTHS_FULL[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/**
 * Blog post page content, rendered inside the shared {@link ContentLayout} shell.
 *
 * Supplies the meta row (date, reading time), the prose article, and a sidebar with the author card and a topics card.
 *
 * @return The blog post layout element.
 */
export default function BlogLayout({ meta, children }: Props) {
    const { prev, next } = getPrevNext(POSTS, meta.slug);

    return (
        <ContentLayout
            title={meta.title}
            titleClassName={styles.hero__title}
            metaRow={
                <>
                    <span className="hero__meta_item">
                        <FiCalendar aria-hidden="true" />
                        <time dateTime={meta.date.split("T")[0]}>
                            {formatDate(meta.date)}
                        </time>
                    </span>
                    <span className="hero__meta_item">
                        <FiClock aria-hidden="true" />
                        {meta.readingTime} min read
                    </span>
                </>
            }
            mainContent={
                <article className="prose" aria-label="Post content">
                    {children}
                </article>
            }
            sidebarLabel="Post details"
            sidebar={
                <>
                    <div className={styles.author}>
                        <p className={styles.author__eyebrow}>Written by</p>
                        <Image
                            className={styles.author__photo}
                            src="/karl-profile-photo.png"
                            alt=""
                            width={72}
                            height={72}
                        />
                        <p className={styles.author__name}>Karl Horning</p>
                        <p className={styles.author__bio}>
                            Web Developer at King&apos;s College London. I
                            build fast, accessible things that work for
                            everyone.
                        </p>
                        <ExternalLink
                            href={LINKEDIN_URL}
                            className={styles.author__link}
                            aria-label="Karl Horning on LinkedIn"
                        >
                            <FaLinkedin aria-hidden="true" />
                            Connect on LinkedIn
                        </ExternalLink>
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
                </>
            }
            prev={prev}
            next={next}
            basePath="/blog"
            itemLabel="post"
            navLabel="Post navigation"
        />
    );
}
