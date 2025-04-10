// app/api/posts/route.ts
import { prisma } from "@/lib/db"

export async function GET() {
  const posts = await prisma.post.findMany()
  return Response.json(posts)
}

export async function POST(req: Request) {
  const body = await req.json()
  const post = await prisma.post.create({
    data: {
      content: body.content,
      mediaUrl: body.mediaUrl ?? null
    }
  })
  return Response.json(post)
}