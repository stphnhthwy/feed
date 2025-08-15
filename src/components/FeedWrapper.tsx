'use client'

import { useEditMode } from "@/lib/editMode"
import { useState } from "react"
import { Button } from "@/ui/components/Button"
import PostFormModal from "@/components/PostFormModal"
import FeedPageContent2 from "@/components/FeedPageContent2"
import ToolBar from "./shared/ToolBar"
import { useUser } from "@auth0/nextjs-auth0/client"

export default function FeedWrapper({ posts }: { posts: any[] }) {
  const [editMode, setEditMode] = useEditMode()
  const [showModal, setShowModal] = useState(false)
  const { user } = useUser()

  return (
    <div>
      <div className="flex justify-end p-4">
        <Button
          onClick={() => {
            window.location.href = user ? "/api/auth/logout" : "/api/auth/login"
          }}
        >
          {user ? "Logout" : "Login"}
        </Button>
      </div>
      <div className="flex flex-col items-center bg-neutral-100 py-4 h-screen overflow-hidden">
        <FeedPageContent2 posts={posts} editable={editMode} />
      </div>
      {user && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <ToolBar
            editMode={editMode}
            onToggleEditMode={() => setEditMode(!editMode)}
            onNewPostClick={() => setShowModal(true)}
          />
          {showModal && (
            <PostFormModal onClose={() => setShowModal(false)} />
          )}
        </div>
      )}
    </div>
  )
}