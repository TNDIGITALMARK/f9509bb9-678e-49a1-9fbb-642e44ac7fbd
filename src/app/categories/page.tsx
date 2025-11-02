import { Header } from "@/components/blue-stores/header"
import { Footer } from "@/components/blue-stores/footer"
import { Button } from "@/components/ui/button"
import {
  Headphones,
  Smartphone,
  Monitor,
  Keyboard,
  Mouse,
  Speaker,
  Watch,
  Camera,
  Gamepad2,
  Laptop,
  Tablet,
  ChevronRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CategoriesPage() {
  const categories = [
    {
      id: 1,
      name: "Audio & Headphones",
      icon: Headphones,
      productCount: 156,
      image: "/generated/category-audio.png",
      description: "Premium headphones, earbuds, and speakers",
      featured: true
    },
    {
      id: 2,
      name: "Gaming",
      icon: Gamepad2,
      productCount: 243,
      image: "/generated/category-gaming.png",
      description: "Keyboards, mice, controllers, and accessories",
      featured: true
    },
    {
      id: 3,
      name: "Smartphones & Tablets",
      icon: Smartphone,
      productCount: 89,
      image: "/generated/category-mobile.png",
      description: "Latest mobile devices and accessories",
      featured: true
    },
    {
      id: 4,
      name: "Computers & Laptops",
      icon: Laptop,
      productCount: 124,
      image: "/generated/category-computers.png",
      description: "Desktops, laptops, and PC components",
      featured: false
    },
    {
      id: 5,
      name: "Monitors & Displays",
      icon: Monitor,
      productCount: 78,
      image: "/generated/category-monitors.png",
      description: "4K monitors, gaming displays, and more",
      featured: false
    },
    {
      id: 6,
      name: "Keyboards & Mice",
      icon: Keyboard,
      productCount: 167,
      image: "/generated/category-peripherals.png",
      description: "Mechanical keyboards and gaming mice",
      featured: false
    },
    {
      id: 7,
      name: "Smartwatches",
      icon: Watch,
      productCount: 92,
      image: "/generated/category-wearables.png",
      description: "Fitness trackers and smartwatches",
      featured: false
    },
    {
      id: 8,
      name: "Cameras & Photography",
      icon: Camera,
      productCount: 134,
      image: "/generated/category-cameras.png",
      description: "DSLRs, webcams, and photography gear",
      featured: false
    },
    {
      id: 9,
      name: "Speakers & Audio",
      icon: Speaker,
      productCount: 201,
      image: "/generated/category-speakers.png",
      description: "Bluetooth speakers and sound systems",
      featured: false
    }
  ]

  const featuredCategories = categories.filter(cat => cat.featured)
  const allCategories = categories

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Shop by Category
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Browse our extensive collection of tech products organized by category.
            Find exactly what you're looking for.
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-semibold text-foreground">
            Featured Categories
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredCategories.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.id}
                  href={`/shop?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background to-white shadow-lg transition-all"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-10">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-foreground">
                      {category.name}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary">
                        {category.productCount} Products
                      </span>
                      <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="bg-background py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-semibold text-foreground">
            All Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allCategories.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.id}
                  href={`/shop?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="card-hover group flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-primary"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {category.name}
                  </h3>
                  <p className="mb-3 flex-1 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary">
                      {category.productCount} items
                    </span>
                    <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Products by Category */}
      <section className="border-t border-border bg-white py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-semibold text-foreground">
            Popular in Each Category
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Sample Popular Items */}
            <div className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-square w-full">
                <Image
                  src="/generated/portfolio-1.png"
                  alt="Popular Product"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-1 text-xs font-semibold text-primary">Audio</div>
                <h4 className="text-sm font-semibold text-foreground">Premium Headphones</h4>
                <p className="text-lg font-bold text-foreground">$299.99</p>
              </div>
            </div>

            <div className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-square w-full">
                <Image
                  src="/generated/portfolio-2.png"
                  alt="Popular Product"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-1 text-xs font-semibold text-primary">Gaming</div>
                <h4 className="text-sm font-semibold text-foreground">Gaming Keyboard</h4>
                <p className="text-lg font-bold text-foreground">$149.99</p>
              </div>
            </div>

            <div className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-square w-full">
                <Image
                  src="/generated/portfolio-1.png"
                  alt="Popular Product"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-1 text-xs font-semibold text-primary">Wearables</div>
                <h4 className="text-sm font-semibold text-foreground">Smart Watch</h4>
                <p className="text-lg font-bold text-foreground">$199.99</p>
              </div>
            </div>

            <div className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-square w-full">
                <Image
                  src="/generated/portfolio-2.png"
                  alt="Popular Product"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-1 text-xs font-semibold text-primary">Audio</div>
                <h4 className="text-sm font-semibold text-foreground">Bluetooth Speaker</h4>
                <p className="text-lg font-bold text-foreground">$79.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Can't Find What You're Looking For?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Use our search feature or contact our support team for help finding the perfect product.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full bg-white px-8 py-6 text-base font-medium text-primary hover:bg-white/90"
            >
              Browse All Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white bg-transparent px-8 py-6 text-base font-medium text-white hover:bg-white/10"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
