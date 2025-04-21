"use client";

import { useState, useRef } from "react";
import { HStack, ZStack } from "../../../utilities/Stack";
import { IconButton } from "../subframe/ui";
import { FeatherImagePlus, FeatherX } from "@subframe/core";

type UploadState = "pending" | "success" | "error";

type LocalMedia = {
    file: File;
    url: string;
    type: "image" | "video";
    status: UploadState;
};

type MediaUploadProps = {
    media: LocalMedia[];
    setMedia: React.Dispatch<React.SetStateAction<LocalMedia[]>>;
};

export default function MediaUpload({ media, setMedia }: MediaUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSelectFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const newMedia: LocalMedia[] = Array.from(files).map((file) => {
            const type = file.type.startsWith("video") ? "video" : "image";
            return {
                file,
                url: URL.createObjectURL(file),
                type,
                status: "pending",
            };
        });

        setMedia((prev) => [...prev, ...newMedia]);
        e.target.value = ""; // Reset file input
    };

    const handleRemove = (index: number) => {
        setMedia((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <>
            <HStack className="gap-2">
                {media.map((item, index) => (
                    <ZStack
                        key={`${item.url}-${index}`}
                        className="relative flex-none w-[32px] h-[32px]"
                    >
                        {item.type === "video" ? (
                            <video src={item.url} className="w-full h-full object-cover rounded-md border border-neutral-200" />
                        ) : (
                            <img src={item.url} className="w-full h-full object-cover rounded-md border border-neutral-200" />
                        )}
                        <IconButton
                            className="absolute -top-2 -right-2 z-10"
                            size="small"
                            variant="neutral-secondary"
                            icon={<FeatherX />}
                            onClick={() => handleRemove(index)}
                        />
                    </ZStack>
                ))}

                {/* Upload Trigger */}
                <IconButton
                    variant="neutral-secondary"
                    icon={<FeatherImagePlus />}
                    onClick={() => fileInputRef.current?.click()}
                />
            </HStack>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleSelectFiles}
                className="hidden"
            />
        </>
    );
}

//
// 🧪 Preview Component — Test inside any /sandbox page
//

export function MediaUploadPreview() {
    const [media, setMedia] = useState<LocalMedia[]>([]);

    return <MediaUpload media={media} setMedia={setMedia} />;
}

