import { prisma } from "@/lib/db"
import Feed from "@/components/feed/Feed"

export default async function HomePage() {

  const posts = await prisma.post.findMany({
    include: {
      media: true,
    },
    orderBy: { createdAt: "desc" }
  })

  return <Feed posts={posts} />
}