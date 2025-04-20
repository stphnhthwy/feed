'use client'

import PostMediaCarousel from "@/components/shared/PostMediaCarousel";

export default function PostBlock({
  post,
  editable,
  onEdit,
  onDelete,
}: {
  post: any,
  editable: boolean,
  onEdit: () => void,
  onDelete: () => void,
}) {
  return (
    <div className="py-12 border-b border-neutral-100 w-full">
      <div className="px-4">
        <p>{post.content}</p>
      </div>
      <div className="m-4">
        {post.media?.length > 0 && (
          <PostMediaCarousel
            media={post.media}
          />
        )}

        {editable && (
          <div style={{ marginTop: "1rem" }}>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete} style={{ marginLeft: "1rem" }}>Delete</button>
          </div>
        )}

      </div>
    </div>
  )
}