import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useEffect, useState } from "react";

const Nav = () => {
    const { user, logOut } = useAuth();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const allLinks = [
        { name: "Home", path: "/" },
        { name: "Posts", path: "/posts" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Profile", path: "/profile" },
    ];

    const navLinks = allLinks.filter((link) => {
        if (user) return link.path !== "/"; 
        return link.path !== "/profile";
    });

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
            isScrolled ? "pt-3" : "pt-6"
        }`}>
            <div className={`mx-auto transition-all duration-500 ease-out ${
                isScrolled
                ? "max-w-[550px] bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-full border border-white/20 dark:border-zinc-800/50 py-2 px-3 shadow-xl"
                : "max-w-7xl px-8"
            }`}>
                <div className="flex items-center justify-between">
                    
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-2.5 group shrink-0">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-indigo-500/20">
                            <span className="text-white font-bold text-lg">S</span>
                        </div>
                        {!isScrolled && (
                            <span className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white transition-all">
                                Social<span className="text-indigo-600">Flux</span>
                            </span>
                        )}
                    </Link>

                    {/* Nav Links */}
                    <div className="flex items-center bg-zinc-100/50 dark:bg-zinc-800/40 p-1 rounded-full border border-zinc-200/50 dark:border-zinc-700/30">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full ${
                                        isActive
                                        ? "text-zinc-900 dark:text-white"
                                        : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                                    }`}
                                >
                                    {isActive && (
                                        <div className="absolute inset-0 bg-white dark:bg-zinc-700 shadow-sm rounded-full -z-10 animate-in fade-in zoom-in duration-300" />
                                    )}
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center gap-3 shrink-0">
                        {user ? (
                            <button
                                onClick={logOut}
                                className="text-zinc-500 hover:text-red-500 text-xs font-medium uppercase tracking-wider transition-colors px-3"
                            >
                                Exit
                            </button>
                        ) : (
                            <Link
                                to="/signup"
                                className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2 rounded-full text-xs font-bold hover:opacity-90 transition-opacity shadow-md"
                            >
                                Join
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
