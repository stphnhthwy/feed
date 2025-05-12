import { useState } from "react";
import { PostFormData } from "@/types/Post";
import { createPost, updatePost, deletePost } from "@/lib/postApi"; // reusable fetchers

export function usePostMutation() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const create = async (data: PostFormData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await createPost(data);
            return response;
        } catch (err) {
            console.error(err);
            setError("Failed to create post.");
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const update = async (id: string, data: PostFormData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await updatePost(id, data);
            return response;
        } catch (err) {
            console.error(err);
            setError("Failed to update post.");
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const remove = async (id: string) => {
        setIsLoading(true);
        setError(null);
        try {
            return await deletePost(id);
        } catch (err) {
            setError("Failed to delete post.");
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        create,
        update,
        remove,
        isLoading,
        error,
    };
}