import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";


const PostContext = createContext();

export const usePost = () => useContext(PostContext);

const API_URL = import.meta.env.VITE_API_URL + "/api";


const PostProvider = ({ children }) => {
    const [post, setPosts] = useState([]);

    const allPost = async () => {
        try {
            const res = await fetch(`${API_URL}/posts`, {
                method: "GET",
                credentials: "include",
            });

            const result = await res.json();

            if (result.data && result.data.post) {
                setPosts(result.data.post);
            }
        } catch (error) {
            console.log("error in getPosts context", error);
        }
    }


    const adminAddPost = async (postObj) => {
        try {
            const res = await fetch(`${API_URL}/posts`, {
                method: "POST",
                credentials: "include",
                body: postObj,
            })

            const result = await res.json();

            if (res.ok && result.data && result.data.post) {
                setPosts((prev) => [result.data.post, ...prev]);
            }
        } catch (error) {
            console.log("error in addPosts context", error);
        }
    }


    const adminDeletePost = async (id) => {
        try {
            const res = await fetch(`${API_URL}/posts/${id}`, {
                method: "DELETE",
                credentials: "include",
            })

            const result = await res.json();
            setPosts((prev) => prev.filter((post) => post._id !== id));
        } catch (error) {
            console.log("error in deletePosts context", error);
        }
    }


    const adminUpdatePost = async (id, postObj) => {
        try {
            const res = await fetch(`${API_URL}/posts/${id}`, {
                method: "PUT",
                credentials: "include",
                body: postObj,
            })

            const result = await res.json();
            setPosts((prev) => prev.map((post) => post._id === id ? result.post : post));
        } catch (error) {
            console.log("error in updatePosts context", error);
        }
    }


    return (
        <PostContext.Provider value={{ post, allPost, adminAddPost, adminDeletePost, adminUpdatePost }}>
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider
