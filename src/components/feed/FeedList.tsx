'use client'

import { useState } from "react"
import { FeedContainer } from "../subframe/ui/components/FeedContainer"
import FeedItem from "./FeedItem"

export default function FeedList({ posts, editable }: { posts: any[], editable: boolean }) {
  const [showModal, setShowModal] = useState(false)
  const [selectedPost, setSelectedPost] = useState<any | null>(null)

  async function handleDelete(postId: string) {
    const res = await fetch(`/api/posts/${postId}`, { method: "DELETE" })
    if (res.ok) {
      window.location.reload() // simple reload to refresh the feed
    } else {
      alert("Failed to delete post")
    }
  }

  return (
    <FeedContainer
      className="w-full max-w-[672px] h-dvh overflow-y-auto"
      content={
        <>
          {posts.map((post) => (
            <FeedItem
              key={post.id}
              post={post}
              editable={editable}
              onEdit={() => {
                setSelectedPost(post)
                setShowModal(true)
              }}
              onDelete={() => handleDelete(post.id)}
            />
          ))}
        </>
      }
    />
  )
}