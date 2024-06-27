import Link from "next/link";

export default function Home() {
  const todayDate = Date.now().toString();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-2xl font-bold text-blue-600">
          Hello World {todayDate}
        </h1>
        <Link className="hover:text-blue-600" href="/posts">
          See posts {todayDate}
        </Link>
      </div>
    </main>
  );
}
