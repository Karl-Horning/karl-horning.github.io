# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

Add new entries here as they're merged, then rename this section when the release is ready.

## [3.0.0] - 2026-09-13

Baseline for the current site — the third build of karlhorning.dev, rewritten on Next.js. Earlier versions weren't tagged, so this release gathers everything built so far rather than listing it commit by commit.

### Added

- Homepage with hero, about, projects, and call-to-action sections
- Contact page with a responsive form
- Project pages for the Colour Contrast Checker, Transform Text Extension, Canvas Content Styling Guide, and karlhorning.dev, each with previous/next navigation
- Blog with post pages, an RSS feed, and syntax-highlighted code blocks via Shiki
- Generated sitemap and site metadata, including Open Graph tags, a canonical URL, and structured data
- Custom 404 page
- Playwright end-to-end tests and Vitest unit tests
- GitHub Actions workflow deploying to GitHub Pages on every push to `main`

### Changed

- Components reorganised into per-component folders
- Dependencies updated to their latest versions

### Fixed

- The About link missing from the main navigation
