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
        { name: "Home",    path: "/" },
        { name: "Posts",   path: "/posts" },
        { name: "About",   path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Profile", path: "/profile" },
    ];

    const navLinks = allLinks.filter((link) => {
        if (user) return link.path !== "/";
        return link.path !== "/profile";
    });

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
            isScrolled ? "pt-3" : "pt-5"
        }`}>
            <div className={`mx-auto transition-all duration-500 ease-out ${
                isScrolled
                    ? "max-w-[540px] bg-[#FDFCFA]/80 dark:bg-[#1F1C1A]/80 backdrop-blur-xl rounded-full border border-[#E2DDD6] dark:border-[#2C2825] py-2 px-3 shadow-[0_4px_24px_rgb(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgb(0,0,0,0.3)]"
                    : "max-w-6xl px-6"
            }`}>
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group shrink-0">
                        <div className="w-8 h-8 bg-[#7C9E8F] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#4A7566] shadow-sm">
                            <span className="text-white font-semibold text-sm tracking-tight">S</span>
                        </div>
                        {!isScrolled && (
                            <span className="text-[15px] font-medium tracking-tight text-stone-900 dark:text-stone-100">
                                Social<span className="text-[#7C9E8F]">Flux</span>
                            </span>
                        )}
                    </Link>

                    {/* Nav Links */}
                    <div className="flex items-center bg-[#EDE9E3]/60 dark:bg-[#1C1917]/60 p-1 rounded-full border border-[#E2DDD6]/80 dark:border-[#2C2825]/80">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative px-4 py-1.5 text-[13px] font-medium transition-all duration-250 rounded-full ${
                                        isActive
                                            ? "text-stone-900 dark:text-stone-100"
                                            : "text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
                                    }`}
                                >
                                    {isActive && (
                                        <div className="absolute inset-0 bg-[#FDFCFA] dark:bg-[#2C2825] shadow-sm rounded-full -z-10 animate-in fade-in zoom-in duration-200" />
                                    )}
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Action */}
                    <div className="flex items-center shrink-0">
                        {user ? (
                            <button
                                onClick={logOut}
                                className="text-stone-400 hover:text-red-400 dark:hover:text-red-400 text-[12px] font-medium tracking-wide transition-colors duration-200 px-3 py-1.5"
                            >
                                Sign out
                            </button>
                        ) : (
                            <Link
                                to="/signup"
                                className="bg-stone-900 dark:bg-stone-100 text-[#F7F5F2] dark:text-stone-900 px-5 py-2 rounded-full text-[12.5px] font-medium tracking-wide hover:bg-[#4A7566] dark:hover:bg-[#D1E0DA] transition-colors duration-200 shadow-sm"
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