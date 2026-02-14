import { useEffect, useRef } from "react";

const About = () => {
    // 2026 standard uses Intersection Observers for scroll-triggered "reveal" effects
    const sectionRef = useRef(null);

    return (
        <div className="page-transition max-w-7xl mx-auto px-6 py-20 space-y-40">

            {/* 1. Hero Section: Kinetic Typography */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[70vh]">
                <div className="space-y-8 animate-slideUp">
                    <div className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                            Est. 2026 — Flux Media
                        </span>
                    </div>
                    <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] text-zinc-900 dark:text-white">
                        WE ARE <br />
                        <span className="animate-gradient-text bg-gradient-to-r from-indigo-600 via-purple-500 to-rose-400 bg-clip-text text-transparent">
                            FLUID.
                        </span>
                    </h1>
                    <p className="text-2xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-lg italic">
                        "The interface is the brand." We craft digital neuro-spaces that breathe, move, and connect.
                    </p>
                </div>

                <div className="relative group perspective-1000">
                    <div className="absolute -inset-10 bg-indigo-500/30 rounded-[4rem] blur-[100px] group-hover:bg-purple-500/40 transition-all duration-1000 animate-pulse"></div>
                    <div className="relative overflow-hidden rounded-[3.5rem] transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:scale-105 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070"
                            alt="Our Creative Space"
                            className="w-full h-[600px] object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent flex items-end p-12">
                            <p className="text-white font-bold text-sm tracking-widest uppercase">Tokyo HQ // Remote Core</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Value Bento Grid: Depth & Interaction */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">

                {/* Mission Card - Ultra Glass */}
                <div className="md:col-span-8 glass-card p-12 rounded-[3.5rem] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[80px] group-hover:bg-indigo-500/30 transition-all duration-700" />
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <span className="text-indigo-500 font-black text-xl">01 // MISSION</span>
                        <div>
                            <h3 className="text-5xl font-black mb-6 tracking-tight">Radical Simplicity.</h3>
                            <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
                                Our goal is to dissolve the barrier between the human mind and the machine. We don't just build apps; we build extensions of thought.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Card - Neon Impact */}
                <div className="md:col-span-4 bg-zinc-900 dark:bg-white p-10 rounded-[3.5rem] flex flex-col justify-center items-center text-center shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:-translate-y-4 transition-transform duration-500">
                    <div className="text-8xl font-black text-white dark:text-zinc-900 tracking-tighter">99<span className="text-indigo-500">%</span></div>
                    <div className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">Efficiency Index</div>
                </div>

                {/* Culture Photo */}
                <div className="md:col-span-4 relative overflow-hidden rounded-[3.5rem] group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
                        className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                        alt="Workspace Culture"
                    />
                    <div className="absolute inset-0 bg-indigo-600/20 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>

                {/* Philosophy Card - Horizontal Kinetic */}
                <div className="md:col-span-8 glass-card p-12 rounded-[3.5rem] flex items-center gap-10 group overflow-hidden">
                    <div className="w-24 h-24 bg-zinc-900 dark:bg-zinc-100 rounded-[2rem] flex-shrink-0 flex items-center justify-center text-white dark:text-zinc-900 shadow-2xl group-hover:rotate-[360deg] transition-transform duration-[1.5s] ease-smooth">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-4xl font-black tracking-tight">Neural Optimization</h3>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-md leading-snug">
                            Every line of code is measured in milliseconds. In 2026, waiting is a relic of the past.
                        </p>
                    </div>
                    <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[12rem] font-black text-zinc-500/5 select-none">
                        FAST
                    </div>
                </div>
            </section>

            {/* 3. The "2026" Signature Footer CTA */}
            <section className="relative py-40 flex flex-col items-center">
                <div className="absolute w-[800px] h-[400px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-[120px] rounded-full -z-10 animate-slow-rotate"></div>

                <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter text-center leading-none">
                    READY TO <br /> EVOLVE?
                </h2>

                <button className="group relative px-16 py-8 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-black text-2xl transition-all hover:scale-110 active:scale-95 shadow-2xl">
                    <span className="relative z-10">INITIATE PROJECT</span>
                    <div className="absolute inset-0 bg-indigo-600 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                </button>
            </section>
        </div>
    );
}

export default About;
