"use client"

import { useState } from "react"
import { VStack, HStack, ZStack } from "../../../utilities/Stack"
import { Button, DialogLayout, IconButton, TextArea } from "../subframe/ui"
import { FeatherX } from "@subframe/core";
import MediaUpload from "../utilities/MediaUpload";

type PostProps = {
    mode: "new" | "edit";
    header?: string;
    placeholder: string;
    content?: string;
    onSubmit: (content: string) => void;
    onCancel?: () => void;
    media: LocalMedia[];
    setMedia: React.Dispatch<React.SetStateAction<LocalMedia[]>>;
};

export default function PostForm({ mode, header, placeholder, content: initialContent, onSubmit, onCancel }: PostProps) {
    const [content, setContent] = useState(initialContent ?? "");
    const [media, setMedia] = useState<LocalMedia[]>([]);

    return (
        <VStack className="w-[700px] rounded-md bg-white">
            <VStack className="p-4 gap-4">
                <HStack className="w-full justify-between">
                    <h2>{header}</h2>
                    <IconButton
                        icon={<FeatherX />}
                        onClick={onCancel}
                    />
                </HStack>
                <VStack className="w-full">
                    <TextArea error={false} variant="outline" label="" helpText="">
                        <TextArea.Input
                            className="h-auto min-h-[256px] max-h-[640px] resize-none"
                            value={content}
                            onChange={(e) => {
                                setContent(e.target.value);
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
                        <Button disabled={!content.trim() && media.length === 0} onClick={() => onSubmit(content)}>
                            {mode === "edit" ? "Update" : "Post"}
                        </Button>
                    </HStack>
                </HStack>
            </VStack>
        </VStack>
    )
}

//
// 🧪 Preview Component — Test inside any /sandbox page
//

export function PostComponentPreview() {
    const mode: "new" | "edit" = "new";
    const [media, setMedia] = useState<LocalMedia[]>([]);

    return (
        <DialogLayout open>
            <PostForm
                mode={mode}
                header={mode === "edit" ? "Edit post" : "New post"}
                placeholder="Whats on your mind?"
                content=""
                onSubmit={(c) => console.log("Submit:", c)}
                onCancel={() => console.log("Cancel")}
                media={media}
                setMedia={setMedia}
            />
        </DialogLayout>
    );
}