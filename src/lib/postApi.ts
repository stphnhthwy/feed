import { Post, PostFormData } from "@/types/Post";

export async function fetchPosts(): Promise<Post[]> {
    const res = await fetch("/api/posts");
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
}

export async function createPost(body: PostFormData): Promise<Post> {
    const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error("Failed to create post");
    return res.json(); // ✅ must include .id, .content, etc.
}

export async function updatePost(id: string, body: any) {
    return fetch(`/api/posts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
}

export async function deletePost(id: string) {
    return fetch(`/api/posts/${id}`, {
        method: "DELETE",
    });
}