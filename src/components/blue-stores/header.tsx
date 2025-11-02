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
            href="/shop"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Shop
          </Link>
          <Link
            href="/categories"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Categories
          </Link>
          <Link
            href="/deals"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Deals
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Cart Button */}
        <Button
          className="gap-2 rounded-full bg-primary px-6 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          <ShoppingBag className="h-4 w-4" />
          Cart (0)
        </Button>
      </div>
    </header>
  )
}
