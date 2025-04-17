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
    <div className="mb-8">
      <p>{post.content}</p>

      {post.media?.length > 0 && (
        <PostMediaCarousel
          mediaUrls={post.media.map((m) => m.url)} />
      )}

      {editable && (
        <div style={{ marginTop: "1rem" }}>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete} style={{ marginLeft: "1rem" }}>Delete</button>
        </div>
      )}
    </div>
  )
}