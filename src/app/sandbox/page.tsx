// src/app/sandbox/page.tsx
"use client"

import { PostComponentPreview } from "@/components/post/PostComponent"

export default function SandboxPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-100">
            {/* Drop any component here to preview it */}
            <PostComponentPreview />
            {/* <ToolBar /> */}
        </div>
    )
}