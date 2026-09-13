/**
 * @fileoverview Verifies that all internal links across the site resolve without returning a 404 or other error status.
 */

import { expect, test } from "@playwright/test";
import { ROUTES } from "../lib/routes";

test("all internal links resolve successfully", async ({ page, request }) => {
    const checked = new Set<string>();

    for (const route of ROUTES) {
        await page.goto(route);

        const hrefs = await page
            .locator("a[href]")
            .evaluateAll((anchors) =>
                anchors
                    .map((a) => a.getAttribute("href") ?? "")
                    .filter((href) => href.startsWith("/")),
            );

        for (const href of hrefs) {
            if (checked.has(href)) continue;
            checked.add(href);

            const response = await request.get(href);
            expect(
                response.status(),
                `Internal link ${href} (found on ${route}) returned ${response.status()}`,
            ).toBe(200);
        }
    }
});
