/** A single navigation link entry. */
export interface NavLink {
    /** URL the link points to (absolute path or hash anchor). */
    href: string;
    /** Visible label rendered inside the anchor. */
    label: string;
}

/** Links rendered across all site navigation (header and footer). */
export const NAV_LINKS: NavLink[] = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];
