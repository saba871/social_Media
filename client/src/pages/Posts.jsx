import { useEffect, useState } from "react";
import { usePost } from "../context/post.context";
import { useAuth } from "../context/auth.context";

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
        <div className="page-transition max-w-7xl mx-auto px-6 py-24 space-y-16">

            {/* 1. Futuristic Header */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-zinc-200/50 dark:border-zinc-800/50 pb-12">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase tracking-[0.2em]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Live Feed
                    </div>
                    <h1 className="text-6xl font-black tracking-tighter text-zinc-900 dark:text-white">
                        THE <span className="italic font-light">COLLECTIVE</span>
                    </h1>
                </div>

                <div className="flex gap-4 p-1.5 glass-card rounded-2xl border-zinc-200/50 dark:border-zinc-800/50">
                    <button className="px-6 py-2 text-xs font-black uppercase tracking-widest bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl shadow-xl transition-all">Grid</button>
                    <button className="px-6 py-2 text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all">List</button>
                </div>
            </div>

            {/* 2. Post Grid with Staggered Animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {Array.isArray(post) && post.map((item, index) => (
                    <div
                        key={item._id}
                        style={{ animationDelay: `${index * 100}ms` }}
                        className="animate-slideUp group relative flex flex-col bg-white dark:bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-indigo-500/30 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]"
                    >
                        {editId === item._id ? (
                            /* --- FUTURE EDIT OVERLAY --- */
                            <div className="absolute inset-0 z-50 glass-card backdrop-blur-2xl p-8 animate-in fade-in zoom-in duration-500">
                                <form onSubmit={(e) => handleUpdate(e, item._id)} className="h-full flex flex-col justify-center space-y-4">
                                    <h3 className="text-xl font-black italic mb-4">Refine Content</h3>
                                    <input name="title" defaultValue={item.title} className="w-full bg-white/50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                                    <textarea name="content" defaultValue={item.content} className="w-full bg-white/50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-4 text-sm min-h-[120px] outline-none" />
                                    <div className="flex gap-3 pt-4">
                                        <button type="submit" className="flex-1 bg-indigo-600 text-white font-black py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-500/30">Commit</button>
                                        <button type="button" onClick={() => setEditId(null)} className="flex-1 bg-zinc-200 dark:bg-zinc-700 font-black py-4 rounded-2xl">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            /* --- HIGH-FIDELITY VIEW --- */
                            <>
                                {/* Media Container */}
                                <div className="relative h-80 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/90 z-10 opacity-60" />
                                    {item.postImg ? (
                                        <img src={item.postImg} alt={item.title} className="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.23,1,0.32,1) group-hover:scale-110" />
                                    ) : (
                                        <div className="w-full h-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center italic text-zinc-400">No Visual Data</div>
                                    )}

                                    {/* Like Badge */}
                                    <div className="absolute top-6 right-6 z-20">
                                        <div className="glass-card px-4 py-2 rounded-full border-white/20 flex items-center gap-2 shadow-2xl">
                                            <span className="text-rose-500 animate-pulse">❤️</span>
                                            <span className="text-xs font-black text-white">{item.likes || 0}</span>
                                        </div>
                                    </div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-6 left-8 z-20 pr-8">
                                        <h5 className="text-2xl font-black text-white leading-tight tracking-tighter drop-shadow-md">
                                            {item.title}
                                        </h5>
                                    </div>
                                </div>

                                {/* Details Area */}
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                                                <span className="text-[10px] font-bold text-indigo-500">{item.author?.charAt(0) || "A"}</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 italic">Authored by {item.author || "Ghost User"}</span>
                                        </div>
                                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
                                            {item.content}
                                        </p>
                                    </div>

                                    {/* Action Bar */}
                                    <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-zinc-400 truncate max-w-[150px] uppercase tracking-tighter">{item.description}</span>

                                        {user?.isAdmin && (
                                            <div className="flex gap-1">
                                                <button onClick={() => setEditId(item._id)} className="p-3 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 rounded-2xl transition-all duration-300">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                                </button>
                                                <button onClick={() => adminDeletePost(item._id)} className="p-3 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 rounded-2xl transition-all duration-300">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
