import type { Metadata } from "next";
import { meta } from "./meta";
import BlogLayout from "@/components/BlogLayout/BlogLayout";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import { jwtScript } from "./examples";

export const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
};

/**
 * Testing LMS APIs blog post page.
 *
 * @return The blog post page element.
 */
export default function Page() {
    return (
        <BlogLayout meta={meta}>
            <p>
                As part of an LMS evaluation at a large research university, I
                needed to build a Postman testing framework that would let the
                whole team validate API behaviour across three platforms:
                Blackboard, Canvas, and Brightspace. The constraint was that any
                developer on the project should be able to run it — not just the
                analysts who already knew the systems well.
            </p>
            <p>Each platform presented a different challenge.</p>

            <h2>Blackboard: the platform with a Swagger file</h2>
            <p>
                Blackboard publishes its Learn API as an OpenAPI (Swagger) spec
                through the{" "}
                <a href="https://developer.blackboard.com/portal/displayApi">
                    Anthology Developer Portal
                </a>
                . This changes the setup significantly. Rather than manually
                building requests from documentation, you import the spec
                directly into Postman and get a complete, structured collection.
            </p>
            <p>
                Authentication uses OAuth 2.0 with the{" "}
                <code>client_credentials</code> grant type. The flow is: POST to
                the token endpoint with Basic Auth (Client ID + Client Secret),
                receive an <code>access_token</code>, then include that token as
                a Bearer header on all subsequent requests. A short
                post-response script saves it to an environment variable
                automatically, so you never copy tokens manually:
            </p>
            <CodeBlock lang="javascript">{jwtScript}</CodeBlock>
            <p>
                Setting this at the collection level means all requests inherit
                the token without any manual steps. Combined with Postman
                environment variables for the base URL and credentials, the
                collection becomes portable — anyone can clone the repo, import
                the collection, set three variables, and start testing.
            </p>
            <p>
                The full collection is available here:{" "}
                <a href="https://github.com/Karl-Horning/blackboard-learn-apis-postman-collection">
                    blackboard-learn-apis-postman-collection
                </a>
                .
            </p>

            <h2>Canvas: good docs, with one thing worth knowing</h2>
            <p>
                Canvas doesn&apos;t publish a Swagger file, so the process was
                different: work through the API documentation manually, identify
                the endpoints relevant to the evaluation criteria, and build the
                collection by hand. The documentation is readable, but without a
                machine-readable spec you lose the ability to import and
                validate endpoint structure automatically.
            </p>
            <p>
                One thing worth noting if you test Canvas locally using the{" "}
                <a href="https://github.com/instructure/canvas-lms">
                    open-source version
                </a>
                : once you authenticate through the browser UI, API requests
                appear to go through without a Bearer token. This seems to be
                the session cookie carrying the authentication, which the API
                accepts alongside OAuth2. It didn&apos;t affect the evaluation
                testing itself, but it&apos;s worth being aware of if
                you&apos;re running a local instance — it can mask auth issues
                that would only surface in a real OAuth2 flow.
            </p>

            <h2>Brightspace: the documentation problem</h2>
            <p>
                Brightspace uses the{" "}
                <a href="https://docs.valence.desire2learn.com/reference.html">
                    Valence API
                </a>
                , and it was the most difficult of the three to work with — not
                because the API is poorly designed, but because the
                documentation doesn&apos;t describe what its attributes mean.
            </p>
            <p>
                The reference lists endpoints and shows the shape of responses,
                but individual fields carry no descriptions. When you&apos;re
                trying to chain endpoints — using a value returned from one
                request as an input to another — you&apos;re left inferring what
                each field actually represents. For a team running structured,
                reproducible tests under time pressure, that uncertainty adds
                up.
            </p>
            <p>
                There&apos;s a broader point here about API documentation
                quality. A published spec tells you the structure; descriptions
                tell you the semantics. Without both, you spend time
                reverse-engineering intent rather than writing tests.
            </p>

            <h2>What the framework enabled</h2>
            <p>
                Across all three platforms, the goal was the same: everyone on
                the team runs the same set of endpoints, against the same
                criteria, at the same time. That consistency matters for a
                comparative evaluation — if different analysts test different
                subsets of endpoints, the results aren&apos;t comparable.
            </p>
            <p>
                Designing for any developer — rather than just the analysts who
                already knew these platforms — also meant the framework would
                survive staff changes. A new hire joining mid-evaluation could
                get set up without needing a platform-specific walkthrough
                first.
            </p>
            <p>
                The contrast between the three platforms is a reasonable proxy
                for API maturity. An OpenAPI spec isn&apos;t just convenient —
                it changes what tooling is possible and how quickly a new
                developer can become productive. That&apos;s worth considering
                when evaluating any platform that exposes an API.
            </p>
            <p>— Karl</p>
        </BlogLayout>
    );
}
