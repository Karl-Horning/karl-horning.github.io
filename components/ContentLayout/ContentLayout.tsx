import styles from "./ContentLayout.module.css";
import PrevNextNav from "@/components/PrevNextNav/PrevNextNav";

interface NavItem {
    slug: string;
    title: string;
}

interface ContentLayoutProps {
    /** Small label above the title, for example "Project 01". Omit to render no eyebrow. */
    eyebrow?: string;
    title: string;
    /** Class applied to the h1 alongside "display" — each consumer owns its own title sizing. */
    titleClassName: string;
    /** Icon + text items shown under the title, for example a date and reading time. */
    metaRow: React.ReactNode;
    /** The main content column: prose, and anything else that belongs beside the sidebar rather than inside it. */
    mainContent: React.ReactNode;
    /** Accessible label for the sidebar landmark. */
    sidebarLabel: string;
    /** Sidebar cards, for example an author card or stats/tech-stack cards. */
    sidebar: React.ReactNode;
    /** The previous item in the series, or null to hide navigation. */
    prev: NavItem | null;
    /** The next item in the series, or null to hide navigation. */
    next: NavItem | null;
    /** URL prefix each item's slug is appended to, for example "/blog". */
    basePath: string;
    /** Singular noun used in each nav link's accessible name, for example "post" or "project". */
    itemLabel: string;
    /** Label for the prev/next nav landmark, for example "Post navigation". */
    navLabel: string;
}

/**
 * Shared shell for blog post and project detail pages.
 *
 * Renders the header (optional eyebrow, title, meta row), a rule, a two-column body (main content plus a sticky sidebar), and a footer with prev/next navigation. Everything content-specific — the prose itself, sidebar cards, and meta row — is supplied by the caller.
 *
 * @return The content layout element.
 */
export default function ContentLayout({
    eyebrow,
    title,
    titleClassName,
    metaRow,
    mainContent,
    sidebarLabel,
    sidebar,
    prev,
    next,
    basePath,
    itemLabel,
    navLabel,
}: ContentLayoutProps) {
    return (
        <>
            <div className="page-header">
                <div className="page-header__inner">
                    {eyebrow && (
                        <p className="eyebrow page-header__eyebrow">
                            {eyebrow}
                        </p>
                    )}
                    <h1 className={`display ${titleClassName}`}>{title}</h1>
                    <div className="hero__meta">{metaRow}</div>
                </div>
            </div>

            <hr className="rule" />

            <div className={styles.body}>
                <div className="wrap">
                    <div className={styles.body__grid}>
                        <div>{mainContent}</div>
                        <aside
                            className={styles.sidebar}
                            aria-label={sidebarLabel}
                        >
                            {sidebar}
                        </aside>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <div className="wrap">
                    <PrevNextNav
                        prev={prev}
                        next={next}
                        basePath={basePath}
                        itemLabel={itemLabel}
                        navLabel={navLabel}
                    />
                </div>
            </div>
        </>
    );
}
