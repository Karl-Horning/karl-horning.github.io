/**
 * @fileoverview Canonical list of all page routes.
 *
 * Used as the single source of truth for both the generated sitemap and Playwright smoke tests. Add a route here when a new page is created.
 */

export const ROUTES = [
    "/",
    "/blog",
    "/contact",
    "/projects/learnlight-platform",
    "/projects/karlhorning-dev",
    "/projects/transform-text",
    "/projects/canvas-guide",
    "/projects/color-contrast-checker",
] as const;

export type Route = (typeof ROUTES)[number];
