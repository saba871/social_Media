import { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll(".reveal-on-scroll");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
            
            {/* 1. HERO SECTION */}
            <section className="reveal-on-scroll min-h-[60vh] flex flex-col justify-center space-y-8">
                <div className="inline-block px-4 py-1.5 bg-indigo-500/5 border border-indigo-500/10 rounded-full w-fit">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
                        Est. 2026 — Flux Media
                    </span>
                </div>
                
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-zinc-900 dark:text-white">
                    WE CRAFT <br />
                    <span className="text-shine bg-clip-text">DIGITAL ART.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-2xl italic">
                    "We build digital neuro-spaces that breathe, move, and bridge the gap between human intuition and machine precision."
                </p>
            </section>

            {/* 2. BENTO GRID SECTION */}
            <section className="reveal-on-scroll grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[320px]">
                
                {/* Mission Card */}
                <div className="md:col-span-8 glass-card p-12 rounded-[2.5rem] relative overflow-hidden group">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-700" />
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <span className="text-indigo-500 font-bold text-sm tracking-widest">01 // MISSION</span>
                        <div>
                            <h3 className="text-4xl font-black mb-4 tracking-tight">Radical Simplicity.</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 max-w-lg text-lg leading-relaxed">
                                Our goal is to dissolve the barrier between the human mind and the interface. We don't just build apps; we build extensions of thought.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Efficiency Stats */}
                <div className="md:col-span-4 bg-zinc-900 dark:bg-white p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center shadow-2xl transition-transform hover:scale-[1.02]">
                    <div className="text-7xl font-black text-white dark:text-zinc-900 tracking-tighter">99<span className="text-indigo-500">%</span></div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mt-2">Efficiency Index</div>
                </div>

                {/* Image Card */}
                <div className="md:col-span-4 relative overflow-hidden rounded-[2.5rem] group">
                    <img
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070"
                        className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                        alt="Creative Workspace"
                    />
                    <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Strategy Card */}
                <div className="md:col-span-8 glass-card p-12 rounded-[2.5rem] flex items-center justify-between group overflow-hidden">
                    <div className="space-y-4">
                        <h3 className="text-4xl font-black tracking-tight">Neural Strategy</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
                            Every line of code is measured in milliseconds. In 2026, waiting is a relic of the past. We optimize for the speed of thought.
                        </p>
                    </div>
                    <div className="hidden md:block text-8xl font-black text-zinc-500/5 select-none transform group-hover:translate-x-10 transition-transform duration-1000">
                        FAST
                    </div>
                </div>
            </section>

            {/* 3. CTA SECTION */}
            <section className="reveal-on-scroll py-20 text-center space-y-12">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                    READY TO <br /> EVOLVE?
                </h2>
                
                <button className="group relative px-12 py-6 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-bold text-xl overflow-hidden transition-all hover:scale-105 active:scale-95">
                    <span className="relative z-10">INITIATE PROJECT</span>
                    <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
            </section>
        </div>
    );
};

export default About;
