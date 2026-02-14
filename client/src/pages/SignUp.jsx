import { useForm } from '../../hooks/useForm';
import { useAuth } from '../context/auth.context';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { signUp } = useAuth();

    const [formData, handleChange] = useForm({
        fullname: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(formData);
    };

    return (
        <div className="min-h-[calc(100-rem)] flex items-center justify-center lg:grid lg:grid-cols-2 lg:gap-0">

            {/* Left Side: The Form */}
            <div className="w-full max-w-md mx-auto px-6 py-12 animate-fade-in">
                <div className="mb-10 text-center lg:text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Create your account
                    </h2>
                    <p className="mt-3 text-zinc-500 dark:text-zinc-400">
                        Join 2,000+ creators building their future.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name Field */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">Full Name</label>
                        <input
                            type="text"
                            name="fullname"
                            placeholder="John Doe"
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                            required
                        />
                    </div>

                    <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.01] active:scale-[0.98]">
                        Create Account
                    </button>

                    <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-6">
                        Already have an account? {' '}
                        <Link to="/login" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                            Log in
                        </Link>
                    </p>
                </form>
            </div>

            {/* Right Side: The Visual (Hidden on mobile) */}
            <div className="hidden lg:block relative h-full min-h-[600px] overflow-hidden rounded-3xl m-4">
                <img
                    src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2564&auto=format&fit=crop"
                    alt="Abstract Art"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[30%] brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 to-transparent flex items-end p-12">
                    <div>
                        <p className="text-3xl font-bold text-white mb-4 italic">
                            "The best way to predict the future is to create it."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-zinc-200" />
                            <span className="text-white/80 font-medium">Design Team, SocialFlux</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
