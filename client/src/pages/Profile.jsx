import { useEffect, useState } from "react";
import { useAuth } from "../context/auth.context";
import { usePost } from "../context/post.context";

const Profile = () => {
    const { user } = useAuth();
    const { post, allPost, adminAddPost, adminUpdatePost, adminDeletePost } = usePost();
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        if (user) {
            allPost();
        }
    }, [user, allPost]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        await adminAddPost(formData);
        e.target.reset();
    };

    const handleUpdate = async (e, id) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        await adminUpdatePost(id, formData);
        setEditId(null);
    };

    return (
        <div className="page-transition max-w-5xl mx-auto px-6 py-20 space-y-20">

            {/* 1. Kinetic Profile Header */}
            {user && (
                <section className="relative group perspective-1000">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-slow-rotate"></div>
                    <div className="relative p-10 md:p-16 rounded-[3rem] overflow-hidden bg-zinc-950 text-white border border-white/10 shadow-2xl transition-transform duration-700 group-hover:rotate-x-2">

                        {/* Interactive Background Blob */}
                        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-indigo-600/30 blur-[120px] rounded-full animate-pulse"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-indigo-500 rounded-full animate-ping opacity-20"></div>
                                <img
                                    src={`https://ui-avatars.com/api/?name=${user?.fullname || 'User'}&background=4f46e5&color=fff&size=128`}
                                    alt="Avatar"
                                    className="relative w-32 h-32 rounded-full border-4 border-white/10 object-cover shadow-2xl transform transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            <div className="text-center md:text-left space-y-3">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-70">Node Active</span>
                                </div>
                                <h1 className="text-5xl font-black tracking-tighter leading-none">{user.fullname}</h1>
                                <p className="text-zinc-400 font-medium text-lg tracking-tight">{user.email}</p>
                                <div className="pt-2">
                                    <span className="px-4 py-1.5 bg-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-indigo-600/40">
                                        {user.isAdmin ? "Core Architect" : "Standard Entity"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 2. Create Post: The "Glass Console" */}
            <section className="animate-slideUp delay-200">
                <div className="glass-card p-10 md:p-12 rounded-[3.5rem] border-white/20 dark:border-zinc-800/50 shadow-2xl relative overflow-hidden group">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-zinc-900 dark:bg-white rounded-2xl flex items-center justify-center text-white dark:text-zinc-900 shadow-xl group-hover:rotate-12 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
                        </div>
                        <h3 className="text-3xl font-black tracking-tighter italic">Broadcast Signal</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="ml-4 text-[10px] font-black uppercase tracking-widest opacity-40">Headline</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter title..."
                                    className="w-full px-8 py-5 bg-white/5 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800 rounded-3xl outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-zinc-900 transition-all font-bold"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="ml-4 text-[10px] font-black uppercase tracking-widest opacity-40">Visual Data</label>
                                <input
                                    type="file"
                                    name="postImg"
                                    className="w-full px-6 py-4 bg-white/5 dark:bg-zinc-900/50 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-3xl file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-indigo-600 file:text-white cursor-pointer hover:file:bg-indigo-700 transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="ml-4 text-[10px] font-black uppercase tracking-widest opacity-40">Core Message</label>
                            <textarea
                                name="content"
                                placeholder="Write your thoughts..."
                                className="w-full px-8 py-6 bg-white/5 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800 rounded-[2rem] outline-none focus:ring-2 focus:ring-indigo-500 min-h-[150px] transition-all font-medium"
                            />
                        </div>
                        <button
                            type="submit"
                            className="group relative w-full py-6 bg-indigo-600 text-white font-black rounded-[2rem] shadow-2xl hover:bg-indigo-700 transition-all active:scale-[0.97]"
                        >
                            <span className="relative z-10 tracking-[0.3em] uppercase text-xs">Transmit Content ✨</span>
                            <div className="absolute inset-0 bg-white/20 rounded-[2rem] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                        </button>
                    </form>
                </div>
            </section>

            {/* 3. My Feed: The "Activity Stream" */}
            <section className="space-y-10 animate-slideUp delay-500">
                <div className="flex items-center gap-6 px-4">
                    <h3 className="text-4xl font-black tracking-tighter">Your Stream</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 dark:from-zinc-800 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {post && Array.isArray(post) && post.map((item) => (
                        user?.fullname === item?.author && (
                            <div key={item?._id} className="relative group">
                                {/* Vertical connection line for "stream" feel */}
                                <div className="absolute left-[-2rem] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block group-hover:bg-indigo-500 transition-colors duration-500"></div>
                                <div className="absolute left-[-2.35rem] top-8 w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-950 hidden md:block group-hover:bg-indigo-500 transition-colors duration-500"></div>

                                <div className="glass-card p-10 rounded-[3.5rem] hover:border-indigo-500/50 transition-all duration-700">
                                    {editId === item?._id ? (
                                        <form onSubmit={(e) => handleUpdate(e, item._id)} className="space-y-6 animate-in zoom-in-95 duration-500">
                                            <input name="title" defaultValue={item.title} className="w-full px-6 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl outline-none font-bold" />
                                            <textarea name="content" defaultValue={item.content} className="w-full px-6 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl outline-none min-h-[120px]" />
                                            <div className="flex gap-4">
                                                <button type="submit" className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest">Commit Update</button>
                                                <button type="button" onClick={() => setEditId(null)} className="flex-1 py-4 bg-zinc-200 dark:bg-zinc-700 rounded-2xl font-black text-xs uppercase tracking-widest">Abort</button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="space-y-8">
                                            <div className="flex justify-between items-start">
                                                <div className="space-y-2">
                                                    <h2 className="text-4xl font-black tracking-tighter leading-none group-hover:text-indigo-600 transition-colors">{item.title}</h2>
                                                    <div className="flex gap-4 items-center">
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 px-2 py-0.5 bg-indigo-500/10 rounded">Signal {item.likes}</span>
                                                        <span className="text-[10px] font-bold text-zinc-400">ID: {item._id.slice(-6)}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button onClick={() => setEditId(item?._id)} className="p-4 hover:bg-indigo-500 hover:text-white rounded-2xl transition-all duration-500 text-zinc-400 shadow-sm">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                                    </button>
                                                    <button onClick={() => adminDeletePost(item?._id)} className="p-4 hover:bg-rose-500 hover:text-white rounded-2xl transition-all duration-500 text-zinc-400 shadow-sm">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium italic">"{item.content}"</p>

                                            {item.postImg && (
                                                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl group/img">
                                                    <img src={item.postImg} alt="Stream Data" className="w-full object-cover max-h-[500px] grayscale group-hover/img:grayscale-0 transition-all duration-1000 scale-105 group-hover/img:scale-100" />
                                                    <div className="absolute inset-0 bg-indigo-600/10 group-hover/img:bg-transparent transition-colors"></div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Profile;
