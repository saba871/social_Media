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
        <div className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 font-sans antialiased overflow-x-hidden selection:bg-indigo-500/30">
            
            {/* Ambient Background */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            <CustomCursor />
            <Nav />

            <main className="relative pt-24 pb-20">
                {/* max-w-6xl უზრუნველყოფს, რომ საიდბარები ძალიან არ გაიბნეს გვერდებზე */}
                <div className="max-w-6xl mx-auto px-6">
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                            <Route path="/posts" element={<PageWrapper><Posts /></PageWrapper>} />
                            <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
                            <Route path="/signup" element={<PageWrapper><SignUp /></PageWrapper>} />
                            <Route path="/login" element={<PageWrapper><LogIn /></PageWrapper>} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
        {children}
    </motion.div>
);

export default App;
