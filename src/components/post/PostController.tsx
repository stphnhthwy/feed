"use client";

import { useState } from "react";
import PostComponent from "./PostComponent";
import { DialogLayout } from "../subframe/ui";

type PostControllerProps = {
    mode: "new" | "edit";
    post?: {
        id: string;
        content: string;
        initialContent?: string;
    }
    onClose: () => void;
};

export default function PostController({ mode, post, onClose }: PostControllerProps) {
    const [content, setContent] = useState(post?.content ?? "");
    const [media, setMedia] = useState<LocalMedia[]>(post?.media ?? []);

    const handleSubmit = async (value: string) => {
        const body = JSON.stringify({
            content: value,
            media: media.map((m) => ({
                url: m.url,
                type: m.type,
                orientation: m.orientation ?? null,
            })),
        });

        try {
            const endpoint = mode === "edit" ? `/api/posts/${post?.id}` : `/api/posts`;
            const method = mode === "edit" ? "PATCH" : "POST";

            await fetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                body,
            });

            onClose();
        } catch (err) {
            console.error(err);
            alert("There was an error saving the post.");
        }
    };

    return (
        <DialogLayout open>
            <PostComponent
                mode={mode}
                header={mode === "edit" ? "Edit post" : "New post"}
                placeholder="What's on your mind?"
                initialContent={content}
                onSubmit={handleSubmit}
                onCancel={onClose}
                media={media}
                setMedia={setMedia}
            />
        </DialogLayout>
    );
}