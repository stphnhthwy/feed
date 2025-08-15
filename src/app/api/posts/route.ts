// app/api/posts/route.ts
import { prisma } from "@/lib/db"
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0"

export async function GET() {
  const posts = await prisma.post.findMany()
  return Response.json(posts)
}

export const POST = withApiAuthRequired(async (req: Request) => {
  const { user } = await getSession(req, new Response())
  const body = await req.json()
  const { content, mediaUrl, orientation } = body

  const post = await prisma.post.create({
    data: {
      content,
      userId: user?.sub ?? null,
      media: mediaUrl
        ? {
            create: {
              url: mediaUrl,
              type: mediaUrl.endsWith(".mp4") ? "video" : "image",
              orientation,
            },
          }
        : undefined,
    },
  })

  return Response.json(post)
})