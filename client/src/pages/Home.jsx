import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="page-transition space-y-32 pb-32">

            {/* 1. Hero Section - "The Stage for Creators" */}
            <section className="relative pt-24 md:pt-48 text-center px-6">
                <div className="blur-blob w-[500px] h-[500px] bg-blue-500/20 top-[-20%] left-[-10%] animate-float" />
                <div className="blur-blob w-[400px] h-[400px] bg-rose-500/20 bottom-[10%] right-[-10%] animate-float" style={{animationDelay: '3s'}} />

                <div className="relative z-10 space-y-10">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl animate-fade-in">
                        <div className="flex -space-x-2">
                            {[11, 12, 13].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-6 h-6 rounded-full border-2 border-white dark:border-zinc-900" alt="User" />
                            ))}
                        </div>
                        <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-tighter">
                            +2.4k Creators joined today
                        </span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-zinc-900 dark:text-white">
                        POST. <br />
                        <span className="animate-gradient-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            INSPIRE.
                        </span> <br />
                        CONNECT.
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                        Your ultimate space for self-expression. Share stunning photography, write compelling stories, and discover creative minds from around the globe.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                        <Link to="/signup" className="px-12 py-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-[2rem] font-black text-xl transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(79,70,229,0.3)] active:scale-95">
                            Create Your Feed
                        </Link>
                        <Link to="/posts" className="px-10 py-6 glass-card rounded-[2rem] font-bold text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                            Explore Global Posts
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Bento Community Grid */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">

                    {/* Featured Photographer Card */}
                    <div className="md:col-span-2 relative rounded-[3rem] overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Fashion" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-10 flex flex-col justify-end">
                            <span className="text-white/60 font-bold uppercase tracking-widest text-xs mb-2">Editor's Pick</span>
                            <h3 className="text-3xl font-black text-white">The Art of Minimalist Living</h3>
                            <p className="text-white/70 mt-2 text-sm">Photography by @Alex_Vision</p>
                        </div>
                    </div>

                    {/* Interaction Stats */}
                    <div className="glass-card rounded-[3rem] p-10 flex flex-col justify-between border-blue-500/20">
                        <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/40">❤️</div>
                        <div>
                            <div className="text-5xl font-black mb-1">4.8M</div>
                            <p className="font-bold text-zinc-400 uppercase tracking-widest text-[10px]">Total Likes Today</p>
                        </div>
                    </div>

                    {/* Community Voice */}
                    <div className="glass-card rounded-[3rem] p-10 bg-zinc-900 text-white flex flex-col justify-center">
                        <p className="text-2xl font-medium leading-tight">"This platform changed how I share my travel stories with the world."</p>
                        <div className="mt-6 flex items-center gap-3">
                            <img src="https://i.pravatar.cc/100?u=44" className="w-10 h-10 rounded-full bg-zinc-700" alt="Avatar" />
                            <span className="font-bold text-sm">@Sarah_Voyage</span>
                        </div>
                    </div>

                    {/* Visual Feed Preview */}
                    <div className="md:col-span-3 glass-card rounded-[3rem] p-4 grid grid-cols-3 gap-4">
                        <div className="relative rounded-[2rem] overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-700" alt="Post" />
                        </div>
                        <div className="relative rounded-[2rem] overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800" className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-700" alt="Post" />
                        </div>
                        <div className="relative rounded-[2rem] overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800" className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-700" alt="Post" />
                        </div>
                    </div>

                    {/* Tech Badge */}
                    <div className="glass-card rounded-[3rem] p-10 flex flex-col justify-center items-center text-center">
                         <div className="text-indigo-500 font-black text-6xl">4K</div>
                         <p className="font-bold text-zinc-500 uppercase tracking-widest text-[10px] mt-2">Ultra-HD Uploads</p>
                    </div>
                </div>
            </section>

            {/* 3. Wide Feature - "Your World, High Res" */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto relative rounded-[4rem] overflow-hidden shadow-2xl group">
                    <img
                        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074"
                        className="w-full h-[700px] object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                        alt="Landscape"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
                            CAPTURE EVERY <br /> MOMENT
                        </h2>
                        <p className="text-white/70 max-w-xl text-lg mb-10">
                            Never compromise on quality. Our platform preserves every pixel of your photography, ensuring your feed looks flawless on any device.
                        </p>
                        <button className="px-10 py-5 bg-white text-zinc-900 rounded-full font-black text-lg hover:bg-zinc-200 transition-colors">
                            Upload Now 📸
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. Social Features List */}
            <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000" className="rounded-[2.5rem] shadow-xl animate-float" alt="Social" />
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000" className="rounded-[2.5rem] shadow-xl" alt="Social" />
                    </div>
                    <div className="space-y-6 pt-12">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000" className="rounded-[2.5rem] shadow-xl" alt="Social" />
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000" className="rounded-[2.5rem] shadow-xl animate-float" style={{animationDelay: '1.5s'}} alt="Social" />
                    </div>
                </div>
                <div className="space-y-8">
                    <h2 className="text-6xl font-black tracking-tighter leading-tight">Built for the <br /> New Generation.</h2>
                    <div className="space-y-6">
                        {[
                            { t: "Smart Feed", d: "A sophisticated algorithm that showcases content you actually care about." },
                            { t: "Instant Connect", d: "Chat with friends in real-time with our zero-latency direct messaging." },
                            { t: "Creator Pro Tools", d: "Built-in professional photo editor and dynamic filters for your posts." }
                        ].map((f, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-bold shrink-0">{i+1}</div>
                                <div>
                                    <h4 className="font-black text-xl">{f.t}</h4>
                                    <p className="text-zinc-500 text-sm">{f.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Modern Call to Action */}
            <section className="px-6 py-20 text-center">
                <div className="glass-card max-w-5xl mx-auto p-16 md:p-32 rounded-[5rem] overflow-hidden relative">
                    <div className="blur-blob w-[400px] h-[400px] bg-indigo-600/30 -top-20 -left-20 animate-slow-rotate" />
                    <div className="blur-blob w-[400px] h-[400px] bg-purple-600/30 -bottom-20 -right-20 animate-slow-rotate" />

                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter">SHARE YOUR <br /> STORY TODAY.</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-12 py-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                                Join Now — It's Free
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
