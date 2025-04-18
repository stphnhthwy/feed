'use client'

import { useEditMode } from "@/lib/editMode"
import { useState } from "react"
import { Button } from "@/ui/components/Button"
import { DialogLayout } from "./subframe/ui"
import PostFormModal from "@/components/PostFormModal"
import FeedPageContent from "@/components/FeedPageContent"

export default function FeedWrapper({ posts }: { posts: any[] }) {
  const [editMode, setEditMode] = useEditMode()
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Button
        variant="neutral-secondary"
        onClick={() => setEditMode(!editMode)} style={{ margin: "1rem" }}>
        {editMode ? "Public View" : "Edit Mode"}
      </Button>

      {editMode && (
        <>
          <Button
            onClick={() => setShowModal(true)} style={{ margin: "1rem" }}>
            Post
          </Button>
          <DialogLayout open={showModal} onOpenChange={setShowModal}>
            <PostFormModal onClose={() => setShowModal(false)} />
          </DialogLayout>
        </>
      )}

      <FeedPageContent posts={posts} editable={editMode} />
    </div>
  )
}