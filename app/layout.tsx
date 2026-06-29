import type { Metadata, Viewport } from "next";
import { Inter, Barlow_Condensed, Rubik_Glitch } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import {
    AUTHOR_NAME,
    AUTHOR_URL,
    SITE_DESCRIPTION,
    SITE_NAME,
    SITE_TITLE,
    SITE_URL,
} from "@/lib/config";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
    weight: ["700", "900"],
    variable: "--font-barlow-condensed",
    subsets: ["latin"],
});

const rubikGlitch = Rubik_Glitch({
    weight: "400",
    variable: "--font-rubik-glitch",
    subsets: ["latin"],
});

export const viewport: Viewport = {
    themeColor: "#cb2d6f",
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        template: `%s | ${SITE_TITLE}`,
        default: SITE_TITLE,
    },
    description: SITE_DESCRIPTION,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    alternates: {
        canonical: SITE_URL,
    },
    icons: {
        icon: [
            {
                url: "/favicons.ico/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                url: "/favicons.ico/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/favicons.ico/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
        ],
        shortcut: "/favicons.ico/favicon.ico",
        apple: [
            { url: "/favicons.ico/apple-icon.png" },
            {
                url: "/favicons.ico/apple-icon-180x180.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },
    manifest: "/favicons.ico/manifest.json",
    openGraph: {
        siteName: SITE_NAME,
        locale: "en_GB",
        type: "website",
        url: SITE_URL,
        images: [{ url: "/og/preview-image.png" }],
    },
    twitter: {
        card: "summary_large_image",
        images: ["/og/preview-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en-GB"
            className={`${inter.variable} ${barlowCondensed.variable} ${rubikGlitch.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <a href="#main" className="skip-link">
                    Skip to main content
                </a>
                <Nav />
                <main id="main" className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
