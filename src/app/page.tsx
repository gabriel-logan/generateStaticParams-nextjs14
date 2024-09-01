import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6 sm:p-24">
      <div className="z-10 flex w-full max-w-5xl flex-col items-center justify-between rounded-lg bg-white p-1 py-8 font-mono text-sm shadow-lg sm:p-8">
        <h1 className="mb-4 text-3xl font-bold text-blue-800 sm:text-4xl">
          Hello World
        </h1>
        <div className="flex h-12 w-full items-center justify-center rounded-lg border-2 border-blue-800 bg-blue-600 transition duration-300 hover:bg-blue-700 active:bg-blue-300 sm:w-40">
          <Link className="text-lg font-semibold text-white" href="/posts">
            See posts
          </Link>
        </div>
        <p className="mt-5 text-black">
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
