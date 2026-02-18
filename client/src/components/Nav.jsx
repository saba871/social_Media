import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useEffect, useState } from "react";

const Nav = () => {
    const { user, logOut } = useAuth();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 30);
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

    // ფილტრაციის ლოგიკა
    const navLinks = allLinks.filter((link) => {
        if (user) return link.path !== "/"; 
        return link.path !== "/profile";
    });

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isScrolled ? "pt-4" : "pt-8"
        }`}>
            <div className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                isScrolled
                ? "max-w-[600px] glass-card rounded-[2.5rem] py-3 px-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-white/20"
                : "max-w-7xl px-6 md:px-12"
            }`}>
                <div className="flex items-center justify-between">

                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 bg-zinc-900 dark:bg-white rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-[15deg]">
                            <span className="text-white dark:text-zinc-900 font-black text-xl italic">S</span>
                        </div>
                        {!isScrolled && (
                            <span className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white animate-slideUp">
                                Social<span className="text-indigo-600">Flux</span>
                            </span>
                        )}
                    </Link>

                    <div className="flex items-center gap-1 md:gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full ${
                                    location.pathname === link.path
                                    ? "text-indigo-600 dark:text-indigo-400"
                                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                                }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full animate-pulse" />
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        {user ? (
                            <button
                                onClick={logOut}
                                className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
                            >
                                Exit
                            </button>
                        ) : (
                            <Link
                                to="/signup"
                                className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:scale-105 transition-all"
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
