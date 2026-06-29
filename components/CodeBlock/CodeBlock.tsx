import styles from "@/components/CodeBlock/CodeBlock.module.css";
import { codeToHtml } from "shiki";
import CopyButton from "@/components/CopyButton/CopyButton";

/** Props for {@link CodeBlock}. */
interface CodeBlockProps {
    /** The raw code string to display. Newlines and indentation are preserved. */
    children: string;
    /** Shiki language identifier (e.g. `"javascript"`, `"bash"`, `"json"`). */
    lang?: string;
}

/**
 * Displays a syntax-highlighted code block with a copy-to-clipboard button.
 *
 * Uses Shiki to render highlighted HTML server-side, so no highlighting
 * JavaScript is shipped to the client. The copy button is handled by the
 * separate {@link CopyButton} client component.
 *
 * Accepts a raw string (typically a template literal) as its only child so
 * that newlines and indentation are preserved exactly as written.
 *
 * @example
 * ```tsx
 * <CodeBlock lang="javascript">{`const x = 1;`}</CodeBlock>
 * ```
 *
 * @param props - Component props.
 * @param props.children - The code string to render and copy.
 * @param props.lang - Shiki language identifier. Defaults to `"text"`.
 * @returns A positioned wrapper containing the highlighted code and copy button.
 */
export default async function CodeBlock({
    children,
    lang = "text",
}: CodeBlockProps) {
    const highlighted = await codeToHtml(children, {
        lang,
        themes: {
            light: "github-light",
            dark: "github-dark",
        },
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.scroller}>
                <div
                    className={styles.code}
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki output is generated server-side from trusted template literals, not user input.
                    dangerouslySetInnerHTML={{ __html: highlighted }}
                />
            </div>
            <CopyButton text={children} />
        </div>
    );
}
