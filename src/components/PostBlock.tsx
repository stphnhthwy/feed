'use client'

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
    <div style={{ marginBottom: "2rem", borderBottom: "1px solid #ddd", paddingBottom: "1rem" }}>
      <p>{post.content}</p>

      {post.mediaUrl && (
        post.mediaUrl.endsWith(".mp4") ? (
          <video controls style={{ width: "100%", marginTop: "1rem" }}>
            <source src={post.mediaUrl} type="video/mp4" />
          </video>
        ) : (
          <img src={post.mediaUrl} alt="Post media" style={{ width: "100%", marginTop: "1rem" }} />
        )
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