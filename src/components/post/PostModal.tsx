'use client'

import { useState } from "react";
import { createPost, updatePost } from "@/lib/postApi";
import { DialogLayout } from "../subframe/ui";
import PostForm from "./PostForm";

type PostModalProps = {
    mode: "new" | "edit";
    post?: {
        id: string;
        content: string;
        initialContent?: string;
    }
    onClose: () => void;
};

export default function PostModal({ mode, post, onClose }: PostModalProps) {
    const [content, setContent] = useState(post?.content ?? "");
    const [media, setMedia] = useState<LocalMedia[]>(post?.media ?? []);
    const handleSubmit = async (value: string) => {
        const payload = {
            content: value,
            media: media.map((m) => ({
                url: m.url,
                type: m.type,
                orientation: m.orientation ?? null,
            })),
        };

        try {
            if (mode === "edit" && post?.id) {
                await updatePost(post.id, payload);
            } else {
                await createPost(payload);
            }

            onClose();
        } catch (err) {
            console.error(err);
            alert("There was an error saving the post.");
        }
    };

    return (
        <DialogLayout open>
            <PostForm
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