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
                Unlock Your E-commerce Potential
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Transform your business into a profitable online store in 30 days.
                We handle everything from design to launch while you focus on growing your business.
              </p>
              <Button
                size="lg"
                className="rounded-full bg-primary px-8 py-6 text-base font-medium text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Get Started
              </Button>
            </div>

            {/* Hero Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-[400px]">
                <Image
                  src="/generated/hero-illustration.png"
                  alt="E-commerce illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-background py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold text-foreground">
            Featured Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Service Card 1 */}
            <div className="card-hover group rounded-xl bg-white p-8 text-center shadow transition-all">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Platform Integration
              </h3>
              <p className="text-sm text-muted-foreground">
                Seamless integration with leading e-commerce platforms
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="card-hover group rounded-xl bg-white p-8 text-center shadow transition-all">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Megaphone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Digital Marketing
              </h3>
              <p className="text-sm text-muted-foreground">
                Drive traffic and sales with proven marketing strategies
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="card-hover group rounded-xl bg-white p-8 text-center shadow transition-all">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Conversion Optimization
              </h3>
              <p className="text-sm text-muted-foreground">
                Maximize your store&apos;s performance and revenue
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="card-hover group rounded-xl bg-white p-8 text-center shadow transition-all">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Analytics & Reporting
              </h3>
              <p className="text-sm text-muted-foreground">
                Data-driven insights to grow your business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold text-foreground">
            Why Choose Us
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
                  Proven Results
                </h3>
                <p className="text-sm text-muted-foreground">
                  Over 200+ successful stores launched and millions in revenue generated
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
                  Dedicated Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Expert team available 24/7 to help you succeed
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
                  Award-Winning Service
                </h3>
                <p className="text-sm text-muted-foreground">
                  Recognized industry leader with multiple awards and certifications
                </p>
              </div>
            </div>
          </div>

          {/* Award Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-[10px]">Success</div>
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
                <div className="text-2xl font-bold">200+</div>
                <div className="text-[10px]">Stores</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="bg-background py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold text-foreground">
            Portfolio Showcase
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Portfolio Item 1 */}
            <div className="card-hover overflow-hidden rounded-xl bg-white shadow">
              <div className="relative h-64 w-full">
                <Image
                  src="/generated/portfolio-1.png"
                  alt="Modern Home Goods Store"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Modern Home Goods
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Increased sales by 300% within first 3 months of launch
                </p>
                <Button
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View Case Study
                </Button>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="card-hover overflow-hidden rounded-xl bg-white shadow">
              <div className="relative h-64 w-full">
                <Image
                  src="/generated/portfolio-2.png"
                  alt="Fashion Boutique Store"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Fashion Boutique
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Expanded to 3 new markets with multi-currency support
                </p>
                <Button
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold text-foreground">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Testimonial 1 */}
            <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="mb-6 text-muted-foreground">
                &quot;Blue Online Stores transformed our local bakery into a thriving
                online business. We&apos;re now shipping nationwide!&quot;
              </p>
              <div>
                <p className="font-semibold text-foreground">Sarah Martinez</p>
                <p className="text-sm text-muted-foreground">Owner, Sweet Treats Bakery</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="mb-6 text-muted-foreground">
                &quot;The team&apos;s expertise in e-commerce strategy helped us achieve
                our first million in online sales.&quot;
              </p>
              <div>
                <p className="font-semibold text-foreground">Mike Thompson</p>
                <p className="text-sm text-muted-foreground">CEO, TechGear Pro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
