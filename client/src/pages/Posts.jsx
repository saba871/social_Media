import { useEffect, useState } from "react";
import { usePost } from "../context/post.context";
import { useAuth } from "../context/auth.context";
import { motion, AnimatePresence } from "framer-motion";

const Posts = () => {
    const { post, allPost, adminDeletePost, adminUpdatePost } = usePost();
    const { user } = useAuth();
    const [editId, setEditId] = useState(null);

    useEffect(() => { allPost(); }, []);

    const handleUpdate = async (e, id) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        await adminUpdatePost(id, formData);
        setEditId(null);
    };

    return (
        <div className="min-h-screen bg-[#F7F5F2] dark:bg-[#141210]">
            <div className="max-w-[1260px] mx-auto px-5 py-24 grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-10">

                {/* ── Left Sidebar ── */}
                <aside className="hidden lg:flex flex-col gap-8 sticky top-28 h-fit">

                    {/* User */}
                    <div className="flex items-center gap-3 px-1">
                        <div className="w-9 h-9 rounded-full bg-[#1C1917] dark:bg-[#EDE9E3] flex items-center justify-center text-[#F7F5F2] dark:text-stone-800 text-sm font-medium shadow-sm">
                            {user?.name?.charAt(0) || "U"}
                        </div>
                        <div>
                            <p className="text-[13.5px] font-medium text-stone-900 dark:text-stone-100">{user?.name || "Guest"}</p>
                            <p className="text-[10px] text-stone-400 uppercase tracking-widest">Verified</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[#E2DDD6] dark:bg-[#2C2825]" />

                    {/* Nav */}
                    <nav className="flex flex-col gap-0.5">
                        {[
                            { label: "Explore Feed",   active: true },
                            { label: "Saved Stories",  active: false },
                            { label: "Your Circles",   active: false },
                            { label: "Trending",       active: false },
                        ].map(({ label, active }) => (
                            <button
                                key={label}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 text-left ${
                                    active
                                        ? "bg-[#D1E0DA] dark:bg-[#1E3530] text-[#4A7566] dark:text-[#9DC5B8]"
                                        : "text-stone-400 dark:text-stone-500 hover:bg-[#EDE9E3] dark:hover:bg-[#1C1917] hover:text-stone-700 dark:hover:text-stone-300"
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* ── Center Feed ── */}
                <main className="max-w-[600px] mx-auto w-full space-y-6">

                    {/* Header */}
                    <div className="flex justify-between items-end mb-2 px-1">
                        <div>
                            <h2 className="font-serif text-2xl font-medium tracking-tight text-stone-900 dark:text-stone-100">Feed</h2>
                            <p className="text-[12px] text-stone-400 mt-0.5">Discover what's happening now.</p>
                        </div>
                    </div>

                    <AnimatePresence>
                        {Array.isArray(post) && post.map((item, index) => (
                            <motion.div
                                key={item._id}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                className="group bg-[#FDFCFA] dark:bg-[#1F1C1A] rounded-2xl border border-[#E2DDD6] dark:border-[#2C2825] overflow-hidden transition-all duration-300 hover:border-[#C8D9D3] dark:hover:border-[#3A3530] hover:shadow-[0_4px_20px_rgb(0,0,0,0.05)]"
                            >
                                {/* Edit Form */}
                                {editId === item._id ? (
                                    <form onSubmit={(e) => handleUpdate(e, item._id)} className="p-7 space-y-4">
                                        <input
                                            name="title"
                                            defaultValue={item.title}
                                            className="w-full bg-[#F7F5F2] dark:bg-[#141210] border border-[#E2DDD6] dark:border-[#2C2825] focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] rounded-xl px-4 py-3 text-[14px] font-medium outline-none transition-all text-stone-900 dark:text-stone-100"
                                        />
                                        <textarea
                                            name="content"
                                            defaultValue={item.content}
                                            className="w-full bg-[#F7F5F2] dark:bg-[#141210] border border-[#E2DDD6] dark:border-[#2C2825] focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] rounded-xl px-4 py-3 text-[14px] min-h-[110px] outline-none transition-all resize-none text-stone-900 dark:text-stone-100"
                                        />
                                        <div className="flex gap-2.5 pt-1">
                                            <button
                                                type="submit"
                                                className="flex-1 bg-stone-900 dark:bg-stone-100 text-[#F7F5F2] dark:text-stone-900 py-2.5 rounded-xl text-[12px] font-medium tracking-wide hover:bg-[#4A7566] transition-colors"
                                            >
                                                Save changes
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setEditId(null)}
                                                className="flex-1 bg-[#EDE9E3] dark:bg-[#2C2825] text-stone-600 dark:text-stone-400 py-2.5 rounded-xl text-[12px] font-medium tracking-wide hover:bg-[#E2DDD6] dark:hover:bg-[#3A3530] transition-colors"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="flex flex-col">

                                        {/* Post Header */}
                                        <div className="px-5 pt-5 pb-3 flex items-center justify-between">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-8 h-8 rounded-full bg-[#EDE9E3] dark:bg-[#2C2825] flex items-center justify-center text-[12px] font-medium text-stone-600 dark:text-stone-400">
                                                    {item.author?.charAt(0) || "G"}
                                                </div>
                                                <p className="text-[13px] font-medium text-stone-800 dark:text-stone-200">{item.author || "Anonymous"}</p>
                                            </div>
                                            {user?.isAdmin && (
                                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    <button
                                                        onClick={() => setEditId(item._id)}
                                                        className="p-2 rounded-lg text-stone-300 dark:text-stone-600 hover:text-[#7C9E8F] hover:bg-[#EDE9E3] dark:hover:bg-[#2C2825] transition-all"
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => adminDeletePost(item._id)}
                                                        className="p-2 rounded-lg text-stone-300 dark:text-stone-600 hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all"
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {/* Image */}
                                        {item.postImg && (
                                            <div className="px-5 pb-1">
                                                <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#EDE9E3] dark:bg-[#2C2825]">
                                                    <img
                                                        src={item.postImg}
                                                        alt=""
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Text */}
                                        <div className="px-5 py-4 space-y-1.5">
                                            <h3 className="text-[15px] font-medium text-stone-900 dark:text-stone-100 tracking-tight leading-snug">{item.title}</h3>
                                            <p className="text-stone-400 dark:text-stone-500 text-[13.5px] leading-relaxed">{item.content}</p>
                                        </div>

                                        {/* Footer */}
                                        <div className="px-5 py-3.5 border-t border-[#EDE9E3] dark:border-[#28241F] flex items-center gap-5">
                                            <button className="flex items-center gap-1.5 text-stone-300 dark:text-stone-600 hover:text-rose-400 transition-colors duration-200">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                                </svg>
                                                <span className="text-[12px] font-medium">{item.likes || 0}</span>
                                            </button>
                                            <button className="flex items-center gap-1.5 text-stone-300 dark:text-stone-600 hover:text-[#7C9E8F] transition-colors duration-200">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                                </svg>
                                            </button>
                                        </div>

                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </main>

                {/* ── Right Sidebar ── */}
                <aside className="hidden lg:flex flex-col gap-8 sticky top-28 h-fit">
                    <div className="space-y-3">
                        <p className="text-[10px] font-medium text-stone-400 uppercase tracking-[0.2em] px-1">Trending Circles</p>
                        <div className="bg-[#FDFCFA] dark:bg-[#1F1C1A] rounded-2xl p-5 border border-[#E2DDD6] dark:border-[#2C2825] space-y-4">
                            {[
                                { label: "Photography", pct: "65%" },
                                { label: "Travel",      pct: "45%" },
                                { label: "Design",      pct: "80%" },
                            ].map(({ label, pct }) => (
                                <div key={label} className="space-y-1.5">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[12px] font-medium text-stone-500 dark:text-stone-400">{label}</span>
                                        <span className="text-[11px] text-stone-300 dark:text-stone-600">{pct}</span>
                                    </div>
                                    <div className="h-1 bg-[#EDE9E3] dark:bg-[#2C2825] rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[#7C9E8F] rounded-full transition-all duration-700"
                                            style={{ width: pct }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Suggested accounts placeholder */}
                    <div className="space-y-3">
                        <p className="text-[10px] font-medium text-stone-400 uppercase tracking-[0.2em] px-1">Suggested</p>
                        <div className="bg-[#FDFCFA] dark:bg-[#1F1C1A] rounded-2xl p-5 border border-[#E2DDD6] dark:border-[#2C2825] space-y-4">
                            {[14, 15, 16].map(i => (
                                <div key={i} className="flex items-center gap-3">
                                    <img
                                        src={`https://i.pravatar.cc/100?u=${i}`}
                                        className="w-8 h-8 rounded-full border border-[#E2DDD6] dark:border-[#2C2825]"
                                        alt=""
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[12.5px] font-medium text-stone-700 dark:text-stone-300 truncate">Creator {i}</p>
                                        <p className="text-[11px] text-stone-400">@creator_{i}</p>
                                    </div>
                                    <button className="text-[11px] font-medium text-[#4A7566] dark:text-[#9DC5B8] hover:text-[#7C9E8F] transition-colors">
                                        Follow
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

            </div>
        </div>
    );
};

export default Posts;
