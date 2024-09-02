import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6 sm:p-24">
      <div className="z-10 flex w-full max-w-5xl flex-col items-center justify-between rounded-lg bg-white py-8 font-mono text-sm shadow-lg sm:p-8">
        <h1 className="mb-4 text-center text-3xl font-bold text-blue-800 sm:text-4xl">
          Hello World
        </h1>
        <Link
          className="mb-6 flex h-12 w-5/6 items-center justify-center rounded-lg border-2 border-blue-800 bg-blue-600 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700 active:bg-blue-300 sm:w-40"
          href="/posts"
        >
          See posts
        </Link>
        <Link
          className="mb-2 text-black hover:underline"
          target="_blank"
          href="https://github.com/gabriel-logan/generateStaticParams-nextjs14"
        >
          Back to github
        </Link>
        <p className="mb-5 mt-5 rounded bg-gray-100 p-4 text-center text-lg text-black">
          Created by{" "}
          <Link
            href="https://github.com/gabriel-logan"
            className="text-blue-500 hover:underline"
          >
            Gabriel Logan
          </Link>
        </p>
        <p className="mx-2 mt-7 text-center text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          fringilla, elit id lacinia fermentum, felis libero tristique metus,
          nec fermentum enim nunc sit amet libero. Integer auctor, nunc non
          fermentum ultricies, nunc eros ultricies quam, nec fermentum enim nunc
          sit amet libero. Integer auctor, nunc non fermentum ultricies, nunc
          eros ultricies quam.
        </p>
      </div>
    </main>
  );
}
