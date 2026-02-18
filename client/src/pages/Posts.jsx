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
        <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505]">
            <div className="max-w-[1300px] mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-[260px_1fr_300px] gap-12">
                
                {/* --- LEFT SIDEBAR --- */}
                <aside className="hidden lg:flex flex-col gap-8 sticky top-28 h-fit">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 px-2">
                            <div className="w-10 h-10 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-zinc-900 font-bold shadow-sm">
                                {user?.name?.charAt(0) || "U"}
                            </div>
                            <div>
                                <p className="font-semibold text-sm dark:text-white">{user?.name || "Guest"}</p>
                                <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium">Verified Account</p>
                            </div>
                        </div>
                        
                        <nav className="flex flex-col gap-1">
                            {['Explore Feed', 'Saved Stories', 'Your Circles', 'Trending'].map((item, i) => (
                                <button key={item} className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${i === 0 ? 'bg-white dark:bg-zinc-900 shadow-sm text-indigo-600' : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900'}`}>
                                    <span className="text-sm font-medium">{item}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* --- CENTER FEED --- */}
                <main className="max-w-[620px] mx-auto w-full space-y-10">
                    <div className="flex justify-between items-end mb-4 px-2">
                        <div>
                            <h2 className="text-3xl font-semibold tracking-tight dark:text-white">Feed</h2>
                            <p className="text-xs text-zinc-400 mt-1">Discover what's happening now.</p>
                        </div>
                    </div>

                    <AnimatePresence>
                        {Array.isArray(post) && post.map((item, index) => (
                            <motion.div
                                key={item._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group bg-white dark:bg-zinc-900/50 backdrop-blur-sm rounded-[2rem] border border-zinc-200/50 dark:border-zinc-800/50 overflow-hidden hover:shadow-xl transition-all duration-500"
                            >
                                {editId === item._id ? (
                                    <form onSubmit={(e) => handleUpdate(e, item._id)} className="p-8 space-y-4">
                                        <input name="title" defaultValue={item.title} className="w-full bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-4 text-sm font-medium outline-none border border-transparent focus:border-indigo-500/30 transition-all" />
                                        <textarea name="content" defaultValue={item.content} className="w-full bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-4 text-sm min-h-[120px] outline-none border border-transparent focus:border-indigo-500/30 transition-all" />
                                        <div className="flex gap-3 pt-2">
                                            <button type="submit" className="flex-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold py-3 rounded-xl text-[11px] uppercase tracking-wider">Save Changes</button>
                                            <button type="button" onClick={() => setEditId(null)} className="flex-1 bg-zinc-100 dark:bg-zinc-800 font-bold py-3 rounded-xl text-[11px] uppercase tracking-wider">Cancel</button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="flex flex-col">
                                        {/* Header */}
                                        <div className="p-6 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-xs dark:text-white">
                                                    {item.author?.charAt(0) || "G"}
                                                </div>
                                                <p className="text-sm font-semibold dark:text-white">{item.author || "Anonymous"}</p>
                                            </div>
                                            {user?.isAdmin && (
                                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={() => setEditId(item._id)} className="p-2 hover:text-indigo-500 transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                                                    <button onClick={() => adminDeletePost(item._id)} className="p-2 hover:text-rose-500 transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                                                </div>
                                            )}
                                        </div>

                                        {/* Image */}
                                        {item.postImg && (
                                            <div className="px-6 pb-2">
                                                <div className="aspect-square w-full rounded-[1.5rem] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                                    <img src={item.postImg} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                                </div>
                                            </div>
                                        )}

                                        {/* Text Content */}
                                        <div className="p-7 space-y-2">
                                            <h3 className="text-xl font-semibold dark:text-white tracking-tight">{item.title}</h3>
                                            <p className="text-zinc-500 dark:text-zinc-400 text-[15px] leading-relaxed font-light">{item.content}</p>
                                        </div>

                                        {/* Footer */}
                                        <div className="px-7 py-5 border-t border-zinc-50 dark:border-zinc-800/50 flex items-center gap-6">
                                            <button className="flex items-center gap-2 text-zinc-400 hover:text-rose-500 transition-colors">
                                                <span className="text-base">❤️</span>
                                                <span className="text-xs font-medium">{item.likes || 0}</span>
                                            </button>
                                            <button className="flex items-center gap-2 text-zinc-400 hover:text-indigo-500 transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </main>

                {/* --- RIGHT SIDEBAR --- */}
                <aside className="hidden lg:flex flex-col gap-10 sticky top-28 h-fit">
                    <div className="space-y-4">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] px-2">Trending Circles</p>
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-100 dark:border-zinc-800 space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-500/10" />
                                    <div className="flex-1 h-1.5 bg-zinc-50 dark:bg-zinc-800 rounded-full">
                                        <div className={`h-full bg-indigo-500/30 w-[${30 * i}%]`} />
                                    </div>
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
