'use client'

import { useState } from "react";
import PostModal from "@/components/post/PostModal";
import PostMediaCarousel from "@/components/utilities/MediaCarousel";
import { usePostMutation } from "@/hooks/usePostMutation";

export default function FeedItem({
  post,
  editable,
  onEdit,
  onDelete,
}: {
  post: any,
  editable: boolean,
  onEdit: (post: any) => void,
  onDelete: () => void,
}) {
  const [showModal, setShowModal] = useState(false);
  const { update, remove, isLoading } = usePostMutation();

  const handleUpdate = async (updatedContent: string, updatedMedia: MediaItem[]) => {
    try {
      const payload = {
        content: updatedContent,
        media: updatedMedia,
      };

      await update(post.id, payload);
      console.log("Post updated successfully");
    } catch (err) {
      console.error("Failed to update post:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await remove(post.id);     // use your mutation hook
      onDelete();                // notify parent to remove it from UI
    } catch (err) {
      console.error("Failed to delete post:", err);
    }
  };

  return (
    <div className="py-12 border-b border-neutral-100 w-full">
      <div className="px-4">
        <p>{post.content}</p>
      </div>
      <div className="m-4">
        {post.media?.length > 0 && (
          <PostMediaCarousel media={post.media} />
        )}

        {editable && (
          <div style={{ marginTop: "1rem" }}>
            <button onClick={() => setShowModal(true)}>Edit</button>
            <button onClick={handleDelete} style={{ marginLeft: "1rem" }} disabled={isLoading}>
              {isLoading ? "Deleting..." : "Delete"}
            </button>
          </div>
        )}

        {showModal && (
          <PostModal
            mode="edit"
            post={post}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}