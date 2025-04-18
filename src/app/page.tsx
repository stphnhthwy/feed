import { prisma } from "@/lib/db"
import FeedWrapper from "@/components/FeedWrapper"

export default async function HomePage() {

  const posts = await prisma.post.findMany({
    include: {
      media: true,
    },
    orderBy: { createdAt: "desc" }
  })

  return <FeedWrapper posts={posts} />
}