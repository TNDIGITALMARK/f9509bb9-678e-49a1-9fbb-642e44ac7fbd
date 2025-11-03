import { Header } from "@/components/blue-stores/header"
import { Footer } from "@/components/blue-stores/footer"
import { Target, Heart, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            About Blue Online Stores
          </h1>
          <p className="text-lg text-muted-foreground">
            Your destination for quality products, exceptional service, and
            a shopping experience you&apos;ll love. Discover what makes us different.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            Our Story
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Founded in 2018, Blue Online Stores started with a simple belief: online shopping
              should be easy, enjoyable, and trustworthy. We were tired of confusing checkout
              processes, unreliable shipping, and impersonal customer service.
            </p>
            <p>
              So we created something better. A place where quality products meet exceptional
              service. Where every order is treated with care. Where your satisfaction isn&apos;t
              just a goal—it&apos;s our promise.
            </p>
            <p>
              Today, thousands of happy customers trust us for their online shopping needs.
              From everyday essentials to special finds, we&apos;re here to make your life
              easier, one order at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Why Shop With Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Quality First</h3>
              <p className="text-muted-foreground">
                Every product is carefully selected and vetted. We stand behind everything
                we sell with our satisfaction guarantee.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Customer Care</h3>
              <p className="text-muted-foreground">
                Real people, real support. Our friendly team is here to help with
                any questions or concerns, before and after your purchase.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Fast & Reliable</h3>
              <p className="text-muted-foreground">
                Quick processing, secure checkout, and reliable shipping. Get what
                you ordered, when we promise to deliver it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Promise Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold text-foreground">
            Our Promise to You
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Shopping online should be simple, secure, and enjoyable. That&apos;s why we&apos;ve built
            our entire business around making sure you have the best experience possible.
          </p>
          <div className="rounded-xl bg-gradient-to-br from-primary/5 to-background p-8">
            <p className="text-xl font-semibold text-foreground">
              &quot;Your satisfaction is our top priority. We&apos;re not happy until
              you&apos;re thrilled with your purchase. That&apos;s the Blue Online Stores difference.&quot;
            </p>
            <p className="mt-4 text-muted-foreground">- The Blue Online Stores Team</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
