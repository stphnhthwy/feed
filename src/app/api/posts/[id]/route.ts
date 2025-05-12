import { prisma } from "@/lib/db";

interface Params {
  params: { id: string };
}

// --- PATCH: Update a specific post ---
export async function PATCH(req: Request, { params }: Params) {
  const body = await req.json();
  const { content, media = [] } = body;

  const updatedPost = await prisma.post.update({
    where: { id: params.id },
    data: {
      content,
      media: {
        deleteMany: {}, // Optional: clear old media
        create: media.map((item: { url: string; type: string; orientation: string | null }) => ({
          url: item.url,
          type: item.type,
          orientation: item.orientation,
        })),
      },
    },
    include: { media: true },
  });

  return Response.json(updatedPost);
}

// --- DELETE: Delete a specific post ---
export async function DELETE(req: Request, { params }: Params) {
  await prisma.media.deleteMany({
    where: { postId: params.id },
  });

  await prisma.post.delete({
    where: { id: params.id },
  });

  return new Response(null, { status: 204 });
}