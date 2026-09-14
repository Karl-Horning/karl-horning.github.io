/**
 * @fileoverview Navigation tests: skip link, mobile menu toggle, and the mobile drawer's focus behaviour.
 */

import { expect, test } from "@playwright/test";

test("skip link is the first focusable element and targets #main", async ({
    page,
}) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skipLink = page.locator(".skip-link");
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toHaveAttribute("href", "#main");
});

test("mobile nav toggle changes aria-expanded", async ({ page, isMobile }) => {
    test.skip(!isMobile, "hamburger only visible on mobile");
    await page.goto("/");
    const hamburger = page.locator('[aria-controls="mobile-nav"]');
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");
    await hamburger.click();
    await expect(hamburger).toHaveAttribute("aria-expanded", "true");
    await hamburger.click();
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");
});

test("opening the mobile drawer moves focus to its first link", async ({
    page,
    isMobile,
}) => {
    test.skip(!isMobile, "hamburger only visible on mobile");
    await page.goto("/blog");
    await page.locator('[aria-controls="mobile-nav"]').click();
    await expect(page.locator("#mobile-nav a").first()).toBeFocused();
});

test("Tab and Shift+Tab wrap within the open mobile drawer", async ({
    page,
    isMobile,
}) => {
    test.skip(!isMobile, "hamburger only visible on mobile");
    await page.goto("/blog");
    await page.locator('[aria-controls="mobile-nav"]').click();

    const firstLink = page.locator("#mobile-nav a").first();
    const lastLink = page.locator("#mobile-nav a").last();

    await page.keyboard.press("Shift+Tab");
    await expect(lastLink).toBeFocused();

    await page.keyboard.press("Tab");
    await expect(firstLink).toBeFocused();
});

test("Escape closes the mobile drawer and returns focus to the hamburger", async ({
    page,
    isMobile,
}) => {
    test.skip(!isMobile, "hamburger only visible on mobile");
    await page.goto("/blog");
    const hamburger = page.locator('[aria-controls="mobile-nav"]');
    await hamburger.click();
    await page.keyboard.press("Escape");
    await expect(hamburger).toBeFocused();
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");
});
