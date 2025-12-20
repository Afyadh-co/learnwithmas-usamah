import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <div>
          <div className="flex flex-col items-center gap-5 mb-8">
            <h1 className="text-5xl mb-6 text-center">Welcome to My Website</h1>
            <h2 className="text-2xl">Navigate to Projects</h2>
          </div>
          <div className="flex flex-col items-center  cursor-pointer">
            <ul className="flex flex-col gap-4 mb-8">
              <li>
                <Link href="/learnings/learn1" className="hover:text-blue-300 text-2xl font-bold">Learn 1</Link>
              </li>
              <li>
                <Link href="/learnings/learn2" className="hover:text-blue-300 text-2xl font-bold">Learn 2</Link>
              </li>
              <li>
                <Link href="/project3" className="hover:text-blue-300 text-2xl font-bold">Learn 3</Link>
              </li>
            </ul>
            <h2 className="mb-2 text-2xl">Other Links</h2>
            <Link href="/about" className="text-xl hover:text-blue-300 font-bold">About Page</Link>
          </div>
        </div>
      </div>
    </>
  );
}
