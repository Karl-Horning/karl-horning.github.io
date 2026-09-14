import { meta as canvasGuide } from "@/app/projects/canvas-guide/meta";
import { meta as colorContrastChecker } from "@/app/projects/color-contrast-checker/meta";
import { meta as karlhorningDev } from "@/app/projects/karlhorning-dev/meta";
import { meta as learnlightPlatform } from "@/app/projects/learnlight-platform/meta";
import { meta as transformText } from "@/app/projects/transform-text/meta";

/** Identifies which icon a project link should render, based on where it points. */
export type LinkIcon = "github" | "chrome" | "edge" | "firefox" | "web";

/** Metadata for a single project. */
export interface ProjectMeta {
    title: string;
    description: string;
    keywords: string[];
    role: string;
    dateFrom: string;
    dateTo: string;
    readingTime: number;
    number: number;
    slug: string;
    draft: boolean;
    stats?: Array<{ value: string; label: string }>;
    links?: Array<{ label: string; href: string; icon?: LinkIcon }>;
    linksTitle?: string;
}

/**
 * All projects sorted by their display number.
 *
 * Filter out drafts before rendering to users.
 */
export const PROJECTS: ProjectMeta[] = [
    learnlightPlatform,
    karlhorningDev,
    transformText,
    canvasGuide,
    colorContrastChecker,
].sort((a, b) => a.number - b.number);
