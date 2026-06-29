import styles from "@/components/Logo/Logo.module.css";
import Link from "next/link";

/**
 * Displays the site logo with a glitch hover effect.
 *
 * Renders a clickable logo that links to the homepage,
 * styled using a combination of Tailwind utility classes
 * and a custom glitch effect from `Logo.module.css`.
 *
 * @return The site logo as a styled clickable element.
 */
interface LogoProps {
    /** Passed as -1 when the logo is hidden so it is removed from the tab order. */
    tabIndex?: number;
}

export default function Logo({ tabIndex }: LogoProps) {
    return (
        <div className="shrink-0 text-xl transition-colors duration-300 ease-in-out">
            <Link
                id="logo"
                href="/"
                tabIndex={tabIndex}
                className={`relative inline-block rounded py-1 font-glitch text-2xl font-extrabold leading-none text-primary ${styles.glitch} transition-colors duration-300`}
                data-text="Karl Horning"
            >
                Karl Horning
            </Link>
        </div>
    );
}
