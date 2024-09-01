import Link from "next/link";

import type { Post } from "@/types/PostProps";

export default async function PostPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts: Post[] = await response.json();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">Post Title</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to home
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <Link
                href={`/posts/${post.id}`}
                key={post.id}
                className="rounded-lg bg-white p-6 shadow transition-transform hover:scale-110 active:scale-100"
              >
                <h2 className="text-lg font-bold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-700">{post.body}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-700">No posts found.</p>
        )}
      </main>
      <footer className="bg-gray-200">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © 2022 Your Website. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
