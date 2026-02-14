import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const API_URL = import.meta.env.VITE_API_URL + "/api";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        const autoLogin = async () => {
            try {
                const res = await fetch(`${API_URL}/auth/autologin`, {
                    method: "POST",
                    credentials: "include",
                })

                const result = await res.json();
                setUser(result.user);
                navigate("/")
            } catch (error) {
                console.log("error in autoLogin", error);
            }
        }

        autoLogin();
    }, [])

    const signUp = async (formObj) => {
        try {
            const res = await fetch(`${API_URL}/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(formObj),
            })

            const result = await res.json();

            setUser(result.user);
            navigate("/profile")
        } catch (error) {
            console.log("error in signUp", error);
        }
    }


    const logIn = async (formObj) => {
        try {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formObj),
                credentials: "include",
            })

            const result = await res.json();
            setUser(result.user);
            navigate("/profile")
        } catch (error) {
            console.log("error in logIn", error);
        }
    }


    const logOut = async () => {
        try {
            const res = await fetch(`${API_URL}/auth/logout`, {
                method: "POST",
                credentials: "include",
            })

            setUser(null);
            navigate("/");
        } catch (error) {
            console.log("error in logOut", error);
        }
    }

    return (
        <AuthContext.Provider value={{ user, logIn, signUp, logOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider
