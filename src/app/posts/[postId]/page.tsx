import Link from "next/link";

import type { Post } from "@/types/PostProps";

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  ).then((res) => res.json());

  return posts.map((post) => {
    return {
      postId: post.id.toString(),
    };
  });
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-2 sm:px-0">
      <div className="w-full rounded bg-white p-10 shadow-lg sm:w-1/2">
        <h1 className="mb-4 text-2xl font-bold text-blue-600 sm:text-3xl">
          {post.title}
        </h1>
        <p className="text-sm text-gray-700 sm:text-base md:text-lg">
          {post.body}
        </p>
      </div>
      <Link className="mt-4 text-black hover:text-blue-500" href="/posts">
        Go Back
      </Link>
    </div>
  );
}
