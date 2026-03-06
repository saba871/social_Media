import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import CustomCursor from "./components/CustomCursor";

const App = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-[#F7F5F2] dark:bg-[#141210] text-stone-900 dark:text-stone-100 font-sans antialiased overflow-x-hidden selection:bg-[#D1E0DA] selection:text-stone-900 dark:selection:bg-[#2D4A40] dark:selection:text-stone-100">

            {/* Ambient Background — warm sage blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-[15%] -left-[10%] w-[45%] h-[45%] bg-[#7C9E8F]/8 blur-[130px] rounded-full" />
                <div className="absolute top-[40%] -right-[5%] w-[30%] h-[35%] bg-[#C4B5A0]/10 blur-[100px] rounded-full" />
                <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[30%] bg-[#7C9E8F]/6 blur-[120px] rounded-full" />
            </div>

            <CustomCursor />
            <Nav />

            <main className="relative pt-24 pb-20">
                <div className="max-w-6xl mx-auto px-5 sm:px-6">
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/"        element={<PageWrapper><Home /></PageWrapper>} />
                            <Route path="/about"   element={<PageWrapper><About /></PageWrapper>} />
                            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                            <Route path="/posts"   element={<PageWrapper><Posts /></PageWrapper>} />
                            <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
                            <Route path="/signup"  element={<PageWrapper><SignUp /></PageWrapper>} />
                            <Route path="/login"   element={<PageWrapper><LogIn /></PageWrapper>} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);

export default App;