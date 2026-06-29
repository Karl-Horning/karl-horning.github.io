import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import CtaStrip from "@/components/CtaStrip/CtaStrip";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <CtaStrip />
        </>
    );
}
