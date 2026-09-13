import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import styles from "@/app/not-found.module.css";

export const metadata: Metadata = {
    title: "Page Not Found",
};

/**
 * Rendered by Next.js whenever a route cannot be matched.
 *
 * Displays an animated glitch "404" with a short explanation and two recovery actions: return home or visit the blog.
 *
 * @return The 404 page element.
 */
export default function NotFound() {
    return (
        <section className="full-page" aria-labelledby="error-heading">
            <div className="page-inner">
                <div
                    className={styles.error__code}
                    aria-hidden="true"
                    data-text="404"
                >
                    <span>4</span>
                    <span className={styles.zero}>0</span>
                    <span>4</span>
                </div>
                <div className={styles.error__rule} aria-hidden="true"></div>
                <div className={styles.error__bottom}>
                    <div className={styles.error__left}>
                        <h1
                            className={styles.error__heading}
                            id="error-heading"
                        >
                            Page not found.
                        </h1>
                        <p className={styles.error__sub}>
                            This URL doesn&apos;t exist — the link may be broken
                            or the page has moved.
                        </p>
                    </div>
                    <div className={styles.error__actions}>
                        <Link href="/" className="btn btn--solid">
                            <FiArrowLeft aria-hidden="true" /> Go home
                        </Link>
                        <Link href="/blog" className="btn btn--ghost">
                            Read the blog
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
