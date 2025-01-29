"use client"

import { motion } from "framer-motion"
import { Facebook, Github, Linkedin, Mail, Phone, X } from "lucide-react"
import Image from "next/image"

export default function AboutMe() {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-5xl w-full relative overflow-hidden"
      >
        <div className="grid md:grid-cols-[1fr,300px] gap-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Thavisouk Minalavong (Pern)</h1>
              <h2 className="text-xl text-gray-600">Full Stack Developer</h2>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">About</h3>
              <p className="text-gray-600 leading-relaxed">
                Full Stack Developer with expertise in frontend and backend development. Experienced in creating HR
                systems, event management websites, and data visualization applications. Passionate about clean code,
                unit testing, and agile methodologies.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold">3+</div>
                <div className="text-sm text-gray-500">Years Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-gray-500">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">3+</div>
                <div className="text-sm text-gray-500">Companies</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Skills Overview</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Frontend</div>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Backend</div>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Django", "PostgreSQL", "RESTful API"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:Thavisoukmnlv@gmail.com"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                >
                  <Mail className="w-5 h-5" />
                  <span>Thavisoukmnlv@gmail.com</span>
                </a>
                <a href="tel:+85620596847100" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <Phone className="w-5 h-5" />
                  <span>+856 20 59684710</span>
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/Thavisoukmnlv9" target="_blank" className="p-2 text-gray-400 hover:text-blue-600">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100034302293568" target="_blank" className="p-2 text-gray-400 hover:text-blue-600">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-8">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 relative">
                <Image src="/pern.jpeg" alt="Profile" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

