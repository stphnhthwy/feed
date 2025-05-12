// 'use client'

// import { useState } from "react"
// import { FeedContainer } from "../subframe/ui/components/FeedContainer"
// import { deletePost } from "@/lib/postApi"
// import FeedItem from "./FeedItem"

// export default function FeedList({ posts, editable }: { posts: any[], editable: boolean }) {
//   const [showModal, setShowModal] = useState(false)
//   const [selectedPost, setSelectedPost] = useState<any | null>(null)

//   async function handleDelete(postId: string) {
//     const res = await deletePost(postId)
//     if (res.ok) {
//       window.location.reload()
//     } else {
//       alert("Failed to delete post")
//     }
//   }

//   return (
//     <FeedContainer
//       className="w-full max-w-[672px] h-dvh overflow-y-auto"
//       content={
//         <>
//           {posts.map((post) => (
//             <FeedItem
//               key={post.id}
//               post={post}
//               editable={editable}
//               onEdit={() => {
//                 setSelectedPost(post)
//                 setShowModal(true)
//               }}
//               onDelete={() => handleDelete(post.id)}
//             />
//           ))}
//         </>
//       }
//     />
//   )
// }


'use client'

import { FeedContainer } from "../subframe/ui/components/FeedContainer"
import FeedItem from "./FeedItem"
import { Post } from "@/types/Post"

type FeedListProps = {
  posts: Post[];
  editable: boolean;
  onDelete?: (id: string) => void;
};

export default function FeedList({ posts, editable, onDelete }: FeedListProps) {
  return (
    <FeedContainer
      className="w-full max-w-[672px] h-dvh overflow-y-auto"
      content={
        <>
          {posts.map((post) => (
            <FeedItem
              key={post.id}
              post={post}
              editable={editable}
              onEdit={() => {
                /* You can still handle onEdit here or lift it up later */
              }}
              onDelete={onDelete ? () => onDelete(post.id) : undefined}
            />
          ))}
        </>
      }
    />
  )
}