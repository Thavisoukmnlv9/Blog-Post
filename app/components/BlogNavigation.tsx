"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface NavigationPost {
  slug: string
  title: string
}

interface BlogNavigationProps {
  previousPost?: NavigationPost
  nextPost?: NavigationPost
}

export default function BlogNavigation({ previousPost, nextPost }: BlogNavigationProps) {
  return (
    <nav className="mt-8 grid grid-cols-2 gap-4 rounded-lg bg-gray-50/50 p-4">
      {previousPost ? (
        <Link
          href={`/blog/${previousPost.slug}`}
          className="group flex items-center space-x-2 text-left transition-colors hover:text-blue-600"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <div>
            <div className="text-sm text-gray-500">PREVIOUS</div>
            <div className="text-base font-medium">{previousPost.title}</div>
          </div>
        </Link>
      ) : (
        <div /> // Empty div for grid alignment when no previous post
      )}

      {nextPost ? (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="group flex items-center justify-end space-x-2 text-right transition-colors hover:text-blue-600"
        >
          <div>
            <div className="text-sm text-gray-500">NEXT</div>
            <div className="text-base font-medium">{nextPost.title}</div>
          </div>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <div /> // Empty div for grid alignment when no next post
      )}
    </nav>
  )
}

