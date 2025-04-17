import { prisma } from "../src/lib/db"

async function main() {
  console.log("🔄 Clearing existing posts...")
  await prisma.media.deleteMany()
  await prisma.post.deleteMany()

  console.log("🌱 Seeding new posts...")

  const posts = [
    {
      content: "Testing video rendering 🎥",
      media: [
        { url: "/uploads/sample-video.mp4", type: "video" },
      ],
    },
    {
      content: "This is a three images post 📷",
      media: [
        { url: "/uploads/sample-photo.jpg", type: "image" },
        { url: "/uploads/sample-photo.jpg", type: "image" },
        { url: "/uploads/sample-photo.jpg", type: "image" },
      ],
    },
    {
      content: "This is a single image post 📷",
      media: [
        { url: "/uploads/sample-photo.jpg", type: "image" },
      ],
    },
    {
      content: "Testing an item without any video or image attached!",
      media: [],
    },
  ]

  for (const post of posts) {
    await prisma.post.create({
      data: {
        content: post.content,
        media: {
          create: post.media,
        },
      },
    })
  }

  console.log(`✅ Seeded ${posts.length} posts.`)
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("❌ Error seeding:", e)
    process.exit(1)
  })