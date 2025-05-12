"use client"

import { useState } from "react"
import { VStack, HStack } from "../../../utilities/Stack"
import { Button, DialogLayout, IconButton, TextArea } from "../subframe/ui"
import { FeatherX } from "@subframe/core";
import MediaUpload from "../utilities/MediaUpload";
import { MediaItem, PostFormData } from "@/types/Post";

type PostProps = {
    mode: "new" | "edit";
    header?: string;
    placeholder: string;
    content: string;
    onChangeContent: (value: string) => void;
    onSubmit: () => void;
    onCancel?: () => void;
    media: MediaItem[];
    setMedia: React.Dispatch<React.SetStateAction<MediaItem[]>>;
};

export default function PostForm({
    mode,
    header,
    placeholder,
    content,
    onChangeContent,
    onSubmit,
    onCancel,
    media,
    setMedia,
}: PostProps) {
    return (
        <VStack className="w-[700px] rounded-md bg-white">
            <VStack className="p-4 gap-4">
                <HStack className="w-full justify-between">
                    <h2>{header}</h2>
                    <IconButton icon={<FeatherX />} onClick={onCancel} />
                </HStack>
                <VStack className="w-full">
                    <TextArea error={false} variant="outline" label="" helpText="">
                        <TextArea.Input
                            className="h-auto min-h-[208px] max-h-[640px] resize-none"
                            value={content}
                            onChange={(e) => {
                                onChangeContent(e.target.value);
                                e.target.style.height = "auto";
                                e.target.style.height = `${e.target.scrollHeight}px`;
                            }}
                            placeholder={placeholder}
                        />
                    </TextArea>
                </VStack>
                <HStack className="w-full justify-between">
                    <MediaUpload media={media} setMedia={setMedia} />
                    <HStack className="gap-2 justify-end">
                        {onCancel && (
                            <Button variant="neutral-secondary" onClick={onCancel}>
                                Cancel
                            </Button>
                        )}
                        <Button disabled={!content.trim() && media.length === 0} onClick={onSubmit}>
                            {mode === "edit" ? "Update" : "Post"}
                        </Button>
                    </HStack>
                </HStack>
            </VStack>
        </VStack>
    );
}

//
// 🧪 Preview Component — Test inside any /sandbox page
//

export function PostComponentPreview() {
    const mode: "new" | "edit" = "edit";
    const [content, setContent] = useState("");
    const [media, setMedia] = useState<MediaItem[]>([]);

    const handleSubmit = () => {
        const payload: PostFormData = { content, media };
        console.log("Submit:", payload);
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
                onCancel={() => console.log("Cancel")}
            />
        </DialogLayout>
    );
}