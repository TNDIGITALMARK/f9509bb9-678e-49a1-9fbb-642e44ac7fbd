import { Header } from "@/components/blue-stores/header"
import { Footer } from "@/components/blue-stores/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Clock, Tag } from "lucide-react"
import Image from "next/image"

export default function DealsPage() {
  const deals = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: 299.99,
      originalPrice: 399.99,
      discount: 25,
      rating: 4.8,
      reviews: 1247,
      image: "/generated/product-headphones.png",
      endsIn: "2 days",
      inStock: true
    },
    {
      id: 2,
      name: "Portable Bluetooth Speaker",
      category: "Audio",
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      rating: 4.7,
      reviews: 2103,
      image: "/generated/product-speaker.png",
      endsIn: "5 hours",
      inStock: true
    },
    {
      id: 3,
      name: "USB-C Hub Multi-Port Adapter",
      category: "Accessories",
      price: 89.99,
      originalPrice: 119.99,
      discount: 25,
      rating: 4.9,
      reviews: 1567,
      image: "/generated/product-hub.png",
      endsIn: "1 day",
      inStock: true
    },
    {
      id: 4,
      name: "Mechanical Gaming Keyboard",
      category: "Gaming",
      price: 149.99,
      originalPrice: 199.99,
      discount: 25,
      rating: 4.8,
      reviews: 1890,
      image: "/generated/product-keyboard.png",
      endsIn: "3 days",
      inStock: true
    },
    {
      id: 5,
      name: "Premium Mouse Pad XXL",
      category: "Gaming",
      price: 34.99,
      originalPrice: 44.99,
      discount: 22,
      rating: 4.5,
      reviews: 2341,
      image: "/generated/product-mousepad.png",
      endsIn: "12 hours",
      inStock: true
    },
    {
      id: 6,
      name: "Phone Stand Adjustable",
      category: "Accessories",
      price: 24.99,
      originalPrice: 34.99,
      discount: 29,
      rating: 4.4,
      reviews: 1823,
      image: "/generated/product-phonestand.png",
      endsIn: "4 days",
      inStock: true
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-6 py-2">
              <Tag className="h-5 w-5 text-red-600" />
              <span className="text-sm font-semibold text-red-600">Limited Time Offers</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Massive Savings on Tech
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
              Save up to 50% on premium electronics, accessories, and gadgets.
              Shop now before these deals expire!
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-red-600">50%</div>
                <div className="text-sm text-muted-foreground">Max Discount</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600">100+</div>
                <div className="text-sm text-muted-foreground">Products on Sale</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-muted-foreground">New Deals Daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Deal Banner */}
      <section className="border-b border-border bg-white py-8">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:grid-cols-2">
            <div>
              <div className="mb-2 inline-block rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                Deal of the Day
              </div>
              <h2 className="mb-3 text-3xl font-bold text-foreground">
                Premium Wireless Headphones
              </h2>
              <div className="mb-4 flex items-baseline gap-3">
                <span className="text-4xl font-bold text-primary">$299.99</span>
                <span className="text-xl text-muted-foreground line-through">$399.99</span>
                <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                  Save 25%
                </span>
              </div>
              <div className="mb-6 flex items-center gap-2">
                <Clock className="h-5 w-5 text-red-500" />
                <span className="text-sm font-semibold text-red-500">Ends in 2 days</span>
              </div>
              <Button size="lg" className="gap-2 rounded-full bg-primary hover:bg-primary/90">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/generated/product-headphones.png"
                alt="Premium Wireless Headphones"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Deals Grid */}
      <section className="bg-background py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground">All Active Deals</h2>
              <p className="text-sm text-muted-foreground">Limited time offers - Shop before they expire!</p>
            </div>
            <select className="rounded-lg border border-border bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Sort by: Ending Soon</option>
              <option>Discount: High to Low</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rated</option>
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deals.map((deal) => (
              <div
                key={deal.id}
                className="card-hover group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all"
              >
                {/* Product Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-background">
                  <Image
                    src={deal.image}
                    alt={deal.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3">
                    <div className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                      {deal.discount}% OFF
                    </div>
                  </div>
                  <div className="absolute right-3 top-3">
                    <div className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-red-500">
                      <Clock className="h-3 w-3" />
                      {deal.endsIn}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-2 text-xs font-semibold text-primary">
                    {deal.category}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground line-clamp-2">
                    {deal.name}
                  </h3>

                  {/* Rating */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-foreground">
                        {deal.rating}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({deal.reviews.toLocaleString()})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-4 flex flex-col gap-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-foreground">
                        ${deal.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${deal.originalPrice}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-green-600">
                      You save ${(deal.originalPrice - deal.price).toFixed(2)}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    className="mt-auto w-full gap-2 rounded-full bg-primary hover:bg-primary/90"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
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
              Load More Deals
            </Button>
          </div>
        </div>
      </section>

      {/* Deal Alerts CTA */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Never Miss a Deal
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Subscribe to get notified about flash sales, exclusive offers, and new deals.
          </p>
          <div className="mx-auto flex max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border-0 px-6 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              size="lg"
              className="rounded-full bg-white px-8 text-primary hover:bg-white/90"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
