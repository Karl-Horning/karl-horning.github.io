/**
 * @fileoverview Automated accessibility tests using axe-core.
 *
 * Scans every page for WCAG violations detectable by axe. Note that axe catches roughly 30–40% of accessibility issues; these tests complement but do not replace manual accessibility review.
 */

import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { ROUTES } from "../lib/routes";

for (const route of ROUTES) {
    test(`${route} — no automatically detectable accessibility violations`, async ({
        page,
    }) => {
        await page.goto(route);

        const builder = new AxeBuilder({ page });

        const results = await builder.analyze();
        expect(results.violations).toEqual([]);
    });
}
