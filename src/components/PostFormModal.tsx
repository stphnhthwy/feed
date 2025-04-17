'use client'

import { useState } from "react"
import { Button, TextArea, DialogLayout } from "./subframe/ui"

type Post = {
  id: string
  content: string
  mediaUrl?: string | null
}

export default function PostFormModal({
  onClose,
  post
}: {
  onClose: () => void,
  post?: Post
}) {
  const [content, setContent] = useState(post?.content || "")
  const [file, setFile] = useState<File | null>(null)

  const isDisabled = content.trim() === "" && !file && !post?.mediaUrl

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (isDisabled) return

    const mediaUrl = file ? `/uploads/${file.name}` : post?.mediaUrl ?? null

    const endpoint = post ? `/api/posts/${post.id}` : "/api/posts"
    const method = post ? "PATCH" : "POST"

    const res = await fetch(endpoint, {
      method,
      body: JSON.stringify({ content, mediaUrl }),
      headers: { "Content-Type": "application/json" }
    })

    if (res.ok) {
      window.location.reload()
    } else {
      alert("Failed to submit post")
    }
  }

  return (
    <div className="w-full max-w-3xl px-6 py-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
        <h2 className="text-lg font-regular">{post ? "Edit Post" : "Create a Post"}</h2>

        <TextArea error={false} variant="outline" label="" helpText="">
          <TextArea.Input
            className="h-auto min-h-[96px] w-full flex-none"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
          />
        </TextArea>

        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="w-full text-sm text-gray-500"
        />

        {post?.mediaUrl && !file && (
          <div className="text-sm text-gray-500">
            Current file: {post.mediaUrl}
          </div>
        )}

        <div className="flex justify-end gap-2">
          <Button
            variant="neutral-secondary"
            onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={isDisabled}>
            {post ? "Update" : "Post"}
          </Button>
        </div>
      </form>
    </div>
  )
}