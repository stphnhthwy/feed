'use client'

import { useState } from "react"

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
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
      display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <form onSubmit={handleSubmit} style={{
        background: "#fff", padding: "2rem", borderRadius: "8px", width: "100%", maxWidth: "500px"
      }}>
        <h2>{post ? "Edit Post" : "Create a Post"}</h2>
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          style={{ marginBottom: "1rem" }}
        />
        {post?.mediaUrl && !file && (
          <div style={{ marginBottom: "1rem", fontSize: "0.875rem", color: "#666" }}>
            Current file: {post.mediaUrl}
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit" disabled={isDisabled}>
            {post ? "Update" : "Post"}
          </button>
        </div>
      </form>
    </div>
  )
}