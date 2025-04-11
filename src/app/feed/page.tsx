import { prisma } from "@/lib/db";

export default async function FeedPage() {
    const posts = await prisma.post.findMany({
        orderBy: { createdAt: "desc"}
    })

    return (
        <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "2rem", borderBottom: "1px solid #ddd", paddingBottom: "1rem" }}>
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
          </div>
        ))}
      </div>
    )
}