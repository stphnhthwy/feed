'use client'

import { useEditMode } from "@/lib/editMode"
import { useState } from "react"
import PostFormModal from "@/components/PostFormModal"
import FeedPageContent from "@/components/FeedPageContent"

export default function FeedWrapper({ posts }: { posts: any[] }) {
  const [editMode, setEditMode] = useEditMode()
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button onClick={() => setEditMode(!editMode)} style={{ margin: "1rem" }}>
        {editMode ? "Switch to Public View" : "Switch to Edit Mode"}
      </button>

      {editMode && (
        <>
          <button onClick={() => setShowModal(true)} style={{ margin: "1rem" }}>
            New Post
          </button>
          {showModal && <PostFormModal onClose={() => setShowModal(false)} />}
        </>
      )}

      <FeedPageContent posts={posts} editable={editMode} />
    </div>
  )
}