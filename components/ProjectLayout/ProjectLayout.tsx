import styles from "@/components/ProjectLayout/ProjectLayout.module.css";
import { PROJECTS, type ProjectMeta } from "@/lib/projects";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

interface Props {
    meta: ProjectMeta;
    children: React.ReactNode;
}

function formatDate(raw: string): string {
    if (raw === "present") return "Present";
    const [mm, yyyy] = raw.split("-");
    const months = [
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
    return `${months[parseInt(mm, 10) - 1]} ${yyyy}`;
}

/**
 * Shared layout for individual project pages.
 *
 * Renders the hero, rule, two-column body (prose + sidebar), and
 * prev/next navigation. Sidebar content (stats and tech stack) and the
 * links list are derived from the project's metadata. The prose body and
 * any inline images are passed as {@code children}.
 *
 * @return The project page layout element.
 */
export default function ProjectLayout({ meta, children }: Props) {
    const published = PROJECTS.filter((p) => !p.draft);
    const idx = published.findIndex((p) => p.slug === meta.slug);
    const prev = published[(idx - 1 + published.length) % published.length];
    const next = published[(idx + 1) % published.length];

    return (
        <>
            <div className={styles.hero}>
                <div className={styles.hero__inner}>
                    <p className={`eyebrow ${styles.hero__eyebrow}`}>
                        — Project {String(meta.number).padStart(2, "0")}
                    </p>
                    <h1 className={`display ${styles.hero__title}`}>
                        {meta.title}
                    </h1>
                    <div className={styles.hero__meta}>
                        <span className={styles.hero__role}>{meta.role}</span>
                        <span className={styles.hero__period}>
                            {formatDate(meta.dateFrom)} –{" "}
                            {formatDate(meta.dateTo)}
                        </span>
                    </div>
                </div>
            </div>

            <hr className="rule" />

            <div className={styles.body}>
                <div className="wrap">
                    <div className={styles.body__grid}>
                        <div>
                            <div className={styles.prose}>{children}</div>

                            {meta.links && meta.links.length > 0 && (
                                <div className={styles.links}>
                                    <p className={styles.links__title}>
                                        {meta.linksTitle ?? "Links"}
                                    </p>
                                    <ul
                                        className={styles.links__list}
                                        role="list"
                                    >
                                        {meta.links.map((link) => (
                                            <li
                                                key={link.label}
                                                className={styles.link}
                                            >
                                                <span
                                                    className={
                                                        styles.link__icon
                                                    }
                                                    aria-hidden="true"
                                                >
                                                    <FiArrowUpRight aria-hidden="true" />
                                                </span>
                                                <p
                                                    className={
                                                        styles.link__text
                                                    }
                                                >
                                                    <a
                                                        href={link.href}
                                                        className={
                                                            styles.link__anchor
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {link.label}
                                                    </a>
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <aside
                            className={styles.sidebar}
                            aria-label="Project details"
                        >
                            {meta.stats && meta.stats.length > 0 && (
                                <div className={styles.card}>
                                    <p className={styles.card__title}>
                                        At a glance
                                    </p>
                                    <ul className={styles.stats} role="list">
                                        {meta.stats.map((s) => (
                                            <li
                                                key={s.label}
                                                className={styles.stat}
                                            >
                                                <span
                                                    className={
                                                        styles.stat__value
                                                    }
                                                >
                                                    {s.value}
                                                </span>
                                                <span
                                                    className={
                                                        styles.stat__label
                                                    }
                                                >
                                                    {s.label}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className={styles.card}>
                                <p className={styles.card__title}>Tech stack</p>
                                <ul className={styles.tech} role="list">
                                    {meta.keywords.map((kw) => (
                                        <li key={kw} className={styles.tag}>
                                            {kw}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <div className={styles.nav}>
                <div className="wrap">
                    <nav aria-label="Project navigation">
                        <div className={styles.nav__inner}>
                            <Link
                                href={`/projects/${prev.slug}`}
                                className={styles.nav__link}
                                aria-label={`Previous project: ${prev.title}`}
                            >
                                <span className={styles.nav__dir}>
                                    <FiArrowLeft aria-hidden="true" /> Previous
                                </span>
                                <span className={styles.nav__name}>
                                    {prev.title}
                                </span>
                            </Link>
                            <Link
                                href={`/projects/${next.slug}`}
                                className={`${styles.nav__link} ${styles.nav__link_next}`}
                                aria-label={`Next project: ${next.title}`}
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
                </div>
            </div>
        </>
    );
}
