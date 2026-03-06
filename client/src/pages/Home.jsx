import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
    hidden:   { opacity: 0, y: 18 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const Home = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-32 pb-28"
        >
            {/* ── 1. Hero ── */}
            <section className="relative pt-16 md:pt-32 text-center px-4">

                {/* Warm ambient blobs */}
                <div className="absolute -top-[8%] -left-[4%] w-[420px] h-[420px] bg-[#7C9E8F]/8 blur-[110px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 -right-[4%] w-[340px] h-[340px] bg-[#C4B5A0]/10 blur-[100px] rounded-full pointer-events-none" />

                <motion.div variants={itemVariants} className="relative z-10 space-y-8">

                    {/* Social proof badge */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#FDFCFA] dark:bg-[#1F1C1A] border border-[#E2DDD6] dark:border-[#2C2825] shadow-sm">
                        <div className="flex -space-x-2">
                            {[11, 12, 13].map(i => (
                                <img
                                    key={i}
                                    src={`https://i.pravatar.cc/100?u=${i}`}
                                    className="w-6 h-6 rounded-full border-2 border-[#FDFCFA] dark:border-[#1F1C1A]"
                                    alt="User"
                                />
                            ))}
                        </div>
                        <span className="text-[10.5px] font-medium text-stone-400 dark:text-stone-500 tracking-wide">
                            +2.4k creators joined today
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-6xl md:text-[108px] font-serif font-medium tracking-tight leading-[0.92] text-stone-900 dark:text-stone-100">
                        Post. Inspire.<br />
                        <span className="italic font-normal text-stone-300 dark:text-stone-600">Connect.</span>
                    </h1>

                    <p className="max-w-md mx-auto text-[16px] text-stone-400 dark:text-stone-500 font-light leading-relaxed">
                        Your space for self-expression. Share photography, write stories, and discover creative minds.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                        <Link
                            to="/signup"
                            className="px-9 py-4 bg-stone-900 dark:bg-stone-100 text-[#F7F5F2] dark:text-stone-900 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 hover:bg-[#4A7566] dark:hover:bg-[#D1E0DA] hover:shadow-[0_4px_20px_rgb(74,117,102,0.2)] active:scale-[0.98]"
                        >
                            Get started
                        </Link>
                        <Link
                            to="/posts"
                            className="px-9 py-4 border border-[#E2DDD6] dark:border-[#2C2825] rounded-full text-[13px] font-medium text-stone-500 dark:text-stone-400 hover:bg-[#EDE9E3] dark:hover:bg-[#1C1917] hover:text-stone-800 dark:hover:text-stone-200 transition-all duration-200"
                        >
                            Explore feed
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* ── 2. Bento Grid ── */}
            <section className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[280px]">

                    {/* Featured photo */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 relative rounded-2xl overflow-hidden group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                            alt="Minimalist Living"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent p-7 flex flex-col justify-end">
                            <h3 className="text-[17px] font-medium text-white leading-tight">Minimalist Living</h3>
                            <p className="text-white/60 text-[12px] mt-0.5">@Alex_Vision</p>
                        </div>
                    </motion.div>

                    {/* Stats card */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-[#FDFCFA] dark:bg-[#1F1C1A] rounded-2xl p-7 flex flex-col justify-between border border-[#E2DDD6] dark:border-[#2C2825]"
                    >
                        <div className="w-10 h-10 bg-[#D1E0DA] dark:bg-[#1E3530] rounded-xl flex items-center justify-center text-[#4A7566] dark:text-[#9DC5B8]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <div>
                            <div className="text-4xl font-serif font-medium tracking-tight text-stone-900 dark:text-stone-100">4.8M</div>
                            <p className="text-[10px] font-medium text-stone-400 uppercase tracking-widest mt-1">Likes today</p>
                        </div>
                    </motion.div>

                    {/* Quote card */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-[#1C1917] dark:bg-[#EDE9E3] rounded-2xl p-7 flex flex-col justify-center"
                    >
                        <p className="text-[16px] font-serif font-normal italic text-stone-200 dark:text-stone-700 leading-snug">
                            "The best place for travel stories."
                        </p>
                        <div className="mt-5 flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-stone-700 dark:bg-stone-400" />
                            <span className="text-[12px] font-medium text-stone-500 dark:text-stone-500">@Sarah_V</span>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* ── 3. CTA ── */}
            <section className="px-4 py-8">
                <motion.div
                    variants={itemVariants}
                    className="max-w-5xl mx-auto bg-[#1C1917] dark:bg-[#EDE9E3] rounded-3xl p-14 md:p-20 text-center relative overflow-hidden"
                >
                    {/* Subtle sage glow */}
                    <div className="absolute top-[-20%] left-[30%] w-[40%] h-[150%] bg-[#7C9E8F]/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-100 dark:text-stone-800 leading-tight">
                            Ready to share<br />
                            <span className="italic font-normal">your story?</span>
                        </h2>
                        <Link
                            to="/signup"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-[#FDFCFA] dark:bg-stone-900 text-stone-900 dark:text-stone-100 rounded-full text-[13px] font-medium tracking-wide hover:bg-[#D1E0DA] dark:hover:bg-stone-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
                        >
                            Join the community
                        </Link>
                    </div>
                </motion.div>
            </section>

        </motion.div>
    );
};

export default Home;
