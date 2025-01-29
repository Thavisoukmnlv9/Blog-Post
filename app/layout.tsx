import "./globals.css"
import "./prism-plus.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Programming Blog",
  description: "A blog about programming and web development",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
            <div className="flex items-center space-x-8 ">
              <Link href="/" className="flex items-center space-x-3 rounded-lg">
                <div className="w-10 h-8 rounded-lg bg-blue-600 flex items-center justify-center rounded-lg">
                  <span className="text-white font-semibold ">Pern</span>
                </div>
                <span className="font-semibold">Programming Blog</span>
              </Link>
            </div>
            <nav className="flex items-center space-x-8">
              <Link href="/" className="text-sm text-blue-600">
                BLOG
              </Link>
              <Link href="/about-me" className="text-sm text-blue-600">
                ABOUT ME
              </Link>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}

