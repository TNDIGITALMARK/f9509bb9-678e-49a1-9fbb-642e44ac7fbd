import { Header } from "@/components/blue-stores/header"
import { Footer } from "@/components/blue-stores/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Our Services & Packages
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose the perfect package to transform your business into a thriving online store.
            All packages include professional design, mobile optimization, and ongoing support.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Starter Package */}
            <div className="card-hover flex flex-col rounded-2xl border-2 border-border bg-white p-8 shadow-lg transition-all">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-foreground">Starter Package</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">$2,499</span>
                  <span className="text-muted-foreground"> / one-time</span>
                </div>
                <p className="text-muted-foreground">
                  Perfect for small businesses just starting their online journey
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Basic store setup with up to 5 products
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Mobile responsive design
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Secure payment gateway integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Basic SEO optimization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    30 days of email support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Social media integration
                  </span>
                </li>
              </ul>

              <Button className="w-full rounded-full bg-primary py-6 text-base font-medium hover:bg-primary/90">
                Get Started
              </Button>
            </div>

            {/* Growth Package - Featured */}
            <div className="card-hover relative flex flex-col rounded-2xl border-2 border-primary bg-white p-8 shadow-2xl transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                Most Popular
              </div>

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-foreground">Growth Package</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">$4,999</span>
                  <span className="text-muted-foreground"> / one-time</span>
                </div>
                <p className="text-muted-foreground">
                  Ideal for established businesses ready to scale online
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Everything in Starter Package
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Unlimited products
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Advanced SEO optimization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Email marketing integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Advanced analytics dashboard
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    90 days of priority support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Multi-currency support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Customer review system
                  </span>
                </li>
              </ul>

              <Button className="w-full rounded-full bg-primary py-6 text-base font-medium hover:bg-primary/90">
                Get Started
              </Button>
            </div>

            {/* Enterprise Package */}
            <div className="card-hover flex flex-col rounded-2xl border-2 border-border bg-white p-8 shadow-lg transition-all">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-foreground">Enterprise Package</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">$9,999</span>
                  <span className="text-muted-foreground"> / one-time</span>
                </div>
                <p className="text-muted-foreground">
                  Complete solution for large businesses with custom needs
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Everything in Growth Package
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Custom development & integrations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Dedicated account manager
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Advanced security features
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    API access for custom workflows
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    1 year of 24/7 priority support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Quarterly strategy consultations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    White-label options available
                  </span>
                </li>
              </ul>

              <Button className="w-full rounded-full bg-primary py-6 text-base font-medium hover:bg-primary/90">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold text-foreground">
            Additional Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Maintenance & Updates
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Keep your store running smoothly with regular updates and maintenance
              </p>
              <p className="text-2xl font-bold text-primary">$299/mo</p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Content Creation
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Professional product photography and copywriting services
              </p>
              <p className="text-2xl font-bold text-primary">$499/mo</p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Marketing Campaigns
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Targeted ad campaigns to drive traffic and boost sales
              </p>
              <p className="text-2xl font-bold text-primary">$799/mo</p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Custom Training
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                One-on-one training for you and your team
              </p>
              <p className="text-2xl font-bold text-primary">$199/hr</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Not Sure Which Package is Right for You?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Schedule a free consultation with our experts to discuss your specific needs and goals.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-white px-8 py-6 text-base font-medium text-primary hover:bg-white/90"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
