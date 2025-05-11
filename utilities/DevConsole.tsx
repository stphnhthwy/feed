'use client'

import { fetchPosts, createPost, updatePost, deletePost } from "@/lib/postApi";
import { useState } from "react";

export default function DevConsole() {
    const [loading, setLoading] = useState(false);

    async function testFetchPosts() {
        setLoading(true);
        try {
            const posts = await fetchPosts();
            console.log("Fetched posts:", posts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    }

    async function testCreatePost() {
        setLoading(true);
        try {
            const newPost = {
                content: "This is a DevConsole test post",
                media: [],
            };
            const res = await createPost(newPost);
            console.log("Create response status:", res.status);
        } catch (error) {
            console.error("Error creating post:", error);
        } finally {
            setLoading(false);
        }
    }

    async function testUpdatePost() {
        const id = prompt("Enter Post ID to update:");
        if (!id) return;
        setLoading(true);
        try {
            const updatedPost = {
                content: "Updated content from DevConsole",
                media: [],
            };
            const res = await updatePost(id, updatedPost);
            console.log("Update response status:", res.status);
        } catch (error) {
            console.error("Error updating post:", error);
        } finally {
            setLoading(false);
        }
    }

    async function testDeletePost() {
        const id = prompt("Enter Post ID to delete:");
        if (!id) return;
        setLoading(true);
        try {
            const res = await deletePost(id);
            console.log("Delete response status:", res.status);
        } catch (error) {
            console.error("Error deleting post:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">🛠 DevConsole</h1>
            <div className="flex flex-col gap-2">
                <button onClick={testFetchPosts} disabled={loading}>Fetch Posts</button>
                <button onClick={testCreatePost} disabled={loading}>Create Post</button>
                <button onClick={testUpdatePost} disabled={loading}>Update Post</button>
                <button onClick={testDeletePost} disabled={loading}>Delete Post</button>
            </div>
            {loading && <p className="mt-4 text-blue-500">Running...</p>}
        </div>
    );
}