import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./PrevNextNav.module.css";

interface NavItem {
    slug: string;
    title: string;
}

interface PrevNextNavProps {
    /** The previous item, or null to render nothing. */
    prev: NavItem | null;
    /** The next item, or null to render nothing. */
    next: NavItem | null;
    /** URL prefix each item's slug is appended to, for example "/blog". */
    basePath: string;
    /** Singular noun used in each link's accessible name, for example "post" or "project". */
    itemLabel: string;
    /** Label for the wrapping nav landmark, for example "Post navigation". */
    navLabel: string;
}

/**
 * Previous/next navigation shared by blog posts and project pages.
 *
 * Renders nothing if either side is missing, which happens when there's only one published item or the current one isn't published.
 *
 * @return The navigation element, or null.
 */
export default function PrevNextNav({
    prev,
    next,
    basePath,
    itemLabel,
    navLabel,
}: PrevNextNavProps) {
    if (!prev || !next) return null;

    return (
        <nav aria-label={navLabel}>
            <div className={styles.nav__inner}>
                <Link
                    href={`${basePath}/${prev.slug}`}
                    className={styles.nav__link}
                    aria-label={`Previous ${itemLabel}: ${prev.title}`}
                >
                    <span className={styles.nav__dir}>
                        <FiArrowLeft aria-hidden="true" /> Previous
                    </span>
                    <span className={styles.nav__name}>{prev.title}</span>
                </Link>
                <Link
                    href={`${basePath}/${next.slug}`}
                    className={`${styles.nav__link} ${styles.nav__link_next}`}
                    aria-label={`Next ${itemLabel}: ${next.title}`}
                >
                    <span className={styles.nav__dir}>
                        Next <FiArrowRight aria-hidden="true" />
                    </span>
                    <span className={styles.nav__name}>{next.title}</span>
                </Link>
            </div>
        </nav>
    );
}
