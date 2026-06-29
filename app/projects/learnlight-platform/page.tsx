import type { Metadata } from "next";
import { meta } from "./meta";
import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
};

/**
 * Learnlight Platform project page.
 *
 * @return The project page element.
 */
export default function Page() {
    return (
        <ProjectLayout meta={meta}>
            <p>
                From 2021 to 2024 I worked as a full-stack JavaScript developer
                at Learnlight, a language learning platform serving{" "}
                <strong>700,000+ learners across 180+ countries</strong>. The
                backend was built on Apollo Server with a GraphQL API, backed by
                PostgreSQL, MongoDB, and Memcached, running inside AWS.
            </p>
            <p>
                The most impactful thing I worked on was fixing an N+1 query
                problem affecting a large number of endpoints. I noticed it
                myself — repeated database calls were flooding the terminal
                during development. I spent time properly understanding the
                problem before touching any code, working through documentation
                and talks on DataLoader until I was confident in the approach.
                The fix reduced queries from 36 to 1 on the worst-affected
                endpoints and cut resolver response times by up to 70%. I
                applied it selectively — where the N+1 count was low or the
                endpoint rarely visited, the overhead wasn&apos;t worth it.
            </p>
            <p>
                I also owned the Oxford Learner&apos;s Dictionaries API
                integration end to end. The ticket was just to add the endpoint,
                but before touching the platform I built a standalone proof of
                concept to get familiar with the API&apos;s quirks — the
                definition field returns raw HTML inside JSON, which needed
                parsing with Cheerio before it was usable. Working through the
                edge cases in isolation first meant the production integration
                went in cleanly.
            </p>
            <p>
                For SCORM, the platform was opening endpoints to external
                content providers and needed protection against excessive
                requests. I read through the available rate limiting options,
                built a PoC using graphql-rate-limit-directive to validate the
                approach against the existing stack, then implemented it in
                production.
            </p>
        </ProjectLayout>
    );
}
