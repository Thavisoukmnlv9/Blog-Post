import Link from "next/link"

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">404 - Page Not Found</h2>
      <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Go back to the homepage
      </Link>
    </div>
  )
}

