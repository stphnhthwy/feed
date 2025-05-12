'use client'

import { useState } from "react"
import { useEditMode } from "@/lib/editMode"
import { usePostList } from "@/hooks/usePostList"
import PostModal from "../post/PostModal"
import ToolBar from "../toolbar/ToolBar"
import FeedList from "@/components/feed/FeedList"

export default function Feed() {
  const {
    posts,
    isLoading,
    error,
    addPost,
    removePost,
    refetch,
  } = usePostList()

  const [editMode, setEditMode] = useEditMode()
  const [modalState, setModalState] = useState<{
    mode: "new" | "edit";
    post?: any;
  } | null>(null)

  return (
    <div>
      <div className="flex flex-col items-center bg-neutral-100 py-4 h-screen overflow-hidden">
        {isLoading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        <FeedList posts={posts} editable={editMode} onDelete={removePost} />
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <ToolBar
          editMode={editMode}
          onToggleEditMode={() => setEditMode(!editMode)}
          onNewPostClick={() => setModalState({ mode: "new" })}
        />

        {modalState && (
          <PostModal
            mode={modalState.mode}
            post={modalState.post}
            onClose={() => setModalState(null)}
            onPostCreated={(newPost) => addPost(newPost)}
          />
        )}
      </div>
    </div>
  )
}