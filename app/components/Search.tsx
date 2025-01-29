"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { SearchIcon, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

interface Post {
  slug: string
  title: string
  date: string
  description: string
}

export default function Search({ posts }: { posts: Post[] }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<Post[]>([])
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const results = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setSearchResults(results)
  }, [searchTerm, posts])

  const handleClear = () => {
    setSearchTerm("")
    inputRef.current?.focus()
  }

  return (
    <div className="relative mb-8">
      <div
        className={`relative flex items-center transition-all duration-300 ${isFocused ? "ring-2 ring-blue-500" : "ring-1 ring-gray-200"} rounded-lg`}
      >
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full pl-10 pr-10 py-3 bg-transparent border-none rounded-lg focus:outline-none"
          aria-label="Search blog posts"
        />
        <AnimatePresence>
          {searchTerm && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            {searchResults.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {searchResults.map((post) => (
                  <motion.li
                    key={post.slug}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block p-4 hover:bg-gray-50 transition duration-150 ease-in-out"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{post.title}</h3>
                      <p className="text-sm text-gray-600">{post.description}</p>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="p-4 text-gray-500">No results found.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

