import { getPostData, getSortedPostsData } from "@/lib/api"
import Link from "next/link"
import BlogNavigation from "@/app/components/BlogNavigation"

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug)

  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center text-sm">
          <Link href="/" className="text-blue-600 hover:underline">
            BLOG
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{postData.title}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">{postData.title}</h1>
        <time className="text-gray-500 block">{postData.date}</time>
      </div>

      <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

      <BlogNavigation previousPost={postData.previousPost} nextPost={postData.nextPost} />
    </article>
  )
}

