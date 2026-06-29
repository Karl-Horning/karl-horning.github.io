import type { Metadata } from "next";
import { meta } from "./meta";
import BlogLayout from "@/components/BlogLayout/BlogLayout";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import {
    htmlExample,
    nextOptions,
    prettierConfig,
    viteConfig,
} from "./examples";

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
};

/**
 * Setting up Prettier with Tailwind CSS blog post page.
 *
 * @return The blog post page element.
 */
export default function Page() {
    return (
        <BlogLayout meta={meta}>
            <p>
                This is the setup I reach for at the start of every new React
                project. Getting Prettier and Tailwind CSS working together
                requires one specific step that&apos;s easy to forget — so here
                it is documented once, clearly.
            </p>
            <blockquote>
                <p>
                    I usually create the GitHub repo first and clone it locally,
                    so I initialise Next.js or Vite in an existing folder. If
                    you&apos;re doing the same, use the <code>.</code> at the
                    end of your command to scaffold into the current directory.
                </p>
            </blockquote>
            <h2>Next.js</h2>
            <CodeBlock lang="bash">{"npx create-next-app@latest ."}</CodeBlock>
            <p>Here are the options I usually pick:</p>
            <CodeBlock lang="bash">{nextOptions}</CodeBlock>
            <p>
                Once that&apos;s done, install Prettier and the Tailwind plugin:
            </p>
            <CodeBlock lang="bash">
                {"npm install -D prettier prettier-plugin-tailwindcss"}
            </CodeBlock>
            <p>
                Then add the following config to the bottom of your{" "}
                <code>package.json</code>:
            </p>
            <CodeBlock lang="json">{prettierConfig}</CodeBlock>
            <p>
                Prettier will now sort your Tailwind classes automatically on
                format. (<code>Option + Shift + F</code> on macOS.)
            </p>
            <h2>Vite</h2>
            <p>
                The Prettier config is identical. The only difference is how
                Tailwind is set up.
            </p>
            <p>Install Tailwind CSS and its Vite plugin:</p>
            <CodeBlock lang="bash">
                {"npm install tailwindcss @tailwindcss/vite"}
            </CodeBlock>
            <p>
                Import the plugin in your <code>vite.config.ts</code>:
            </p>
            <CodeBlock lang="typescript">{viteConfig}</CodeBlock>
            <p>
                Import Tailwind in your main stylesheet (for example,{" "}
                <code>src/style.css</code>):
            </p>
            <CodeBlock lang="css">{'@import "tailwindcss";'}</CodeBlock>
            <p>
                Make sure your compiled CSS is loaded in your HTML or app entry:
            </p>
            <CodeBlock lang="html">{htmlExample}</CodeBlock>
            <p>
                If you&apos;re using VS Code, install the Prettier extension and
                enable format-on-save — it will handle class sorting
                automatically.
            </p>
            <p>— Karl</p>
        </BlogLayout>
    );
}
