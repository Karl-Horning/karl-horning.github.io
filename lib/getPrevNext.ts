interface PublishableItem {
    slug: string;
    draft: boolean;
}

/**
 * Finds the previous and next published items relative to a given slug, wrapping around at either end.
 *
 * @param items - The full list of items, including drafts.
 * @param currentSlug - The slug of the current item.
 * @returns The previous and next published items, or both null if the current item isn't published or there's nothing to navigate to.
 */
export function getPrevNext<T extends PublishableItem>(
    items: T[],
    currentSlug: string
): { prev: T | null; next: T | null } {
    const published = items.filter((item) => !item.draft);
    const idx = published.findIndex((item) => item.slug === currentSlug);

    if (idx === -1 || published.length < 2) {
        return { prev: null, next: null };
    }

    return {
        prev: published[(idx - 1 + published.length) % published.length],
        next: published[(idx + 1) % published.length],
    };
}
