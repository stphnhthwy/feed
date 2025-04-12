import { prisma } from "@/lib/db"
import FeedWrapper from "@/components/FeedWrapper"

export default async function FeedPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" }
  })

  return <FeedWrapper posts={posts} />
}