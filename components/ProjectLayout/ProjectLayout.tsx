import styles from "@/components/ProjectLayout/ProjectLayout.module.css";
import { PROJECTS, type LinkIcon, type ProjectMeta } from "@/lib/projects";
import { FiBriefcase, FiCalendar, FiExternalLink } from "react-icons/fi";
import { FaChrome, FaEdge, FaFirefox, FaGithub, FaGlobe } from "react-icons/fa";
import type { IconType } from "react-icons";
import { MONTHS_SHORT } from "@/lib/constants/dates";
import { getPrevNext } from "@/lib/getPrevNext";
import ContentLayout from "@/components/ContentLayout/ContentLayout";

/** Maps a project link's icon field to the icon it renders. */
const LINK_ICONS: Record<LinkIcon, IconType> = {
    github: FaGithub,
    chrome: FaChrome,
    edge: FaEdge,
    firefox: FaFirefox,
    web: FaGlobe,
};

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
 * Project page content, rendered inside the shared {@link ContentLayout} shell.
 *
 * Supplies the meta row (role, date range), the prose body plus an optional links section, and a sidebar with stats and tech-stack cards.
 *
 * @return The project page layout element.
 */
export default function ProjectLayout({ meta, children }: Props) {
    const { prev, next } = getPrevNext(PROJECTS, meta.slug);

    return (
        <ContentLayout
            eyebrow={`Project ${String(meta.number).padStart(2, "0")}`}
            title={meta.title}
            titleClassName={styles.hero__title}
            metaRow={
                <>
                    <span className="hero__meta_item">
                        <FiBriefcase aria-hidden="true" />
                        {meta.role}
                    </span>
                    <span className="hero__meta_item">
                        <FiCalendar aria-hidden="true" />
                        {formatDate(meta.dateFrom)} –{" "}
                        {formatDate(meta.dateTo)}
                    </span>
                </>
            }
            mainContent={
                <>
                    <div className={styles.prose}>{children}</div>

                    {meta.links && meta.links.length > 0 && (
                        <div className={styles.links}>
                            <p className={styles.links__title}>
                                {meta.linksTitle ?? "Links"}
                            </p>
                            <ul className={styles.links__list} role="list">
                                {meta.links.map((link) => {
                                    const LinkIconComponent = link.icon
                                        ? LINK_ICONS[link.icon]
                                        : FiExternalLink;
                                    return (
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
                                                <LinkIconComponent aria-hidden="true" />
                                            </span>
                                            <p className={styles.link__text}>
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
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </>
            }
            sidebarLabel="Project details"
            sidebar={
                <>
                    {meta.stats && meta.stats.length > 0 && (
                        <div className="card">
                            <p className="card__title">At a glance</p>
                            <ul className={styles.stats} role="list">
                                {meta.stats.map((s) => (
                                    <li key={s.label} className={styles.stat}>
                                        <span className={styles.stat__value}>
                                            {s.value}
                                        </span>
                                        <span className={styles.stat__label}>
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
                </>
            }
            prev={prev}
            next={next}
            basePath="/projects"
            itemLabel="project"
            navLabel="Project navigation"
        />
    );
}
