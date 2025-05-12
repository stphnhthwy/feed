import { useState } from "react";
import { MediaItem, PostFormData } from "@/types/Post";

export function usePostFormState(initial?: Partial<PostFormData>) {
    const [content, setContent] = useState(initial?.content ?? "");
    const [media, setMedia] = useState<MediaItem[]>(initial?.media ?? []);

    const isValid = content.trim().length > 0 || media.length > 0;

    const getPayload = (): PostFormData => ({
        content,
        media,
    });

    const resetForm = () => {
        setContent("");
        setMedia([]);
    };

    return {
        content,
        setContent,
        media,
        setMedia,
        isValid,
        getPayload,
        resetForm,
    };
}