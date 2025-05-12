'use client'

import { DialogLayout } from "../subframe/ui";
import PostForm from "./PostForm";
import { usePostMutation } from "@/hooks/usePostMutation";
import { usePostFormState } from "@/hooks/usePostFormState";
import { usePostList } from "@/hooks/usePostList";
import { Post } from "@/types/Post";

type PostModalProps = {
    mode: "new" | "edit";
    post?: Post;
    onClose: () => void;
    onPostCreated?: (newPost: Post) => void;
    onPostUpdated?: (updatedPost: Post) => void;
};

export default function PostModal({ mode, post, onClose, onPostCreated, onPostUpdated }: PostModalProps) {
    const {
        content,
        setContent,
        media,
        setMedia,
        isValid,
        getPayload,
    } = usePostFormState({
        content: post?.content,
        media: post?.media,
    });

    const { create, update, isLoading, error } = usePostMutation();

    const handleSubmit = async () => {
        const payload = getPayload();
        console.log("Submitting post:", payload);

        try {
            if (mode === "edit" && post?.id) {
                const updatedPost = await update(post.id, payload);
                onPostUpdated?.(updatedPost); // ✅ now this actually runs
            } else {
                const newPost = await create(payload);
                console.log("Post created:", newPost);
                onPostCreated?.(newPost);
            }
        } catch (err) {
            console.error("Post submission error:", err);
        } finally {
            onClose();
        }
    };

    return (
        <DialogLayout open>
            <PostForm
                mode={mode}
                header={mode === "edit" ? "Edit post" : "New post"}
                placeholder="What's on your mind?"
                content={content}
                onChangeContent={setContent}
                media={media}
                setMedia={setMedia}
                onSubmit={handleSubmit}
                onCancel={onClose}
            />
        </DialogLayout>
    );
}