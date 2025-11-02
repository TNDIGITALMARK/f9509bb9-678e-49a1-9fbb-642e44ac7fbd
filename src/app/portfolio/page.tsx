import { Header } from "@/components/blue-stores/header"
import { Footer } from "@/components/blue-stores/footer"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Users, Globe } from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      name: "Modern Home Goods",
      category: "Home & Lifestyle",
      image: "/generated/portfolio-1.png",
      description: "Complete e-commerce redesign with focus on user experience and conversion optimization",
      results: [
        { label: "Sales Increase", value: "300%" },
        { label: "Conversion Rate", value: "8.5%" },
        { label: "Average Order", value: "$145" }
      ],
      testimonial: "Blue Online Stores transformed our business completely. Sales tripled within 3 months!",
      client: "Jessica Chen, Founder"
    },
    {
      id: 2,
      name: "Fashion Boutique",
      category: "Fashion & Apparel",
      image: "/generated/portfolio-2.png",
      description: "Multi-market expansion with multi-currency support and localized content",
      results: [
        { label: "New Markets", value: "3" },
        { label: "Customer Growth", value: "250%" },
        { label: "Revenue Growth", value: "$2.1M" }
      ],
      testimonial: "Professional team that delivered beyond expectations. Our international expansion was seamless.",
      client: "Marie Laurent, CEO"
    },
    {
      id: 3,
      name: "Tech Accessories Store",
      category: "Electronics",
      image: "/generated/portfolio-1.png",
      description: "High-performance store with advanced filtering and real-time inventory management",
      results: [
        { label: "Page Speed", value: "95/100" },
        { label: "Monthly Visitors", value: "50K+" },
        { label: "Products Listed", value: "1,200+" }
      ],
      testimonial: "The technical implementation was flawless. Our customers love the fast, intuitive experience.",
      client: "David Park, Owner"
    },
    {
      id: 4,
      name: "Artisan Marketplace",
      category: "Handmade & Crafts",
      image: "/generated/portfolio-2.png",
      description: "Multi-vendor platform connecting artisans with customers worldwide",
      results: [
        { label: "Active Vendors", value: "120+" },
        { label: "Products", value: "3,500+" },
        { label: "Customer Rating", value: "4.9/5" }
      ],
      testimonial: "They built exactly what we envisioned. The platform has changed how we do business.",
      client: "Sarah Williams, Director"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Our Success Stories
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore how we&apos;ve helped businesses across various industries
            transform their online presence and achieve remarkable growth.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground">200+</div>
              <p className="text-sm text-muted-foreground">Successful Launches</p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground">$50M+</div>
              <p className="text-sm text-muted-foreground">Revenue Generated</p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground">4.9/5</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground">25+</div>
              <p className="text-sm text-muted-foreground">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-background py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="space-y-16">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`grid items-center gap-8 md:grid-cols-2 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="card-hover overflow-hidden rounded-2xl shadow-lg">
                    <div className="relative h-[400px] w-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="mb-2 text-sm font-semibold text-primary">
                    {item.category}
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-foreground">
                    {item.name}
                  </h2>
                  <p className="mb-6 text-muted-foreground">{item.description}</p>

                  {/* Results */}
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    {item.results.map((result, idx) => (
                      <div key={idx} className="rounded-lg bg-white p-4 text-center shadow">
                        <div className="mb-1 text-2xl font-bold text-primary">
                          {result.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="mb-6 rounded-xl border border-border bg-white p-6">
                    <div className="mb-3 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="mb-3 italic text-muted-foreground">
                      &quot;{item.testimonial}&quot;
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {item.client}
                    </p>
                  </div>

                  <Button className="rounded-full bg-primary hover:bg-primary/90">
                    View Full Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Join Our Success Stories?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Let&apos;s discuss how we can help transform your business with a
            professional e-commerce solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full bg-white px-8 py-6 text-base font-medium text-primary hover:bg-white/90"
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white bg-transparent px-8 py-6 text-base font-medium text-white hover:bg-white/10"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
