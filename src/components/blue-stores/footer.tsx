import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-primary py-12 text-white">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Main Footer Content */}
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <h3 className="mb-4 text-2xl font-semibold text-white">
            Ready to Grow Your Online Business?
          </h3>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-primary transition-all hover:bg-white/90 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Footer Links */}
        <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/" className="transition-opacity hover:opacity-80">
            Home
          </Link>
          <Link href="/services" className="transition-opacity hover:opacity-80">
            Services
          </Link>
          <Link href="/portfolio" className="transition-opacity hover:opacity-80">
            Portfolio
          </Link>
          <Link href="/about" className="transition-opacity hover:opacity-80">
            About
          </Link>
          <Link href="/contact" className="transition-opacity hover:opacity-80">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-all hover:bg-white/30"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-all hover:bg-white/30"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-all hover:bg-white/30"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm opacity-80">
          © {new Date().getFullYear()} Blue Online Stores. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
