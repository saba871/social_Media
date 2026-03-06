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
        <div className="min-h-screen flex items-center justify-center lg:grid lg:grid-cols-2 bg-[#F7F5F2] dark:bg-[#141210] transition-colors duration-500">

            {/* ── Left: Form ── */}
            <div className="w-full max-w-md mx-auto px-8 py-14 z-10 animate-reveal">

                {/* Header */}
                <div className="mb-10 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE9E3] dark:bg-[#1C1917] border border-[#E2DDD6] dark:border-[#2C2825] mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7C9E8F]" />
                        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-stone-400 dark:text-stone-500">
                            New account
                        </span>
                    </div>
                    <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100">
                        Join Flux
                    </h2>
                    <p className="mt-2.5 text-[13.5px] text-stone-400 dark:text-stone-500 leading-relaxed">
                        Begin your journey with 2,000+ creators.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="space-y-1.5">
                        <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500 ml-1">
                            Full name
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            placeholder="Your name"
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-full px-5 py-3.5 rounded-xl border border-[#E2DDD6] dark:border-[#2C2825] bg-[#FDFCFA] dark:bg-[#1F1C1A] text-stone-900 dark:text-stone-100 focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] transition-all outline-none text-[14px] placeholder:text-stone-300 dark:placeholder:text-stone-600"
                            required
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500 ml-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email@provider.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-3.5 rounded-xl border border-[#E2DDD6] dark:border-[#2C2825] bg-[#FDFCFA] dark:bg-[#1F1C1A] text-stone-900 dark:text-stone-100 focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] transition-all outline-none text-[14px] placeholder:text-stone-300 dark:placeholder:text-stone-600"
                            required
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500 ml-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-5 py-3.5 rounded-xl border border-[#E2DDD6] dark:border-[#2C2825] bg-[#FDFCFA] dark:bg-[#1F1C1A] text-stone-900 dark:text-stone-100 focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] transition-all outline-none text-[14px] placeholder:text-stone-400 dark:placeholder:text-stone-600"
                            required
                        />
                    </div>

                    <div className="pt-1.5">
                        <button
                            type="submit"
                            className="group w-full py-3.5 bg-stone-900 dark:bg-stone-100 text-[#F7F5F2] dark:text-stone-900 rounded-xl text-[13px] font-medium tracking-wide transition-all duration-200 hover:bg-[#4A7566] dark:hover:bg-[#D1E0DA] hover:shadow-[0_4px_16px_rgb(74,117,102,0.22)] active:scale-[0.99] flex items-center justify-center gap-2.5"
                        >
                            Create account
                            <svg
                                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </button>
                    </div>

                    {/* Divider + switch */}
                    <div className="flex flex-col items-center gap-3.5 pt-2">
                        <div className="h-px w-full bg-[#EDE9E3] dark:bg-[#2C2825]" />
                        <p className="text-[13px] text-stone-400 dark:text-stone-500">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-stone-700 dark:text-stone-300 font-medium hover:text-[#4A7566] dark:hover:text-[#9DC5B8] transition-colors"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </form>
            </div>

            {/* ── Right: Visual panel ── */}
            <div className="hidden lg:block relative h-[calc(100vh-2rem)] m-4 overflow-hidden rounded-3xl group">

                {/* Image */}
                <img
                    src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2564&auto=format&fit=crop"
                    alt="Abstract Art"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[2s]"
                />

                {/* Warm overlay — replaces indigo gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1C1917]/10 via-transparent to-[#1C1917]/80" />

                {/* Ambient warm orb */}
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#7C9E8F]/15 blur-[90px] rounded-full" />

                {/* Quote card */}
                <div className="absolute inset-x-7 bottom-7 p-8 bg-[#1C1917]/70 backdrop-blur-md border border-white/8 rounded-2xl">
                    <p className="font-serif text-xl font-normal italic text-stone-200 leading-snug mb-6">
                        "The best way to predict the future is to create it."
                    </p>
                    <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-[#D1E0DA]/15 border border-[#D1E0DA]/20 flex items-center justify-center">
                            <span className="text-[#D1E0DA] text-[11px] font-medium tracking-wide">SF</span>
                        </div>
                        <div>
                            <span className="block text-stone-200 text-[12.5px] font-medium">Design Core</span>
                            <span className="block text-stone-500 text-[11px]">Flux Media Group</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;
