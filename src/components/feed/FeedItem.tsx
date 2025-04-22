'use client'

import { useState } from "react";
import PostModal from "@/components/post/PostModal";
import PostMediaCarousel from "@/components/utilities/MediaCarousel";

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
            <button onClick={() => onEdit(post)}>Edit</button>
            <button onClick={onDelete} style={{ marginLeft: "1rem" }}>Delete</button>
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