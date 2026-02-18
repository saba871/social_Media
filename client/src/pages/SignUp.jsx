import { useForm } from "../../hooks/useForm";
import { useAuth } from "../context/auth.context";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { signUp } = useAuth();

    const [formData, handleChange] = useForm({
        fullname: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center lg:grid lg:grid-cols-2 lg:gap-0 bg-white dark:bg-zinc-950 transition-colors duration-500">
            
            {/* 1. LEFT SIDE: THE FORM CONSOLE */}
            <div className="w-full max-w-md mx-auto px-8 py-12 z-10 animate-entrance">
                <div className="mb-12 text-center lg:text-left">
                    <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">New Entity Registration</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-white italic">JOIN_FLUX</h2>
                    <p className="mt-3 text-zinc-500 dark:text-zinc-400 font-medium">
                        Begin your journey with 2,000+ digital architects.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Legal Designation</label>
                        <input
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-indigo-500/50 transition-all outline-none font-bold placeholder:opacity-30"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Registry Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="name@flux.io"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-indigo-500/50 transition-all outline-none font-bold placeholder:opacity-30"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Pass-Key</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-indigo-500/50 transition-all outline-none font-bold placeholder:opacity-30"
                            required
                        />
                    </div>

                    <button className="group relative w-full py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl mt-4">
                        <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <span className="relative z-10 text-[10px] uppercase tracking-[0.4em]">Initialize Account</span>
                    </button>

                    <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-8">
                        Already synced with us? {' '}
                        <Link to="/login" className="text-zinc-900 dark:text-white font-black border-b-2 border-indigo-500 hover:bg-indigo-500/10 transition-all">
                            Log In Here
                        </Link>
                    </p>
                </form>
            </div>

            {/* 2. RIGHT SIDE: THE VISUAL MONOLITH */}
            <div className="hidden lg:block relative h-[calc(100vh-2rem)] m-4 overflow-hidden rounded-[3rem] group">
                {/* Background Image with Overlay */}
                <img
                    src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2564&auto=format&fit=crop"
                    alt="Abstract Art"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                />
                
                {/* Gradient Wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-zinc-950/90 group-hover:opacity-80 transition-opacity duration-700"></div>

                {/* Floating Content Card */}
                <div className="absolute inset-x-8 bottom-8 p-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-[2.5rem] animate-slideUp">
                    <p className="text-3xl font-black text-white leading-tight tracking-tighter italic mb-6">
                        "THE BEST WAY TO PREDICT THE FUTURE IS TO CREATE IT."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5">
                           <div className="w-full h-full rounded-[0.9rem] bg-zinc-900 flex items-center justify-center">
                                <span className="text-white text-xs font-black">SF</span>
                           </div>
                        </div>
                        <div>
                            <span className="block text-white font-black text-sm uppercase tracking-widest">Design Core</span>
                            <span className="block text-white/50 text-xs font-bold uppercase tracking-widest">Flux Media Group</span>
                        </div>
                    </div>
                </div>

                {/* Ambient Light Effect */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full"></div>
            </div>
        </div>
    );
};

export default SignUp;
