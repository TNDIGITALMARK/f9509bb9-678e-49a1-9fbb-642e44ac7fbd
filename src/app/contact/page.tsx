"use client"

import { Header } from "@/components/blue-stores/header"
import { Footer } from "@/components/blue-stores/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    orderNumber: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for reaching out! Our customer support team will respond within 24 hours.")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            We&apos;re Here to Help
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a question about your order? Need help with a product? Want to share feedback?
            Our friendly customer support team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                    What can we help you with? *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a topic</option>
                    <option value="order-status">Order Status</option>
                    <option value="product-question">Product Question</option>
                    <option value="returns-exchanges">Returns & Exchanges</option>
                    <option value="shipping">Shipping Information</option>
                    <option value="technical-issue">Technical Issue</option>
                    <option value="feedback">Feedback or Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="orderNumber" className="mb-2 block text-sm font-medium text-foreground">
                    Order Number (if applicable)
                  </label>
                  <Input
                    id="orderNumber"
                    name="orderNumber"
                    type="text"
                    value={formData.orderNumber}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="#12345"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full"
                    placeholder="Please provide as much detail as possible..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full bg-primary py-6 text-base font-medium hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Other Ways to Reach Us
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Email Support</h3>
                    <p className="text-muted-foreground">support@blueonlinestores.com</p>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 2-4 hours
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Customer Service</h3>
                    <p className="text-muted-foreground">1-800-BLUE-SHOP (258-3746)</p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 8AM - 8PM EST<br />
                      Saturday - Sunday: 10AM - 6PM EST
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Mailing Address</h3>
                    <p className="text-muted-foreground">Blue Online Stores</p>
                    <p className="text-muted-foreground">123 Commerce Street</p>
                    <p className="text-muted-foreground">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-12 rounded-xl bg-primary/5 p-6">
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Fast Response Times
                </h3>
                <p className="text-muted-foreground">
                  Our customer support team typically responds within 24 hours, but often
                  much faster. For urgent order issues, call us directly for immediate assistance.
                </p>
              </div>

              {/* FAQ Link */}
              <div className="mt-6 rounded-xl border border-border bg-white p-6">
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Need Help Right Now?
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Check out our Help Center for answers to common questions about
                  orders, shipping, returns, and more.
                </p>
                <Button
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Visit Help Center
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
