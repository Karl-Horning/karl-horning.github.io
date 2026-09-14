import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
}

/**
 * A link that opens in a new tab, and announces that to screen readers.
 *
 * The new-tab note is appended to aria-label when one is supplied, since aria-label overrides descendant content when computing a link's accessible name.
 *
 * @param props - Standard anchor props, plus the required href.
 * @return The external link element.
 */
export default function ExternalLink({
    href,
    children,
    "aria-label": ariaLabel,
    ...rest
}: ExternalLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
                ariaLabel ? `${ariaLabel} (opens in a new tab)` : undefined
            }
            {...rest}
        >
            {children}
            {!ariaLabel && (
                <span className="sr-only"> (opens in a new tab)</span>
            )}
        </a>
    );
}
