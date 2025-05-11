import { useState, useEffect } from "react";
import { Post } from "@/types/Post";
import { fetchPosts } from "@/lib/postApi";

export function usePostList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const refetch = async () => {
        setIsLoading(true);
        try {
            const data = await fetchPosts();
            const sorted = data.sort((a, b) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
            setPosts(sorted);
        } catch (err) {
            setError("Failed to fetch posts");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        refetch(); // fetch on mount
    }, []);

    const addPost = (post: Post) => {
        setPosts((prev) => [post, ...prev]);
    };

    const removePost = (id: string) => {
        setPosts((prev) => prev.filter((p) => p.id !== id));
    };

    const updatePost = (updatedPost: Post) => {
        setPosts((prev) =>
            prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
        );
    };

    return {
        posts,
        isLoading,
        error,
        refetch,
        addPost,
        removePost,
        updatePost,
        setPosts,
    };
}