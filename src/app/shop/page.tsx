import { Header } from "@/components/blue-stores/header"
import { Footer } from "@/components/blue-stores/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Filter, Search } from "lucide-react"
import Image from "next/image"

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 1247,
      image: "/generated/product-headphones.png",
      badge: "Best Seller",
      inStock: true
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      category: "Wearables",
      price: 199.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 892,
      image: "/generated/product-watch.png",
      badge: "New Arrival",
      inStock: true
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      category: "Audio",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.7,
      reviews: 2103,
      image: "/generated/product-speaker.png",
      badge: "Sale",
      inStock: true
    },
    {
      id: 4,
      name: "Wireless Charging Pad",
      category: "Accessories",
      price: 49.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 634,
      image: "/generated/product-charger.png",
      badge: null,
      inStock: true
    },
    {
      id: 5,
      name: "USB-C Hub Multi-Port Adapter",
      category: "Accessories",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.9,
      reviews: 1567,
      image: "/generated/product-hub.png",
      badge: "Top Rated",
      inStock: true
    },
    {
      id: 6,
      name: "Laptop Stand Ergonomic",
      category: "Office",
      price: 59.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 423,
      image: "/generated/product-stand.png",
      badge: null,
      inStock: true
    },
    {
      id: 7,
      name: "Mechanical Gaming Keyboard",
      category: "Gaming",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 1890,
      image: "/generated/product-keyboard.png",
      badge: "Sale",
      inStock: true
    },
    {
      id: 8,
      name: "HD Webcam with Ring Light",
      category: "Electronics",
      price: 129.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 756,
      image: "/generated/product-webcam.png",
      badge: "Popular",
      inStock: true
    },
    {
      id: 9,
      name: "Premium Mouse Pad XXL",
      category: "Gaming",
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.5,
      reviews: 2341,
      image: "/generated/product-mousepad.png",
      badge: null,
      inStock: true
    },
    {
      id: 10,
      name: "LED Desk Lamp Smart",
      category: "Office",
      price: 69.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 512,
      image: "/generated/product-lamp.png",
      badge: "New",
      inStock: true
    },
    {
      id: 11,
      name: "Phone Stand Adjustable",
      category: "Accessories",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.4,
      reviews: 1823,
      image: "/generated/product-phonestand.png",
      badge: null,
      inStock: true
    },
    {
      id: 12,
      name: "Cable Management Box",
      category: "Office",
      price: 39.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 967,
      image: "/generated/product-cablebox.png",
      badge: null,
      inStock: true
    }
  ]

  const categories = ["All Products", "Electronics", "Gaming", "Office", "Accessories", "Audio", "Wearables"]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-12 text-white md:py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Shop Premium Tech Products
              </h1>
              <p className="mb-6 text-lg opacity-90">
                Discover our curated collection of high-quality electronics, accessories, and gadgets.
                Free shipping on orders over $100.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-white px-8 py-6 text-base font-medium text-primary hover:bg-white/90"
                >
                  Shop New Arrivals
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white bg-transparent px-8 py-6 text-base font-medium text-white hover:bg-white/10"
                >
                  View Deals
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="mb-4 rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                  <div className="mb-2 text-5xl font-bold">50%</div>
                  <div className="text-lg font-medium">OFF</div>
                  <div className="mt-2 text-sm opacity-80">Selected Items</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="border-b border-border bg-white py-6">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1 md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-full border border-border py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Filter Button */}
            <Button variant="outline" className="gap-2 rounded-full">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border bg-background py-4">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className="whitespace-nowrap rounded-full border border-border bg-white px-6 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-background py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">All Products</h2>
              <p className="text-sm text-muted-foreground">Showing {products.length} products</p>
            </div>
            <select className="rounded-lg border border-border bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Best Rated</option>
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="card-hover group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all"
              >
                {/* Product Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-background">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {product.badge && (
                    <Badge
                      className="absolute right-3 top-3 bg-primary text-white"
                    >
                      {product.badge}
                    </Badge>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-2 text-xs font-semibold text-primary">
                    {product.category}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-foreground">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="text-xl font-bold text-foreground">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    className="mt-auto w-full gap-2 rounded-full bg-primary hover:bg-primary/90"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
            >
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-white py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-1 text-base font-semibold text-foreground">
                Free Shipping
              </h3>
              <p className="text-sm text-muted-foreground">
                On orders over $100
              </p>
            </div>

            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-1 text-base font-semibold text-foreground">
                Secure Payment
              </h3>
              <p className="text-sm text-muted-foreground">
                100% secure transactions
              </p>
            </div>

            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-1 text-base font-semibold text-foreground">
                Easy Returns
              </h3>
              <p className="text-sm text-muted-foreground">
                30-day return policy
              </p>
            </div>

            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-1 text-base font-semibold text-foreground">
                24/7 Support
              </h3>
              <p className="text-sm text-muted-foreground">
                Always here to help
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
