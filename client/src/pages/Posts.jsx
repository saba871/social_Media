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
        <div className="min-h-screen bg-zinc-50 dark:bg-black">
            {/* Main Layout Grid */}
            <div className="max-w-[1400px] mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8">
                
                {/* --- LEFT SIDEBAR (Hidden on Mobile) --- */}
                <aside className="hidden lg:flex flex-col gap-6 sticky top-24 h-fit">
                    <div className="glass-card p-6 rounded-[2rem] border-zinc-200/50 dark:border-zinc-800/50">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black">
                                {user?.name?.charAt(0) || "U"}
                            </div>
                            <div>
                                <p className="font-black text-sm dark:text-white">{user?.name || "Guest"}</p>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Active Member</p>
                            </div>
                        </div>
                        <nav className="space-y-2">
                            {['Friends', 'Groups', 'Marketplace', 'Memories'].map(item => (
                                <div key={item} className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer group">
                                    <div className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-indigo-500 transition-colors" />
                                    <span className="text-sm font-bold text-zinc-600 dark:text-zinc-400">{item}</span>
                                </div>
                            ))}
                        </nav>
                    </div>
                    
                    <div className="px-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-800 to-transparent" />
                        <p className="py-4 text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] text-center">Shortcuts</p>
                        <div className="h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-800 to-transparent" />
                    </div>
                </aside>

                {/* --- CENTER FEED (The Posts) --- */}
                <main className="space-y-8 max-w-[650px] mx-auto w-full">
                    {/* Compact Header for Feed */}
                    <div className="flex justify-between items-center mb-10 px-4">
                        <h2 className="text-2xl font-black tracking-tighter dark:text-white italic">FEED_01</h2>
                        <div className="flex gap-2">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                            <span className="w-2 h-2 rounded-full bg-zinc-300" />
                        </div>
                    </div>

                    {Array.isArray(post) && post.map((item, index) => (
                        <div
                            key={item._id}
                            style={{ animationDelay: `${index * 100}ms` }}
                            className="animate-slideUp group relative flex flex-col bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 transition-all duration-500 hover:shadow-2xl"
                        >
                            {editId === item._id ? (
                                <div className="p-8 glass-card animate-in fade-in zoom-in duration-300">
                                    <form onSubmit={(e) => handleUpdate(e, item._id)} className="space-y-4">
                                        <input name="title" defaultValue={item.title} className="w-full bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 text-sm font-bold outline-none" />
                                        <textarea name="content" defaultValue={item.content} className="w-full bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 text-sm min-h-[120px] outline-none" />
                                        <div className="flex gap-2">
                                            <button type="submit" className="flex-1 bg-indigo-600 text-white font-black py-3 rounded-xl text-xs">UPDATE</button>
                                            <button type="button" onClick={() => setEditId(null)} className="flex-1 bg-zinc-100 dark:bg-zinc-800 font-black py-3 rounded-xl text-xs">CANCEL</button>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <>
                                    {/* Author Info Header */}
                                    <div className="p-6 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-black shadow-lg">
                                                {item.author?.charAt(0) || "G"}
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-black dark:text-white leading-none">{item.author || "Ghost"}</h4>
                                                <p className="text-[10px] text-zinc-400 font-bold mt-1">2 hours ago • <span className="text-indigo-500">Public</span></p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Post Content */}
                                    <div className="px-8 pb-4">
                                        <h3 className="text-xl font-black mb-3 dark:text-white tracking-tight">{item.title}</h3>
                                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.content}</p>
                                    </div>

                                    {/* Image */}
                                    {item.postImg && (
                                        <div className="relative h-96 mx-4 mb-4 rounded-[2rem] overflow-hidden">
                                            <img src={item.postImg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                    )}

                                    {/* Interaction Bar */}
                                    <div className="px-8 py-6 border-t border-zinc-50 dark:border-zinc-800 flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            <button className="flex items-center gap-2 text-zinc-500 hover:text-rose-500 transition-colors">
                                                <span className="text-lg">❤️</span>
                                                <span className="text-xs font-black">{item.likes || 0}</span>
                                            </button>
                                            <button className="text-zinc-500 hover:text-indigo-500 transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                            </button>
                                        </div>

                                        {user?.isAdmin && (
                                            <div className="flex gap-2">
                                                <button onClick={() => setEditId(item._id)} className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-indigo-500 hover:text-white transition-all">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                </button>
                                                <button onClick={() => adminDeletePost(item._id)} className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-rose-500 hover:text-white transition-all">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </main>

                {/* --- RIGHT SIDEBAR (Hidden on Mobile) --- */}
                <aside className="hidden lg:flex flex-col gap-8 sticky top-24 h-fit">
                    <div className="space-y-6">
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Sponsored Content</p>
                        <div className="group cursor-pointer">
                            <div className="w-full h-40 rounded-[2rem] bg-zinc-200 dark:bg-zinc-800 mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-zinc-500">AD_SPACE</div>
                            </div>
                            <h5 className="text-xs font-black dark:text-white uppercase">Flux Design Conference 2026</h5>
                            <p className="text-[10px] text-zinc-500 mt-1">Tickets available now. Join the future.</p>
                        </div>
                    </div>

                    <div className="h-px bg-zinc-200 dark:bg-zinc-800" />

                    <div className="space-y-4">
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Suggested Circles</p>
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-zinc-200 dark:bg-zinc-800" />
                                <div className="flex-1 h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-500/20 w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

            </div>
        </div>
    );
};

export default Posts;
