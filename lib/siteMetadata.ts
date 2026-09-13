/**
 * @fileoverview Shared metadata utilities for the site.
 */

import type { Metadata } from "next";
import {
    AUTHOR_NAME,
    AUTHOR_URL,
    SITE_NAME,
    SITE_URL,
} from "@/lib/config";

export { AUTHOR_NAME, AUTHOR_URL, SITE_NAME, SITE_URL };

interface PageMeta {
    title: string;
    description: string;
    slug: string;
    date?: string;
}

/**
 * Generates a Next.js {@link Metadata} object for a page.
 *
 * The OpenGraph image is derived from the page slug, matching the naming convention of the files in `/public/og/`.
 *
 * @param meta - The page's meta object from its `meta.ts` file.
 * @returns A fully populated {@link Metadata} object for the page.
 */
export function generatePageMetadata(meta: PageMeta): Metadata {
    const pageUrl = `${SITE_URL}/${meta.slug}`;
    const ogImage = `/og/${meta.slug}.png`;

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: pageUrl,
            images: [{ url: ogImage, alt: meta.title }],
            type: "article",
            siteName: SITE_NAME,
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            images: [ogImage],
        },
    };
}

/**
 * Generates a Schema.org {@link https://schema.org/Article Article} JSON-LD object for a page.
 *
 * @param meta - The page's meta object from its `meta.ts` file.
 * @returns A JSON-LD data object ready to be serialised into a script tag.
 */
export function generatePageJsonLd(meta: PageMeta): Record<string, unknown> {
    const pageUrl = `${SITE_URL}/${meta.slug}`;
    const ogImage = `${SITE_URL}/og/${meta.slug}.png`;

    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        url: pageUrl,
        image: ogImage,
        author: {
            "@type": "Person",
            name: AUTHOR_NAME,
            url: AUTHOR_URL,
        },
        ...(meta.date ? { datePublished: meta.date } : {}),
        inLanguage: "en-GB",
    };
}
