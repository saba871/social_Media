import { useState } from "react";

const Contact = () => {
    return (
        <div className="page-transition min-h-screen flex items-center justify-center p-6 lg:p-12 overflow-hidden">
            <div className="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* 1. Left Side: Kinetic Branding & Info */}
                <div className="space-y-12 relative animate-slideUp">
                    {/* Background Ambient Orb */}
                    <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>

                    <div className="relative z-10 space-y-6">
                        <div className="inline-block px-4 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Available for Q1 Projects</span>
                        </div>
                        <h1 className="text-7xl md:text-8xl font-black tracking-[ -0.05em] leading-[0.85] text-zinc-900 dark:text-white">
                            LET'S BUILD <br />
                            <span className="italic font-light opacity-50 text-6xl md:text-7xl">SOMETHING</span> <br />
                            <span className="animate-gradient-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-400 bg-clip-text text-transparent">
                                UNREAL.
                            </span>
                        </h1>
                        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed font-medium">
                            The future isn't written yet. Let's code it together. Our engineers are standing by in the <span className="text-zinc-900 dark:text-white font-bold">Tbilisi Core.</span>
                        </p>
                    </div>

                    {/* Minimalist Contact Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                        <div className="group p-8 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] transition-all duration-500 hover:border-indigo-500/50 hover:shadow-2xl">
                            <div className="w-10 h-10 mb-4 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Direct Sync</p>
                            <p className="font-bold text-zinc-900 dark:text-white break-words">hello@flux.io</p>
                        </div>

                        <div className="group p-8 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl">
                            <div className="w-10 h-10 mb-4 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Our Nexus</p>
                            <p className="font-bold text-zinc-900 dark:text-white">Tbilisi, Georgia</p>
                        </div>
                    </div>
                </div>

                {/* 2. Right Side: The "Monolith" Form */}
                <div className="relative animate-slideUp delay-300">
                    {/* Glowing Aura behind form */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-2xl rounded-[3.5rem]"></div>

                    <form className="relative glass-card p-10 md:p-14 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] space-y-8 border border-white/20 dark:border-zinc-800/50 overflow-hidden">

                        {/* Interactive Input Groups */}
                        <div className="space-y-6">
                            <div className="group space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-2 group-focus-within:text-indigo-500 transition-colors">Identity</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-8 py-5 bg-zinc-100 dark:bg-zinc-800/40 border border-transparent focus:border-indigo-500/50 focus:bg-white dark:focus:bg-zinc-900 rounded-3xl outline-none transition-all duration-500 text-zinc-900 dark:text-white font-bold placeholder:opacity-30"
                                />
                            </div>

                            <div className="group space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-2 group-focus-within:text-indigo-500 transition-colors">Digital Address</label>
                                <input
                                    type="email"
                                    placeholder="email@provider.com"
                                    className="w-full px-8 py-5 bg-zinc-100 dark:bg-zinc-800/40 border border-transparent focus:border-indigo-500/50 focus:bg-white dark:focus:bg-zinc-900 rounded-3xl outline-none transition-all duration-500 text-zinc-900 dark:text-white font-bold placeholder:opacity-30"
                                />
                            </div>

                            <div className="group space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-2 group-focus-within:text-indigo-500 transition-colors">The Brief</label>
                                <textarea
                                    placeholder="Tell us about your project or vision..."
                                    className="w-full px-8 py-6 bg-zinc-100 dark:bg-zinc-800/40 border border-transparent focus:border-indigo-500/50 focus:bg-white dark:focus:bg-zinc-900 rounded-[2rem] outline-none transition-all duration-500 text-zinc-900 dark:text-white font-medium min-h-[180px] resize-none placeholder:opacity-30"
                                ></textarea>
                            </div>
                        </div>

                        {/* Submit with Liquid Effect */}
                        <button
                            type="submit"
                            className="group relative w-full py-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black rounded-[2rem] overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-smooth"></div>
                            <div className="relative z-10 flex items-center justify-center gap-4 text-xs uppercase tracking-[0.4em]">
                                <span>Initialize Connection</span>
                                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
