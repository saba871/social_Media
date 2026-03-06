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

            {/* Warm ambient background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-[#7C9E8F]/7 rounded-full blur-[110px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] bg-[#C4B5A0]/8 rounded-full blur-[100px]" />
            </div>

            {/* Card */}
            <div className="relative z-10 w-full max-w-[440px] animate-reveal">
                <div className="bg-[#FDFCFA] dark:bg-[#1F1C1A] border border-[#E2DDD6] dark:border-[#2C2825] rounded-3xl p-9 md:p-11 shadow-[0_8px_48px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_48px_rgb(0,0,0,0.3)]">

                    {/* Branding */}
                    <div className="flex flex-col items-center mb-10 text-center">
                        <div className="w-12 h-12 bg-[#1C1917] dark:bg-[#EDE9E3] rounded-2xl flex items-center justify-center shadow-sm mb-6">
                            <svg className="w-5 h-5 text-[#D1E0DA] dark:text-[#4A7566]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
                            </svg>
                        </div>
                        <h2 className="font-serif text-2xl font-medium tracking-tight text-stone-900 dark:text-stone-100">
                            Welcome back
                        </h2>
                        <p className="text-stone-400 dark:text-stone-500 mt-2 text-[13.5px] leading-relaxed">
                            Sign in to your{" "}
                            <span className="text-[#4A7566] dark:text-[#9DC5B8]">Flux</span>
                            {" "}account.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500 ml-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="email@provider.com"
                                className="w-full px-5 py-3.5 bg-[#F7F5F2] dark:bg-[#141210] border border-[#E2DDD6] dark:border-[#2C2825] focus:border-[#7C9E8F] dark:focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] rounded-xl outline-none transition-all duration-200 text-[14px] text-stone-900 dark:text-stone-100 placeholder:text-stone-300 dark:placeholder:text-stone-600"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center ml-1 mr-0.5">
                                <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500">
                                    Password
                                </label>
                                <a href="#" className="text-[11px] text-[#7C9E8F] hover:text-[#4A7566] transition-colors">
                                    Forgot?
                                </a>
                            </div>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full px-5 py-3.5 bg-[#F7F5F2] dark:bg-[#141210] border border-[#E2DDD6] dark:border-[#2C2825] focus:border-[#7C9E8F] dark:focus:border-[#7C9E8F] focus:shadow-[0_0_0_3px_rgb(124,158,143,0.12)] rounded-xl outline-none transition-all duration-200 text-[14px] text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <div className="pt-1">
                            <button
                                type="submit"
                                className="group w-full py-3.5 bg-stone-900 dark:bg-stone-100 text-[#F7F5F2] dark:text-stone-900 rounded-xl text-[13px] font-medium tracking-wide transition-all duration-200 hover:bg-[#4A7566] dark:hover:bg-[#D1E0DA] hover:shadow-[0_4px_16px_rgb(74,117,102,0.22)] active:scale-[0.99] flex items-center justify-center gap-2.5"
                            >
                                Sign in
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                </svg>
                            </button>
                        </div>
                    </form>

                    {/* Divider + switch */}
                    <div className="mt-8 flex flex-col items-center gap-4">
                        <div className="h-px w-full bg-[#EDE9E3] dark:bg-[#2C2825]" />
                        <p className="text-[13px] text-stone-400 dark:text-stone-500">
                            No account yet?{" "}
                            <Link
                                to="/signup"
                                className="text-stone-700 dark:text-stone-300 font-medium hover:text-[#4A7566] dark:hover:text-[#9DC5B8] transition-colors"
                            >
                                Create one
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LogIn;
