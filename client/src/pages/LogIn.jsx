import { useForm } from "../../hooks/useForm";
import { useAuth } from "../context/auth.context";
import { Link } from "react-router-dom";

const LogIn = () => {
    const { logIn } = useAuth();

    const [formData, handleChange] = useForm({
        email: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        logIn(formData);
    }

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center p-6">

            {/* 1. Background Visuals (Animated Glows) */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

            {/* 2. The Login Card */}
            <div className="relative w-full max-w-[450px] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">

                {/* Branding / Icon */}
                <div className="flex flex-col items-center mb-10">
                    <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-6 rotate-3 hover:rotate-0 transition-transform duration-500">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-white">Welcome Back</h2>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-center">Secure access to your social command center.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Work Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@company.com"
                            className="w-full px-5 py-4 bg-zinc-100 dark:bg-zinc-800/50 border border-transparent focus:border-indigo-500 focus:bg-white dark:focus:bg-zinc-950 rounded-2xl outline-none transition-all text-zinc-900 dark:text-white"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Password</label>
                            <a href="#" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">Forgot Password?</a>
                        </div>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full px-5 py-4 bg-zinc-100 dark:bg-zinc-800/50 border border-transparent focus:border-indigo-500 focus:bg-white dark:focus:bg-zinc-950 rounded-2xl outline-none transition-all text-zinc-900 dark:text-white"
                            required
                        />
                    </div>

                    <button className="group relative w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black rounded-2xl transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Sign In
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </span>
                    </button>
                </form>

                {/* Footer Link */}
                <p className="mt-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
                    New to the platform? {' '}
                    <Link to="/signup" className="text-zinc-900 dark:text-white font-black border-b-2 border-indigo-500 hover:bg-indigo-500/10 transition-colors">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LogIn;
