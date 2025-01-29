import { getSortedPostsData } from "@/lib/api"
import Link from "next/link"
import Search from "./components/Search"

export default function Home() {
  const allPostsData = getSortedPostsData()
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Programming Blog</h1>
        <p className="text-gray-600 text-lg">
          Your source for the latest programming tutorials, tips, and best practices. Stay up to date with developments
          in web development, software engineering, and programming languages.
        </p>
      </div>

      <Search posts={allPostsData} />

      <div className="grid grid-cols-1 gap-4">
        {allPostsData.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 rounded-xl border hover:border-blue-600 transition-colors bg-white shadow-sm hover:shadow-md"
          >
            <article>
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">{post.title}</h2>
              <time className="text-sm text-gray-500 mb-3 block">{post.date}</time>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="text-blue-600 hover:underline inline-flex items-center">
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

