'use client'

import { useState } from "react"
import { fetchPosts } from "@/lib/postApi"
import { useEditMode } from "@/lib/editMode"
import PostModal from "../post/PostModal"
import ToolBar from "./ToolBar"
import FeedList from "@/components/feed/FeedList"

export default function Feed({ posts }: { posts: any[] }) {
  const [postList, setPostList] = useState(posts);
  const [editMode, setEditMode] = useEditMode()
  const [modalState, setModalState] = useState<{
    mode: "new" | "edit";
    post?: any;
  } | null>(null);

  return (
    <div>
      <div className="flex flex-col items-center bg-neutral-100 py-4 h-screen overflow-hidden">
        <FeedList posts={postList} editable={editMode} />
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
            onClose={() => {
              setModalState(null);
              fetchPosts().then(setPostList).catch(console.error)
                .then(res => res.json())
                .then(data => {
                  const sorted = data.sort(
                    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                  );
                  setPostList(sorted);
                });
            }}
          />
        )}
      </div>
    </div>
  )
}