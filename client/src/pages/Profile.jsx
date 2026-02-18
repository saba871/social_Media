import { useEffect, useState } from "react";
import { useAuth } from "../context/auth.context";
import { usePost } from "../context/post.context";

const Profile = () => {
    const { user } = useAuth();
    const { post, allPost, adminAddPost, adminUpdatePost, adminDeletePost } = usePost();
    const [editId, setEditId] = useState(null);
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (user) allPost();
    }, [user, allPost]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        await adminAddPost(formData);
        e.target.reset();
        setPreview(null);
    };

    const handleUpdate = async (e, id) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        await adminUpdatePost(id, formData);
        setEditId(null);
    };

    return (
        <div className="page-transition max-w-5xl mx-auto px-6 py-20 space-y-24">

            {/* 1. KINETIC PROFILE HEADER */}
            {user && (
                <section className="relative group animate-entrance">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                    <div className="relative p-10 md:p-16 rounded-[3rem] bg-zinc-950 text-white border border-white/10 shadow-2xl overflow-hidden">
                        
                        {/* Ambient Background */}
                        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full animate-pulse"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-indigo-500 rounded-full animate-ping opacity-10"></div>
                                <img
                                    src={`https://ui-avatars.com/api/?name=${user?.fullname}&background=4f46e5&color=fff&size=128`}
                                    alt="Avatar"
                                    className="relative w-32 h-32 rounded-full border-4 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="text-center md:text-left space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-70 italic">Node Active</span>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">{user.fullname}</h1>
                                <p className="text-zinc-400 font-medium text-lg tracking-tight">{user.email}</p>
                                <div className="pt-2">
                                    <span className="px-5 py-2 bg-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-500">
                                        {user.isAdmin ? "Core Architect" : "Standard Entity"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 2. BROADCAST CONSOLE (CREATE POST) */}
            <section className="animate-entrance delay-200">
                <div className="glass-card p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group">
                    <div className="flex items-center gap-5 mb-12">
                        <div className="w-12 h-12 bg-zinc-900 dark:bg-white rounded-2xl flex items-center justify-center text-white dark:text-zinc-900 shadow-xl group-hover:rotate-12 transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
                        </div>
                        <h3 className="text-3xl font-black tracking-tighter italic">Broadcast Signal</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="ml-4 text-[10px] font-black uppercase tracking-widest opacity-40">Headline</label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    placeholder="Signal Title..."
                                    className="w-full px-8 py-5 bg-zinc-100/50 dark:bg-zinc-900/50 border border-transparent focus:border-indigo-500/50 rounded-3xl outline-none transition-all font-bold"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="ml-4 text-[10px] font-black uppercase tracking-widest opacity-40">Visual Data</label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        name="postImg"
                                        onChange={handleFileChange}
                                        className="w-full px-6 py-4 bg-zinc-100/50 dark:bg-zinc-900/50 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl file:hidden cursor-pointer"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-xs font-bold uppercase tracking-widest opacity-40">
                                        {preview ? "Image Linked" : "Upload Static"}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {preview && (
                            <div className="relative w-full h-48 rounded-[2rem] overflow-hidden animate-in zoom-in-95">
                                <img src={preview} className="w-full h-full object-cover" alt="Preview" />
                                <button onClick={() => setPreview(null)} className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors">✕</button>
                            </div>
                        )}

                        <div className="space-y-3">
                            <label className="ml-4 text-[10px] font-black uppercase tracking-widest opacity-40">Core Message</label>
                            <textarea
                                name="content"
                                required
                                placeholder="Decrypt your thoughts here..."
                                className="w-full px-8 py-6 bg-zinc-100/50 dark:bg-zinc-900/50 border border-transparent focus:border-indigo-500/50 rounded-[2.5rem] outline-none min-h-[160px] transition-all font-medium"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group relative w-full py-6 bg-indigo-600 text-white font-black rounded-[2.5rem] shadow-2xl hover:bg-indigo-700 transition-all active:scale-[0.98] overflow-hidden"
                        >
                            <span className="relative z-10 tracking-[0.4em] uppercase text-xs">Initialize Transmission</span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        </button>
                    </form>
                </div>
            </section>

            {/* 3. ACTIVITY STREAM */}
            <section className="space-y-12 animate-entrance delay-500">
                <div className="flex items-center gap-6 px-4">
                    <h3 className="text-4xl font-black tracking-tighter italic">Your Stream</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 dark:from-zinc-800 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 gap-10">
                    {post && Array.isArray(post) && post.filter(i => i.author === user?.fullname).length > 0 ? (
                        post.filter(item => item.author === user?.fullname).map((item) => (
                            <div key={item?._id} className="relative group">
                                <div className="absolute left-[-2rem] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden lg:block group-hover:bg-indigo-500 transition-colors duration-700"></div>
                                <div className="absolute left-[-2.35rem] top-10 w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-950 hidden lg:block group-hover:bg-indigo-500 transition-colors"></div>

                                <div className="glass-card p-10 rounded-[3.5rem] hover:border-indigo-500/30 transition-all duration-700">
                                    {editId === item?._id ? (
                                        <form onSubmit={(e) => handleUpdate(e, item._id)} className="space-y-6 animate-in slide-in-from-bottom-4">
                                            <input name="title" defaultValue={item.title} className="w-full px-8 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl outline-none font-bold" />
                                            <textarea name="content" defaultValue={item.content} className="w-full px-8 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl outline-none min-h-[120px]" />
                                            <div className="flex gap-4">
                                                <button type="submit" className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest">Commit</button>
                                                <button type="button" onClick={() => setEditId(null)} className="flex-1 py-4 bg-zinc-200 dark:bg-zinc-700 rounded-2xl font-black text-[10px] uppercase tracking-widest">Abort</button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="space-y-8">
                                            <div className="flex justify-between items-start">
                                                <div className="space-y-2">
                                                    <h2 className="text-4xl font-black tracking-tighter leading-tight group-hover:text-indigo-500 transition-colors">{item.title}</h2>
                                                    <div className="flex gap-4 items-center">
                                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-500 px-3 py-1 bg-indigo-500/10 rounded-full italic">Signal Verified</span>
                                                        <span className="text-[10px] font-bold text-zinc-400 opacity-50">ARCHIVE_ID: {item._id.slice(-6)}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <button onClick={() => setEditId(item?._id)} className="p-4 glass-card hover:bg-indigo-500 hover:text-white rounded-[1.5rem] transition-all duration-500">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                                    </button>
                                                    <button onClick={() => adminDeletePost(item?._id)} className="p-4 glass-card hover:bg-rose-500 hover:text-white rounded-[1.5rem] transition-all duration-500">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-light italic">"{item.content}"</p>

                                            {item.postImg && (
                                                <div className="relative overflow-hidden rounded-[2.5rem] group/img shadow-2xl">
                                                    <img src={item.postImg} alt="Data" className="w-full object-cover max-h-[500px] grayscale group-hover/img:grayscale-0 transition-all duration-1000 group-hover/img:scale-105" />
                                                    <div className="absolute inset-0 bg-indigo-600/5 group-hover/img:bg-transparent transition-colors"></div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-[3rem] opacity-30">
                            <p className="text-xs font-black uppercase tracking-[0.4em]">No signals transmitted yet...</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Profile;
