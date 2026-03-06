const Contact = () => {
    return (
        <div className="page-transition min-h-screen flex items-center justify-center px-6 py-16 lg:px-12">
            <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* ── Left: Info ── */}
                <div className="space-y-10 relative animate-reveal">

                    {/* Ambient orb */}
                    <div className="absolute -top-32 -left-16 w-[380px] h-[380px] bg-[#7C9E8F]/8 blur-[110px] rounded-full -z-10" />

                    {/* Status badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EDE9E3] dark:bg-[#1C1917] border border-[#E2DDD6] dark:border-[#2C2825] rounded-full">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C9E8F] opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4A7566]" />
                        </span>
                        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
                            Available for Q1 Projects
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="space-y-4">
                        <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight leading-[1.05] text-stone-900 dark:text-stone-100">
                            Let's build<br />
                            <span className="italic font-normal text-stone-400 dark:text-stone-600">something</span><br />
                            worth keeping.
                        </h1>
                        <p className="text-[15px] text-stone-500 dark:text-stone-400 max-w-sm leading-relaxed">
                            Our engineers are based in{" "}
                            <span className="text-stone-800 dark:text-stone-200 font-medium">Tbilisi, Georgia</span>
                            {" "}— reach out and let's talk.
                        </p>
                    </div>

                    {/* Contact cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="group p-6 bg-[#FDFCFA] dark:bg-[#1F1C1A] border border-[#E2DDD6] dark:border-[#2C2825] rounded-2xl transition-all duration-300 hover:border-[#7C9E8F]/50 dark:hover:border-[#4A7566]/50 hover:shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
                            <div className="w-9 h-9 mb-4 bg-[#D1E0DA] dark:bg-[#1E3530] rounded-xl flex items-center justify-center text-[#4A7566] dark:text-[#9DC5B8] group-hover:scale-105 transition-transform duration-200">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <p className="text-[10px] font-medium uppercase tracking-widest text-stone-400 mb-1">Email</p>
                            <p className="text-[14px] font-medium text-stone-800 dark:text-stone-200">hello@flux.io</p>
                        </div>

                        <div className="group p-6 bg-[#FDFCFA] dark:bg-[#1F1C1A] border border-[#E2DDD6] dark:border-[#2C2825] rounded-2xl transition-all duration-300 hover:border-[#7C9E8F]/50 dark:hover:border-[#4A7566]/50 hover:shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
                            <div className="w-9 h-9 mb-4 bg-[#D1E0DA] dark:bg-[#1E3530] rounded-xl flex items-center justify-center text-[#4A7566] dark:text-[#9DC5B8] group-hover:scale-105 transition-transform duration-200">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <p className="text-[10px] font-medium uppercase tracking-widest text-stone-400 mb-1">Location</p>
                            <p className="text-[14px] font-medium text-stone-800 dark:text-stone-200">Tbilisi, Georgia</p>
                        </div>
                    </div>
                </div>

                {/* ── Right: Form ── */}
                <div className="relative animate-reveal delay-2">

                    {/* Subtle warm glow behind form */}
                    <div className="absolute -inset-6 bg-[#7C9E8F]/5 blur-[60px] rounded-3xl -z-10" />

                    <form className="bg-[#FDFCFA] dark:bg-[#1F1C1A] border border-[#E2DDD6] dark:border-[#2C2825] rounded-3xl p-8 md:p-10 space-y-6 shadow-[0_2px_24px_rgb(0,0,0,0.04)] dark:shadow-[0_2px_24px_rgb(0,0,0,0.2)]">

                        {/* Name */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500 ml-1">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full px-5 py-3.5 bg-[#F7F5F2] dark:bg-[#141210] border border-[#E2DDD6] dark:border-[#2C2825] focus:border-[#7C9E8F] dark:focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] rounded-xl outline-none transition-all duration-200 text-[14px] text-stone-900 dark:text-stone-100 placeholder:text-stone-300 dark:placeholder:text-stone-600"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500 ml-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="email@provider.com"
                                className="w-full px-5 py-3.5 bg-[#F7F5F2] dark:bg-[#141210] border border-[#E2DDD6] dark:border-[#2C2825] focus:border-[#7C9E8F] dark:focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] rounded-xl outline-none transition-all duration-200 text-[14px] text-stone-900 dark:text-stone-100 placeholder:text-stone-300 dark:placeholder:text-stone-600"
                            />
                        </div>

                        {/* Message */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500 ml-1">
                                Message
                            </label>
                            <textarea
                                placeholder="Tell us about your project..."
                                className="w-full px-5 py-4 bg-[#F7F5F2] dark:bg-[#141210] border border-[#E2DDD6] dark:border-[#2C2825] focus:border-[#7C9E8F] dark:focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] rounded-xl outline-none transition-all duration-200 text-[14px] text-stone-900 dark:text-stone-100 min-h-[140px] resize-none placeholder:text-stone-300 dark:placeholder:text-stone-600"
                            />
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-[#EDE9E3] dark:bg-[#2C2825]" />

                        {/* Submit */}
                        <button
                            type="submit"
                            className="group relative w-full py-4 bg-stone-900 dark:bg-stone-100 text-[#F7F5F2] dark:text-stone-900 rounded-xl font-medium text-[13px] tracking-wide overflow-hidden transition-all duration-200 hover:bg-[#4A7566] dark:hover:bg-[#D1E0DA] hover:shadow-[0_4px_16px_rgb(74,117,102,0.25)] active:scale-[0.99]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Send message
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
