import { prisma } from "@/lib/db";

// --- GET: Fetch all posts ---
export async function GET() {
  const posts = await prisma.post.findMany({
    include: { media: true },
  });
  return Response.json(posts);
}

// --- POST: Create a new post ---
export async function POST(req: Request) {
  const body = await req.json();
  const { content, media = [] } = body;

  const post = await prisma.post.create({
    data: {
      content,
      media: {
        create: media.map((item: { url: string; type: string; orientation: string | null }) => ({
          url: item.url,
          type: item.type,
          orientation: item.orientation,
        })),
      },
    },
    include: { media: true },
  });

  return Response.json(post);
}