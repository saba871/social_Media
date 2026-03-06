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

    const userPosts = post && Array.isArray(post)
        ? post.filter(i => i.author === user?.fullname)
        : [];

    return (
        <div className="page-transition max-w-4xl mx-auto px-5 py-16 space-y-20">

            {/* ── 1. Profile Header ── */}
            {user && (
                <section className="animate-reveal">
                    <div className="relative bg-[#1C1917] dark:bg-[#EDE9E3] rounded-3xl p-8 md:p-12 overflow-hidden">

                        {/* Ambient sage orb */}
                        <div className="absolute top-[-20%] right-[-8%] w-72 h-72 bg-[#7C9E8F]/12 blur-[90px] rounded-full pointer-events-none" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">

                            {/* Avatar */}
                            <div className="shrink-0">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${user?.fullname}&background=4A7566&color=D1E0DA&size=128`}
                                    alt="Avatar"
                                    className="w-24 h-24 rounded-2xl border-2 border-white/10 dark:border-stone-300/20 shadow-lg"
                                />
                            </div>

                            {/* Info */}
                            <div className="text-center md:text-left space-y-3 flex-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 dark:bg-stone-900/10 border border-white/10 dark:border-stone-400/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C9E8F]" />
                                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500">Active</span>
                                </div>

                                <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-stone-100 dark:text-stone-800 leading-none">
                                    {user.fullname}
                                </h1>
                                <p className="text-stone-400 dark:text-stone-500 text-[14px]">{user.email}</p>

                                <div className="pt-1">
                                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#D1E0DA]/15 dark:bg-[#4A7566]/15 border border-[#D1E0DA]/20 dark:border-[#4A7566]/20 rounded-full text-[11px] font-medium text-[#9DC5B8] dark:text-[#4A7566] tracking-wide">
                                        {user.isAdmin ? "Admin" : "Member"}
                                    </span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-6 md:gap-8 text-center shrink-0">
                                <div>
                                    <div className="font-serif text-2xl font-medium text-stone-100 dark:text-stone-800">{userPosts.length}</div>
                                    <div className="text-[10px] font-medium uppercase tracking-widest text-stone-500 mt-0.5">Posts</div>
                                </div>
                                <div className="w-px bg-white/10 dark:bg-stone-400/20" />
                                <div>
                                    <div className="font-serif text-2xl font-medium text-stone-100 dark:text-stone-800">—</div>
                                    <div className="text-[10px] font-medium uppercase tracking-widest text-stone-500 mt-0.5">Followers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ── 2. Create Post ── */}
            <section className="animate-reveal delay-2">
                <div className="bg-[#FDFCFA] dark:bg-[#1F1C1A] border border-[#E2DDD6] dark:border-[#2C2825] rounded-3xl p-8 md:p-10 shadow-[0_2px_20px_rgb(0,0,0,0.04)] dark:shadow-[0_2px_20px_rgb(0,0,0,0.2)]">

                    {/* Section header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 bg-[#1C1917] dark:bg-[#EDE9E3] rounded-xl flex items-center justify-center text-[#D1E0DA] dark:text-[#4A7566] shadow-sm">
                            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-serif text-[17px] font-medium text-stone-900 dark:text-stone-100">New post</h3>
                            <p className="text-[12px] text-stone-400 mt-0.5">Share something with your community</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Title */}
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500 ml-1">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    placeholder="Post title"
                                    className="w-full px-5 py-3.5 bg-[#F7F5F2] dark:bg-[#141210] border border-[#E2DDD6] dark:border-[#2C2825] focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] rounded-xl outline-none transition-all text-[14px] text-stone-900 dark:text-stone-100 placeholder:text-stone-300 dark:placeholder:text-stone-600"
                                />
                            </div>

                            {/* Image upload */}
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500 ml-1">
                                    Image
                                </label>
                                <label className="relative flex items-center justify-center w-full h-[52px] bg-[#F7F5F2] dark:bg-[#141210] border border-dashed border-[#C8D9D3] dark:border-[#3A3530] hover:border-[#7C9E8F] rounded-xl cursor-pointer transition-all duration-200 group">
                                    <span className="text-[12px] font-medium text-stone-400 group-hover:text-[#7C9E8F] transition-colors">
                                        {preview ? "✓ Image selected" : "Upload image"}
                                    </span>
                                    <input
                                        type="file"
                                        name="postImg"
                                        onChange={handleFileChange}
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                    />
                                </label>
                            </div>
                        </div>

                        {/* Image preview */}
                        {preview && (
                            <div className="relative w-full h-44 rounded-xl overflow-hidden animate-in zoom-in-95">
                                <img src={preview} className="w-full h-full object-cover" alt="Preview" />
                                <button
                                    onClick={() => setPreview(null)}
                                    className="absolute top-3 right-3 w-7 h-7 bg-[#1C1917]/70 text-stone-200 rounded-full flex items-center justify-center text-[11px] hover:bg-[#1C1917] transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                        )}

                        {/* Content */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500 ml-1">
                                Content
                            </label>
                            <textarea
                                name="content"
                                required
                                placeholder="What's on your mind?"
                                className="w-full px-5 py-4 bg-[#F7F5F2] dark:bg-[#141210] border border-[#E2DDD6] dark:border-[#2C2825] focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] rounded-xl outline-none min-h-[130px] transition-all text-[14px] text-stone-900 dark:text-stone-100 resize-none placeholder:text-stone-300 dark:placeholder:text-stone-600"
                            />
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-[#EDE9E3] dark:bg-[#2C2825]" />

                        <button
                            type="submit"
                            className="group w-full py-3.5 bg-stone-900 dark:bg-stone-100 text-[#F7F5F2] dark:text-stone-900 rounded-xl text-[13px] font-medium tracking-wide transition-all duration-200 hover:bg-[#4A7566] dark:hover:bg-[#D1E0DA] hover:shadow-[0_4px_16px_rgb(74,117,102,0.22)] active:scale-[0.99] flex items-center justify-center gap-2.5"
                        >
                            Publish post
                            <svg
                                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </section>

            {/* ── 3. Your Posts ── */}
            <section className="space-y-6 animate-reveal delay-3">

                {/* Section header */}
                <div className="flex items-center gap-5 px-1">
                    <h3 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100">Your posts</h3>
                    <div className="h-px flex-1 bg-[#E2DDD6] dark:bg-[#2C2825]" />
                    <span className="text-[12px] text-stone-400 tabular-nums">{userPosts.length}</span>
                </div>

                <div className="space-y-5">
                    {userPosts.length > 0 ? (
                        userPosts.map((item) => (
                            <div
                                key={item?._id}
                                className="group bg-[#FDFCFA] dark:bg-[#1F1C1A] border border-[#E2DDD6] dark:border-[#2C2825] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#C8D9D3] dark:hover:border-[#3A3530] hover:shadow-[0_4px_20px_rgb(0,0,0,0.05)]"
                            >
                                {editId === item?._id ? (
                                    <form
                                        onSubmit={(e) => handleUpdate(e, item._id)}
                                        className="p-7 space-y-4"
                                    >
                                        <input
                                            name="title"
                                            defaultValue={item.title}
                                            className="w-full px-5 py-3 bg-[#F7F5F2] dark:bg-[#141210] border border-[#E2DDD6] dark:border-[#2C2825] focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] rounded-xl outline-none text-[14px] font-medium text-stone-900 dark:text-stone-100 transition-all"
                                        />
                                        <textarea
                                            name="content"
                                            defaultValue={item.content}
                                            className="w-full px-5 py-3 bg-[#F7F5F2] dark:bg-[#141210] border border-[#E2DDD6] dark:border-[#2C2825] focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] rounded-xl outline-none text-[14px] min-h-[100px] resize-none text-stone-900 dark:text-stone-100 transition-all"
                                        />
                                        <div className="flex gap-2.5">
                                            <button
                                                type="submit"
                                                className="flex-1 py-2.5 bg-stone-900 dark:bg-stone-100 text-[#F7F5F2] dark:text-stone-900 rounded-xl text-[12px] font-medium hover:bg-[#4A7566] transition-colors"
                                            >
                                                Save
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setEditId(null)}
                                                className="flex-1 py-2.5 bg-[#EDE9E3] dark:bg-[#2C2825] text-stone-600 dark:text-stone-400 rounded-xl text-[12px] font-medium hover:bg-[#E2DDD6] dark:hover:bg-[#3A3530] transition-colors"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <div>
                                        {/* Post image */}
                                        {item.postImg && (
                                            <div className="relative overflow-hidden h-56">
                                                <img
                                                    src={item.postImg}
                                                    alt=""
                                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                                                />
                                                <div className="absolute inset-0 bg-[#7C9E8F]/5 group-hover:bg-transparent transition-colors" />
                                            </div>
                                        )}

                                        <div className="p-6 space-y-3">
                                            {/* Title row */}
                                            <div className="flex justify-between items-start gap-4">
                                                <div className="space-y-1.5 flex-1 min-w-0">
                                                    <h2 className="font-serif text-[18px] font-medium text-stone-900 dark:text-stone-100 tracking-tight leading-snug truncate">
                                                        {item.title}
                                                    </h2>
                                                    <div className="flex items-center gap-3">
                                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#D1E0DA] dark:bg-[#1E3530] text-[#4A7566] dark:text-[#9DC5B8] text-[10px] font-medium rounded-full">
                                                            Published
                                                        </span>
                                                        <span className="text-[10px] text-stone-300 dark:text-stone-600 font-mono">
                                                            #{item._id.slice(-6)}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Actions */}
                                                <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
                                                    <button
                                                        onClick={() => setEditId(item?._id)}
                                                        className="p-2 rounded-lg text-stone-300 dark:text-stone-600 hover:text-[#7C9E8F] hover:bg-[#EDE9E3] dark:hover:bg-[#2C2825] transition-all"
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => adminDeletePost(item?._id)}
                                                        className="p-2 rounded-lg text-stone-300 dark:text-stone-600 hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all"
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <p className="text-stone-400 dark:text-stone-500 text-[13.5px] leading-relaxed line-clamp-2">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-16 border border-dashed border-[#E2DDD6] dark:border-[#2C2825] rounded-2xl">
                            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-stone-300 dark:text-stone-600">
                                No posts yet
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Profile;
