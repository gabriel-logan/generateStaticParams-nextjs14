import Link from "next/link";

import type { Post } from "@/types/PostProps";

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  ).then((res) => res.json());

  return posts.map((post) => ({
    postId: post.id.toString(),
  }));
}

export default async function PostIdPage({
  params,
}: {
  params: { postId: string };
}) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  );

  const post: Post = await response.json();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-1/2 rounded bg-white p-10 shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
      </div>
      <Link className="mt-4 text-black hover:text-blue-500" href="/posts">
        Go Back
      </Link>
    </div>
  );
}
