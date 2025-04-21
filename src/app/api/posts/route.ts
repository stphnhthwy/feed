// app/api/posts/route.ts
import { prisma } from "@/lib/db"

export async function GET() {
  const posts = await prisma.post.findMany()
  return Response.json(posts)
}

export async function POST(req: Request) {
  const body = await req.json()
  const { content, mediaUrl, orientation } = body

  const post = await prisma.post.create({
    data: {
      content,
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
}

//Future problem

// export async function POST(req: Request) {
//   const body = await req.json();
//   const { content, media = [] } = body; // media: { url, type, orientation }[]

//   const post = await prisma.post.create({
//     data: {
//       content,
//       media: {
//         create: media.map((item: { url: string; type: string; orientation: string | null }) => ({
//           url: item.url,
//           type: item.type,
//           orientation: item.orientation,
//         })),
//       },
//     },
//   });

//   return Response.json(post);
// }