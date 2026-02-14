import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import Posts from "./pages/Posts"
import Profile from "./pages/Profile"
import CustomCursor from "./components/CustomCursor"

const App = () => {
    return (
        /* Using 'antialiased' makes fonts look much cleaner on high-res screens.
           Using 'bg-zinc-50' instead of pure white gives it a premium "app" feel.
        */
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased">

            {/* The Nav is now part of the global layout */}
            <CustomCursor />
            <Nav />

            {/* Main Content Wrapper:
               The 'max-w-7xl' ensures your content doesn't stretch too wide on huge monitors,
               which is a common mistake in amateur designs.
            */}
            <main className="px-4 py-8 md:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<LogIn />} />
                    </Routes>
                </div>
            </main>

            {/* Optional: Add a subtle footer here later for extra "sellability" */}
        </div>
    )
}

export default App
