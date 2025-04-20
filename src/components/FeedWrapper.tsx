'use client'

import { useEditMode } from "@/lib/editMode"
import { useState } from "react"
import { Button } from "@/ui/components/Button"
import { DialogLayout } from "./subframe/ui"
import PostFormModal from "@/components/PostFormModal"
import FeedPageContent2 from "@/components/FeedPageContent2"
import DSNavigation from "./shared/DSNavigation"
import ToolBar from "./shared/ToolBar"
import Post from "@/components/shared/Post"

export default function FeedWrapper({ posts }: { posts: any[] }) {
  const [editMode, setEditMode] = useEditMode()
  const [showModal, setShowModal] = useState(false)
  const mode: "new" | "edit" = "new";

  return (
    <div>
      <div className="flex flex-col items-center bg-neutral-100 py-4 h-screen overflow-hidden">
        <FeedPageContent2 posts={posts} editable={editMode} />
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <ToolBar
          editMode={editMode}
          onToggleEditMode={() => setEditMode(!editMode)}
          onNewPostClick={() => setShowModal(true)}
        />
        {showModal && (
          // <PostFormModal onClose={() => setShowModal(false)} />
          <DialogLayout open>
            <Post
              mode={mode}
              header={mode === "edit" ? "Edit post" : "New post"}
              placeholder="Whats on your mind?"
              content=""
              onSubmit={(c) => console.log("Submit:", c)}
              onCancel={() => setShowModal(false)}
            />
          </DialogLayout>
        )}
      </div>
    </div>
  )
}