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
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased overflow-x-hidden">

            <CustomCursor />
            <Nav />
            <main className="relative">
                <div className="w-full mx-auto">
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
        </div>
    )
}

export default App
