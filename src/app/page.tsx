import { Header } from "@/components/blue-stores/header"
import { Footer } from "@/components/blue-stores/footer"
import { Button } from "@/components/ui/button"
import {
  ShoppingCart,
  Megaphone,
  Target,
  BarChart3,
  CheckCircle2,
  Star
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Hero Text */}
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Premium Tech & Electronics Store
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Shop the latest gadgets, accessories, and tech products at unbeatable prices.
                Free shipping on orders over $100 with our 30-day satisfaction guarantee.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-primary px-8 py-6 text-base font-medium text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-primary bg-transparent px-8 py-6 text-base font-medium text-primary transition-all hover:bg-primary hover:text-white"
                >
                  View Deals
                </Button>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-foreground">50%</div>
                  <div className="text-sm text-muted-foreground">Off Select Items</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">Free</div>
                  <div className="text-sm text-muted-foreground">Shipping Over $100</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">30-Day</div>
                  <div className="text-sm text-muted-foreground">Returns</div>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-[400px]">
                <Image
                  src="/generated/hero-illustration.png"
                  alt="Tech products illustration"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-background py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold text-foreground">
            Shop By Category
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Category Card 1 */}
            <div className="card-hover group cursor-pointer rounded-xl bg-white p-8 text-center shadow transition-all">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Electronics
              </h3>
              <p className="text-sm text-muted-foreground">
                Latest gadgets and tech devices
              </p>
            </div>

            {/* Category Card 2 */}
            <div className="card-hover group cursor-pointer rounded-xl bg-white p-8 text-center shadow transition-all">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Megaphone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Audio & Sound
              </h3>
              <p className="text-sm text-muted-foreground">
                Premium headphones and speakers
              </p>
            </div>

            {/* Category Card 3 */}
            <div className="card-hover group cursor-pointer rounded-xl bg-white p-8 text-center shadow transition-all">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Gaming Gear
              </h3>
              <p className="text-sm text-muted-foreground">
                Pro gaming accessories and peripherals
              </p>
            </div>

            {/* Category Card 4 */}
            <div className="card-hover group cursor-pointer rounded-xl bg-white p-8 text-center shadow transition-all">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Office Essentials
              </h3>
              <p className="text-sm text-muted-foreground">
                Productivity tools and workspace gear
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold text-foreground">
            Why Shop With Us
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Quality Guaranteed
                </h3>
                <p className="text-sm text-muted-foreground">
                  Premium products from trusted brands with authentic warranties
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Fast Shipping
                </h3>
                <p className="text-sm text-muted-foreground">
                  Free shipping on orders over $100, delivered to your door in 2-5 days
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Secure Checkout
                </h3>
                <p className="text-sm text-muted-foreground">
                  Shop with confidence using our encrypted payment system
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-[10px]">Rating</div>
              </div>
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-[10px]">Support</div>
              </div>
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-[10px]">Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-background py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-foreground">
              Featured Products
            </h2>
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
              View All Products
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Product 1 */}
            <div className="card-hover group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all">
              <div className="relative aspect-square w-full overflow-hidden bg-background">
                <Image
                  src="/generated/portfolio-1.png"
                  alt="Premium Wireless Headphones"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute right-3 top-3">
                  <div className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    Sale
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-xs text-muted-foreground">(1,247)</span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  Premium Wireless Headphones
                </h3>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-foreground">$299.99</span>
                  <span className="text-sm text-muted-foreground line-through">$399.99</span>
                </div>
                <Button className="mt-auto w-full rounded-full bg-primary hover:bg-primary/90">
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="card-hover group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all">
              <div className="relative aspect-square w-full overflow-hidden bg-background">
                <Image
                  src="/generated/portfolio-2.png"
                  alt="Smart Fitness Watch"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute right-3 top-3">
                  <div className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    New
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span className="ml-1 text-xs text-muted-foreground">(892)</span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  Smart Fitness Watch
                </h3>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-foreground">$199.99</span>
                </div>
                <Button className="mt-auto w-full rounded-full bg-primary hover:bg-primary/90">
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="card-hover group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all">
              <div className="relative aspect-square w-full overflow-hidden bg-background">
                <Image
                  src="/generated/portfolio-1.png"
                  alt="Portable Bluetooth Speaker"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-xs text-muted-foreground">(2,103)</span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  Portable Bluetooth Speaker
                </h3>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-foreground">$79.99</span>
                  <span className="text-sm text-muted-foreground line-through">$99.99</span>
                </div>
                <Button className="mt-auto w-full rounded-full bg-primary hover:bg-primary/90">
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Product 4 */}
            <div className="card-hover group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all">
              <div className="relative aspect-square w-full overflow-hidden bg-background">
                <Image
                  src="/generated/portfolio-2.png"
                  alt="Mechanical Gaming Keyboard"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute right-3 top-3">
                  <div className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    Best Seller
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-xs text-muted-foreground">(1,890)</span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  Mechanical Gaming Keyboard
                </h3>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-foreground">$149.99</span>
                  <span className="text-sm text-muted-foreground line-through">$199.99</span>
                </div>
                <Button className="mt-auto w-full rounded-full bg-primary hover:bg-primary/90">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold text-foreground">
            What Our Customers Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Review 1 */}
            <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="mb-6 text-muted-foreground">
                &quot;Absolutely love my new wireless headphones! The sound quality is amazing
                and they arrived in just 2 days. Will definitely shop here again!&quot;
              </p>
              <div>
                <p className="font-semibold text-foreground">Sarah Martinez</p>
                <p className="text-sm text-muted-foreground">Verified Buyer</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="mb-6 text-muted-foreground">
                &quot;Great prices and excellent customer service. The gaming keyboard I ordered
                is perfect for my setup. Highly recommend this store!&quot;
              </p>
              <div>
                <p className="font-semibold text-foreground">Mike Thompson</p>
                <p className="text-sm text-muted-foreground">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
