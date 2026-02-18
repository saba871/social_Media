import { useForm } from "../../hooks/useForm";
import { useAuth } from "../context/auth.context";
import { Link } from "react-router-dom";

const LogIn = () => {
    const { logIn } = useAuth();

    const [formData, handleChange] = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        logIn(formData);
    };

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center p-6 overflow-hidden">
            
            {/* 1. Kinetic Background Layers */}
            <div className="absolute inset-0 z-0">
                {/* Modern Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                
                {/* Animated Glows */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </div>

            {/* 2. Authentication Monolith */}
            <div className="relative z-10 w-full max-w-[480px] animate-entrance">
                <div className="glass-card p-10 md:p-14 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-white/20 dark:border-zinc-800/50">
                    
                    {/* Branding Section */}
                    <div className="flex flex-col items-center mb-12">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-white mt-8 italic">CORE_ACCESS</h2>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-center text-sm font-medium tracking-tight">
                            Establish a secure link to the <span className="text-indigo-500">Flux Network.</span>
                        </p>
                    </div>

                    {/* Form Integration */}
                    <form onSubmit={handleSubmit} className="space-y-7">
                        <div className="space-y-2.5">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-4">Registry Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="identity@flux.io"
                                className="w-full px-8 py-5 bg-zinc-100/50 dark:bg-zinc-800/40 border border-transparent focus:border-indigo-500/50 focus:bg-white dark:focus:bg-zinc-900/80 rounded-3xl outline-none transition-all duration-500 text-zinc-900 dark:text-white font-bold placeholder:opacity-20"
                                required
                            />
                        </div>

                        <div className="space-y-2.5">
                            <div className="flex justify-between items-center px-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Pass-Key</label>
                                <a href="#" className="text-[10px] font-black uppercase tracking-widest text-indigo-500 hover:text-indigo-400 transition-colors">Reset?</a>
                            </div>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full px-8 py-5 bg-zinc-100/50 dark:bg-zinc-800/40 border border-transparent focus:border-indigo-500/50 focus:bg-white dark:focus:bg-zinc-900/80 rounded-3xl outline-none transition-all duration-500 text-zinc-900 dark:text-white font-bold placeholder:opacity-20"
                                required
                            />
                        </div>

                        <button className="group relative w-full py-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black rounded-[2rem] overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl">
                            <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-smooth"></div>
                            <span className="relative z-10 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.4em]">
                                Initialize Login
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                </svg>
                            </span>
                        </button>
                    </form>

                    {/* Switch Mode */}
                    <div className="mt-12 flex flex-col items-center gap-4">
                        <div className="h-px w-12 bg-zinc-200 dark:bg-zinc-800"></div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                            First time here? {' '}
                            <Link to="/signup" className="text-zinc-900 dark:text-white font-black border-b-2 border-indigo-500 hover:bg-indigo-500/5 px-1 transition-all">
                                Create Identity
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
