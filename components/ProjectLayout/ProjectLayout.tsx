import styles from "@/components/ProjectLayout/ProjectLayout.module.css";
import { PROJECTS, type ProjectMeta } from "@/lib/projects";
import { FiArrowUpRight, FiBriefcase, FiCalendar } from "react-icons/fi";
import { MONTHS_SHORT } from "@/lib/constants/dates";
import { getPrevNext } from "@/lib/getPrevNext";
import PrevNextNav from "@/components/PrevNextNav/PrevNextNav";

interface Props {
    meta: ProjectMeta;
    children: React.ReactNode;
}

function formatDate(raw: string): string {
    if (raw === "present") return "Present";
    const [mm, yyyy] = raw.split("-");
    return `${MONTHS_SHORT[parseInt(mm, 10) - 1]} ${yyyy}`;
}

/**
 * Shared layout for individual project pages.
 *
 * Renders the hero, rule, two-column body (prose + sidebar), and prev/next navigation. Sidebar content (stats and tech stack) and the links list are derived from the project's metadata. The prose body and any inline images are passed as {@code children}.
 *
 * @return The project page layout element.
 */
export default function ProjectLayout({ meta, children }: Props) {
    const { prev, next } = getPrevNext(PROJECTS, meta.slug);

    return (
        <>
            <div className="page-header">
                <div className="page-header__inner">
                    <p className="eyebrow page-header__eyebrow">
                        Project {String(meta.number).padStart(2, "0")}
                    </p>
                    <h1 className={`display ${styles.hero__title}`}>
                        {meta.title}
                    </h1>
                    <div className={styles.hero__meta}>
                        <span className={styles.hero__meta_item}>
                            <FiBriefcase aria-hidden="true" />
                            {meta.role}
                        </span>
                        <span className={styles.hero__meta_item}>
                            <FiCalendar aria-hidden="true" />
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
                                <div className="card">
                                    <p className="card__title">
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

                            <div className="card">
                                <p className="card__title">Tech stack</p>
                                <ul className="pill-list" role="list">
                                    {meta.keywords.map((kw) => (
                                        <li key={kw} className="tag">
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
                    <PrevNextNav
                        prev={prev}
                        next={next}
                        basePath="/projects"
                        itemLabel="project"
                        navLabel="Project navigation"
                    />
                </div>
            </div>
        </>
    );
}
