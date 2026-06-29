import styles from "@/components/Projects/Projects.module.css";
import { PROJECTS } from "@/lib/projects";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

/**
 * Selected work section listing notable projects.
 *
 * Renders a numbered list of projects, each showing a title, description,
 * technology tags, and a link to the full project page. Linked from the
 * main navigation via the `#projects` anchor and labelled for screen
 * readers via `aria-labelledby`.
 *
 * @return The projects section element.
 */
export default function Projects() {
    const published = PROJECTS.filter((p) => !p.draft);

    return (
        <section
            className="section"
            id="projects"
            aria-labelledby="proj-heading"
        >
            <div className="wrap">
                <div className="section__meta">
                    <span className="eyebrow" aria-hidden="true">
                        Selected work
                    </span>
                    <h2 className="section__title" id="proj-heading">
                        Projects
                    </h2>
                </div>

                <ul className={styles.proj_list} role="list">
                    {published.map((project) => (
                        <li key={project.slug} className={styles.proj}>
                            <span
                                className={styles.proj__num}
                                aria-hidden="true"
                            >
                                {String(project.number).padStart(2, "0")}
                            </span>
                            <div>
                                <h3 className={styles.proj__title}>
                                    {project.title}
                                </h3>
                                <p className={styles.proj__desc}>
                                    {project.description}
                                </p>
                                <ul
                                    className={styles.proj__tags}
                                    aria-label="Technologies used"
                                >
                                    {project.keywords.map((kw) => (
                                        <li
                                            key={kw}
                                            className={styles.tag}
                                        >
                                            {kw}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href={`/projects/${project.slug}`}
                                className={styles.proj__cta}
                                aria-label={`View ${project.title} project`}
                            >
                                View <FiArrowRight aria-hidden="true" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
