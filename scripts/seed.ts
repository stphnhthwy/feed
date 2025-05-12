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
        { url: "/uploads/sample-video-1.mp4", type: "video", orientation: "portrait" },
      ],
    },
    {
      content: "This is a three images post 📷",
      media: [
        { url: "/uploads/sample-photo-4.jpg", type: "image", orientation: "landscape" },
        { url: "/uploads/sample-photo-7.jpg", type: "image", orientation: "portrait" },
        { url: "/uploads/sample-photo-1.jpg", type: "image", orientation: "landscape" },
      ],
    },
    {
      content: "This is a single image post 📷",
      media: [
        { url: "/uploads/sample-photo-2.jpg", type: "image", orientation: "landscape" },
      ],
    },
    {
      content: "Testing an item without any video or image attached!",
      media: [],
    },
    // 15 new random posts
    {
      content: "What a beautiful sunset! 🌅",
      media: [
        { url: "/uploads/sample-photo-3.jpg", type: "image", orientation: "landscape" },
      ],
    },
    {
      content: "Throwback to the trip 🧳",
      media: [
        { url: "/uploads/sample-photo-1.jpg", type: "image", orientation: "portrait" },
        { url: "/uploads/sample-photo-2.jpg", type: "image", orientation: "landscape" },
      ],
    },
    {
      content: "Video memory from last night 🎬",
      media: [
        { url: "/uploads/sample-video-2.mov", type: "video", orientation: "portrait" },
      ],
    },
    {
      content: "Feeling grateful today 🙏",
      media: [],
    },
    {
      content: "Nature walk with the crew 🌲",
      media: [
        { url: "/uploads/sample-photo-5.jpg", type: "image", orientation: "landscape" },
        { url: "/uploads/sample-photo-6.jpg", type: "image", orientation: "portrait" },
      ],
    },
    {
      content: "Captured this moment by chance 📸",
      media: [
        { url: "/uploads/sample-photo-7.jpg", type: "image", orientation: "landscape" },
      ],
    },
    {
      content: "No media here, just thoughts ✨",
      media: [],
    },
    {
      content: "Just a lil check-in post ✅",
      media: [],
    },
    {
      content: "This post has three photos",
      media: [
        { url: "/uploads/sample-photo-3.jpg", type: "image", orientation: "landscape" },
        { url: "/uploads/sample-photo-1.jpg", type: "image", orientation: "landscape" },
        { url: "/uploads/sample-photo-2.jpg", type: "image", orientation: "landscape" },
      ],
    },
    {
      content: "Latest snapshot from the gallery 🖼️",
      media: [
        { url: "/uploads/sample-photo-4.jpg", type: "image", orientation: "landscape" },
      ],
    },
    {
      content: "Can't stop replaying this video 🔁",
      media: [
        { url: "/uploads/sample-video-1.mp4", type: "video", orientation: "portrait" },
      ],
    },
    {
      content: "More snapshots incoming...",
      media: [
        { url: "/uploads/sample-photo-6.jpg", type: "image", orientation: "portrait" },
        { url: "/uploads/sample-photo-5.jpg", type: "image", orientation: "landscape" },
      ],
    },
    {
      content: "Silence speaks volumes 🕊️",
      media: [],
    },
    {
      content: "Captured in the moment 📷",
      media: [
        { url: "/uploads/sample-photo-2.jpg", type: "image", orientation: "landscape" },
        { url: "/uploads/sample-photo-7.jpg", type: "image", orientation: "portrait" },
      ],
    },
    {
      content: "Another cool video post 🎞️",
      media: [
        { url: "/uploads/sample-video-2.mov", type: "video", orientation: "portrait" },
      ],
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