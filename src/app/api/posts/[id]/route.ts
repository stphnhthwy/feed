import { prisma } from "@/lib/db"
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0"

export const DELETE = withApiAuthRequired(async (request: Request, { params }: { params: { id: string } }) => {
  try {
    const { user } = await getSession(request, new Response())
    const post = await prisma.post.findUnique({ where: { id: params.id } })
    if (!post || post.userId !== user?.sub) {
      return new Response("Forbidden", { status: 403 })
    }
    await prisma.post.delete({
      where: { id: params.id },
    })
    return new Response(null, { status: 204 })
  } catch (error) {
    console.error("DELETE error:", error)
    return new Response("Post not found", { status: 404 })
  }
})

export const PATCH = withApiAuthRequired(async (request: Request, { params }: { params: { id: string } }) => {
  try {
    const { user } = await getSession(request, new Response())
    const existing = await prisma.post.findUnique({ where: { id: params.id } })
    if (!existing || existing.userId !== user?.sub) {
      return new Response("Forbidden", { status: 403 })
    }
    const body = await request.json()

    const updatedPost = await prisma.post.update({
      where: { id: params.id },
      data: {
        content: body.content,
        media: body.mediaUrl
          ? {
              upsert: {
                create: {
                  url: body.mediaUrl,
                  type: body.mediaUrl.endsWith(".mp4") ? "video" : "image",
                  orientation: body.orientation ?? null,
                },
                update: {
                  url: body.mediaUrl,
                  type: body.mediaUrl.endsWith(".mp4") ? "video" : "image",
                  orientation: body.orientation ?? null,
                },
              },
            }
          : undefined,
      },
      include: { media: true }
    })

    return Response.json(updatedPost)
  } catch (error) {
    console.error("PATCH error:", error)
    return new Response("Failed to update post", { status: 500 })
  }
})