import { prisma } from "@/lib/db"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.post.delete({
      where: { id: params.id },
    })
    return new Response(null, { status: 204 })
  } catch (error) {
    console.error("DELETE error:", error)
    return new Response("Post not found", { status: 404 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()

    const updatedPost = await prisma.post.update({
      where: { id: params.id },
      data: {
        content: body.content,
        mediaUrl: body.mediaUrl ?? null,
      },
    })

    return Response.json(updatedPost)
  } catch (error) {
    console.error("PATCH error:", error)
    return new Response("Failed to update post", { status: 500 })
  }
}