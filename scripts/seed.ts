import { prisma } from "../src/lib/db"

async function main() {
  console.log("🔄 Clearing existing posts...")
  await prisma.post.deleteMany()

  console.log("🌱 Seeding new posts...")
  const result = await prisma.post.createMany({
    data: [
      {
        content: "Hello world from seed script 🎉",
        mediaUrl: null
      },
      {
        content: "This is a seeded image post 📷",
        mediaUrl: "/uploads/sample-photo.jpg"
      },
      {
        content: "Testing video rendering 🎥",
        mediaUrl: "/uploads/sample-video.mp4"
      },
      {
        content: "This is an update!!",
        mediaUrl: null
      },
    ]
  })

  console.log(`✅ Seeded ${result.count} posts.`)
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("❌ Error seeding:", e)
    process.exit(1)
  })