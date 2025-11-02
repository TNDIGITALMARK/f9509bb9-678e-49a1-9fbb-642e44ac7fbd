import { Header } from "@/components/blue-stores/header"
import { Footer } from "@/components/blue-stores/footer"
import { Star } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Martinez",
      role: "Owner, Sweet Treats Bakery",
      content: "Blue Online Stores transformed our local bakery into a thriving online business. We're now shipping nationwide and our revenue has tripled! The team was professional, responsive, and truly understood our vision.",
      rating: 5,
      category: "Food & Beverage"
    },
    {
      id: 2,
      name: "Mike Thompson",
      role: "CEO, TechGear Pro",
      content: "The team's expertise in e-commerce strategy helped us achieve our first million in online sales. Their attention to detail and commitment to our success was evident in every interaction.",
      rating: 5,
      category: "Electronics"
    },
    {
      id: 3,
      name: "Jessica Chen",
      role: "Founder, Modern Home Goods",
      content: "Working with Blue Online Stores was the best decision we made for our business. Sales increased by 300% within the first three months, and the customer experience is seamless.",
      rating: 5,
      category: "Home & Lifestyle"
    },
    {
      id: 4,
      name: "Marie Laurent",
      role: "CEO, L'Atelier Fashion",
      content: "Professional team that delivered beyond expectations. Our international expansion was seamless thanks to their multi-currency and multi-language implementation. Highly recommended!",
      rating: 5,
      category: "Fashion"
    },
    {
      id: 5,
      name: "David Park",
      role: "Owner, Tech Accessories Hub",
      content: "The technical implementation was flawless. Our customers love the fast, intuitive experience. Page load times are excellent and the admin panel makes inventory management a breeze.",
      rating: 5,
      category: "Electronics"
    },
    {
      id: 6,
      name: "Sarah Williams",
      role: "Director, Artisan Marketplace",
      content: "They built exactly what we envisioned - a multi-vendor platform that's easy for both sellers and buyers. The platform has completely changed how we do business and our vendors love it.",
      rating: 5,
      category: "Marketplace"
    },
    {
      id: 7,
      name: "Robert Chen",
      role: "Founder, Fitness Gear Direct",
      content: "From concept to launch, the process was smooth and transparent. Their ongoing support has been exceptional. We couldn't have asked for a better partner in our e-commerce journey.",
      rating: 5,
      category: "Sports & Fitness"
    },
    {
      id: 8,
      name: "Emily Rodriguez",
      role: "Owner, Eco Beauty Shop",
      content: "Not only did they create a beautiful store, but they also helped us implement sustainable shipping options and carbon-neutral checkout. They really understood our brand values.",
      rating: 5,
      category: "Beauty & Wellness"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            What Our Clients Say
          </h1>
          <p className="text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Hear from the businesses we&apos;ve helped
            transform their online presence and achieve remarkable success.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">4.9/5</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">200+</div>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">98%</div>
              <p className="text-sm text-muted-foreground">Would Recommend</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">$50M+</div>
              <p className="text-sm text-muted-foreground">Client Revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-background py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col rounded-xl border border-border bg-white p-8 shadow-sm transition-all hover:shadow-md"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {testimonial.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="mb-6 flex-1 text-muted-foreground">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
            Ready to Become Our Next Success Story?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Join hundreds of satisfied clients who have transformed their businesses
            with Blue Online Stores.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-4 text-base font-medium text-primary transition-all hover:bg-white/90"
            >
              Get Started Today
            </a>
            <a
              href="/services"
              className="inline-block rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/10"
            >
              View Our Packages
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
