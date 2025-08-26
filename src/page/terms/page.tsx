import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Legal
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: January 15, 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Code & Content Studio's website and
                services, you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the
                above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Services Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Code & Content Studio provides the following services:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Website development and design</li>
                <li>Blog writing and content creation</li>
                <li>Promotional content and marketing materials</li>
                <li>SEO optimization and digital marketing consultation</li>
                <li>Ongoing website maintenance and support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Pricing and Payments
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All prices are listed in Indian Rupees (INR) and are subject
                    to change without notice. Payment is due according to the
                    terms specified in your service agreement or invoice.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Refund Policy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Refunds are considered on a case-by-case basis. For website
                    development projects, refunds may be available before work
                    begins. For ongoing services like blog writing, refunds are
                    prorated based on work completed.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Client Responsibilities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>
                  Provide accurate and complete information for your project
                </li>
                <li>
                  Respond to requests for feedback and approval in a timely
                  manner
                </li>
                <li>
                  Provide necessary access to accounts, platforms, and resources
                </li>
                <li>Make payments according to the agreed schedule</li>
                <li>Respect our team's time and expertise</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Client Content</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You retain ownership of all content, materials, and
                    intellectual property you provide to us. You grant us a
                    license to use this content solely for the purpose of
                    providing our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Our Work Product
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Upon full payment, you will own the final deliverables
                    created specifically for your project. We retain the right
                    to use general methodologies, techniques, and knowledge
                    gained during the project.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Code & Content Studio's liability for any claim related to our
                services shall not exceed the total amount paid by you for the
                specific service giving rise to the claim. We are not liable for
                any indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Project Timelines</h2>
              <p className="text-muted-foreground leading-relaxed">
                Project timelines are estimates based on the scope of work and
                client responsiveness. Delays in client feedback, content
                provision, or scope changes may affect delivery dates. We will
                communicate any timeline adjustments promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate services with written notice. Upon
                termination, you will be responsible for payment of all work
                completed up to the termination date. We will provide all
                completed work and transfer necessary files upon final payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance
                with the laws of India. Any disputes arising from these terms or
                our services shall be subject to the jurisdiction of the courts
                in Mumbai, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting on our website. Your
                continued use of our services constitutes acceptance of any
                changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="font-medium">Code & Content Studio</p>
                <p className="text-muted-foreground">
                  Email: legal@codecontentstudio.com
                </p>
                <p className="text-muted-foreground">Phone: +91 98765 43210</p>
                <p className="text-muted-foreground">Address: Mumbai, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
