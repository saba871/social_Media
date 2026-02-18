import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
    // ანიმაციის ვარიანტები კონტეინერისთვის
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
    };

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-40 pb-32"
        >
            {/* 1. Hero Section */}
            <section className="relative pt-20 md:pt-40 text-center px-6">
                {/* Background Blobs - უფრო ნაზი ეფექტისთვის */}
                <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />
                <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />

                <motion.div variants={itemVariants} className="relative z-10 space-y-8">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
                        <div className="flex -space-x-2">
                            {[11, 12, 13].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-6 h-6 rounded-full border-2 border-white dark:border-zinc-900" alt="User" />
                            ))}
                        </div>
                        <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em]">
                            +2.4k Creators joined today
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-[120px] font-medium tracking-tight leading-[0.9] text-zinc-900 dark:text-white">
                        Post. Inspire. <br />
                        <span className="italic font-light text-zinc-400 dark:text-zinc-500">Connect.</span>
                    </h1>

                    <p className="max-w-xl mx-auto text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                        Your ultimate space for self-expression. Share photography, write stories, and discover creative minds.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link to="/signup" className="px-10 py-5 bg-indigo-600 text-white rounded-full font-semibold text-sm transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95">
                            Get Started
                        </Link>
                        <Link to="/posts" className="px-10 py-5 border border-zinc-200 dark:border-zinc-800 rounded-full font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                            Explore Feed
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* 2. Bento Community Grid - დახვეწილი ჩრდილებით და Radius-ით */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {/* Featured Card */}
                    <motion.div variants={itemVariants} className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Fashion" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
                            <h3 className="text-2xl font-semibold text-white">Minimalist Living</h3>
                            <p className="text-white/70 text-sm">@Alex_Vision</p>
                        </div>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 flex flex-col justify-between border border-zinc-100 dark:border-zinc-800 shadow-sm">
                        <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        </div>
                        <div>
                            <div className="text-4xl font-semibold tracking-tighter">4.8M</div>
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Likes Today</p>
                        </div>
                    </motion.div>

                    {/* Community Voice */}
                    <motion.div variants={itemVariants} className="bg-zinc-900 dark:bg-zinc-100 rounded-[2.5rem] p-8 text-white dark:text-zinc-900 flex flex-col justify-center">
                        <p className="text-xl font-light italic">"The best place for travel stories."</p>
                        <div className="mt-4 flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-zinc-700 dark:bg-zinc-300" />
                            <span className="text-xs font-medium">@Sarah_V</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Call to Action - მინიმალისტური და სუფთა */}
            <section className="px-6 py-20">
                <motion.div 
                    variants={itemVariants}
                    className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Ready to share your story?</h2>
                        <button className="px-12 py-5 bg-white text-indigo-600 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-xl">
                            Join the community
                        </button>
                    </div>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default Home;
