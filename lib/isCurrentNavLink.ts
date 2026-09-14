/**
 * Whether a nav link points to the page currently being viewed, for `aria-current="page"`.
 *
 * Hash-anchor links (for example "/#about") are never treated as current — without scroll-spy tracking there's no reliable way to know which section is in view.
 *
 * @param pathname - The current route pathname, from `usePathname()`.
 * @param href - A nav link's href.
 * @return True if href points to the current page.
 */
export function isCurrentNavLink(pathname: string, href: string): boolean {
    if (href.includes("#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
}
