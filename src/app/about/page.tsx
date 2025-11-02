import { Header } from "@/components/blue-stores/header"
import { Footer } from "@/components/blue-stores/footer"
import { Target, Heart, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            About Blue Online Stores
          </h1>
          <p className="text-lg text-muted-foreground">
            We&apos;re on a mission to make e-commerce success accessible to businesses
            of all sizes through professional design, expert guidance, and ongoing support.
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
              Founded in 2018, Blue Online Stores was born from a simple observation: too many
              great businesses were struggling to establish a strong online presence. Traditional
              e-commerce solutions were either too expensive, too complicated, or lacked the
              personal touch needed for success.
            </p>
            <p>
              We set out to change that. Our team of designers, developers, and e-commerce
              strategists came together with a shared vision: to create beautiful, functional
              online stores that drive real results for our clients.
            </p>
            <p>
              Today, we&apos;ve helped over 200 businesses launch and grow their online presence.
              From local boutiques to international retailers, our clients trust us to deliver
              exceptional results every time.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Excellence</h3>
              <p className="text-muted-foreground">
                We never settle for &quot;good enough.&quot; Every project receives our full
                dedication to delivering exceptional quality and results.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Partnership</h3>
              <p className="text-muted-foreground">
                Your success is our success. We work as an extension of your team,
                invested in your long-term growth and prosperity.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                E-commerce is constantly evolving. We stay ahead of trends to ensure
                your store leverages the latest technology and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold text-foreground">
            Meet Our Expert Team
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Our diverse team brings together decades of combined experience in
            e-commerce, design, development, and digital marketing.
          </p>
          <div className="rounded-xl bg-gradient-to-br from-primary/5 to-background p-8">
            <p className="text-xl font-semibold text-foreground">
              &quot;We believe every business deserves a professional online presence
              that drives real results. That&apos;s why we pour our hearts into every
              project we take on.&quot;
            </p>
            <p className="mt-4 text-muted-foreground">- The Blue Online Stores Team</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
