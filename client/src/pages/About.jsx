import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("reveal-visible")),
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );
        document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-5 py-16 space-y-28">

            {/* ── 1. Hero ── */}
            <section className="reveal-on-scroll min-h-[55vh] flex flex-col justify-center space-y-8">

                {/* Label */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EDE9E3] dark:bg-[#1C1917] border border-[#E2DDD6] dark:border-[#2C2825] rounded-full w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C9E8F]" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
                        Est. 2026 — Flux Media
                    </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl md:text-8xl font-medium tracking-tight leading-[0.95] text-stone-900 dark:text-stone-100">
                    We craft<br />
                    <span className="italic font-normal text-[#7C9E8F]">digital art.</span>
                </h1>

                {/* Quote */}
                <p className="text-[17px] md:text-xl text-stone-400 dark:text-stone-500 font-light leading-relaxed max-w-2xl italic border-l-2 border-[#D1E0DA] dark:border-[#2C2825] pl-5">
                    "We build digital spaces that breathe, move, and bridge the gap between human intuition and thoughtful design."
                </p>
            </section>

            {/* ── 2. Bento Grid ── */}
            <section className="reveal-on-scroll grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px]">

                {/* Mission */}
                <div className="md:col-span-8 bg-[#FDFCFA] dark:bg-[#1F1C1A] border border-[#E2DDD6] dark:border-[#2C2825] p-10 rounded-2xl relative overflow-hidden group transition-all duration-300 hover:border-[#7C9E8F]/40 dark:hover:border-[#4A7566]/40 hover:shadow-[0_4px_24px_rgb(0,0,0,0.05)]">
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#7C9E8F]/8 blur-[60px] rounded-full group-hover:bg-[#7C9E8F]/15 transition-all duration-700" />
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#7C9E8F]">01 — Mission</span>
                        <div className="space-y-3">
                            <h3 className="font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100">
                                Radical simplicity.
                            </h3>
                            <p className="text-stone-400 dark:text-stone-500 max-w-lg text-[15px] leading-relaxed">
                                Our goal is to dissolve the barrier between the human mind and the interface. We don't just build apps — we build extensions of thought.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="md:col-span-4 bg-[#1C1917] dark:bg-[#EDE9E3] rounded-2xl flex flex-col justify-center items-center text-center transition-transform duration-300 hover:scale-[1.01]">
                    <div className="font-serif text-7xl font-medium text-stone-100 dark:text-stone-800 tracking-tight">
                        99<span className="text-[#7C9E8F]">%</span>
                    </div>
                    <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500 mt-2">
                        Efficiency index
                    </div>
                </div>

                {/* Image */}
                <div className="md:col-span-4 relative overflow-hidden rounded-2xl group">
                    <img
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070"
                        className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-[1.04]"
                        alt="Creative Workspace"
                    />
                    <div className="absolute inset-0 bg-[#7C9E8F]/8 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Strategy */}
                <div className="md:col-span-8 bg-[#FDFCFA] dark:bg-[#1F1C1A] border border-[#E2DDD6] dark:border-[#2C2825] p-10 rounded-2xl flex items-center justify-between group overflow-hidden transition-all duration-300 hover:border-[#7C9E8F]/40 dark:hover:border-[#4A7566]/40 hover:shadow-[0_4px_24px_rgb(0,0,0,0.05)]">
                    <div className="space-y-3">
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#7C9E8F]">02 — Strategy</span>
                        <h3 className="font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100">
                            Measured precision.
                        </h3>
                        <p className="text-stone-400 dark:text-stone-500 max-w-md text-[15px] leading-relaxed">
                            Every line of code is measured in milliseconds. We optimize for the speed of thought — waiting is a relic of the past.
                        </p>
                    </div>
                    <div className="hidden md:block font-serif text-7xl font-medium text-stone-100 dark:text-stone-800 select-none transform group-hover:translate-x-3 transition-transform duration-700">
                        →
                    </div>
                </div>

            </section>

            {/* ── 3. CTA ── */}
            <section className="reveal-on-scroll py-16 text-center space-y-10">
                <div className="space-y-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-stone-400">Ready?</p>
                    <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-stone-900 dark:text-stone-100">
                        Let's build something<br />
                        <span className="italic font-normal text-stone-400 dark:text-stone-500">worth remembering.</span>
                    </h2>
                </div>

                <button className="group inline-flex items-center gap-3 px-10 py-4 bg-stone-900 dark:bg-stone-100 text-[#F7F5F2] dark:text-stone-900 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 hover:bg-[#4A7566] dark:hover:bg-[#D1E0DA] hover:shadow-[0_4px_20px_rgb(74,117,102,0.2)] active:scale-[0.98]">
                    Start a project
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </section>

        </div>
    );
};

export default About;
