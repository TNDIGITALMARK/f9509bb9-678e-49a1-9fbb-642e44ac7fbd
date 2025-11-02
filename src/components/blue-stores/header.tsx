"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <ShoppingBag className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold text-foreground">Blue Online Stores</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Portfolio
          </Link>
          <Link
            href="/testimonials"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Button
          className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          Get Started
        </Button>
      </div>
    </header>
  )
}
