import { useState } from "react"
import PostFormModal from "./PostFormModal"
import PostBlock from "./PostBlock"

export default function FeedPageContent({ posts, editable }: { posts: any[], editable: boolean }) {
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
    <div
      className="
        flex-col 
        bg-default-background
        border 
        border-brand-100
        w-[600px] 
        mx-auto
        rounded-lg
      "
    >

      {posts.map((post) => (
        <PostBlock
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

      {showModal && selectedPost && (
        <PostFormModal post={selectedPost} onClose={() => {
          setShowModal(false)
          setSelectedPost(null)
        }} />
      )}
    </div>
  )
}