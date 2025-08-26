import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Users, Target, Award, ArrowRight, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            About Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            We Transform Ideas Into{" "}
            <span className="text-primary">Digital Success</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Code & Content Studio is a passionate team of developers and content
            creators dedicated to helping businesses thrive in the digital
            world.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground">
              How we started and where we're going
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Founded in 2023, Code & Content Studio emerged from a simple
              belief: every business deserves a powerful digital presence that
              truly represents their brand and drives results. We started as a
              small team of passionate developers and content creators who were
              frustrated with the gap between technical excellence and
              compelling storytelling in the digital space.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Today, we've grown into a trusted partner for over 100 businesses
              across India and beyond. Our unique approach combines cutting-edge
              web development with strategic content creation, ensuring that
              every project we deliver not only looks great but also performs
              exceptionally.
            </p>

            <p className="text-lg leading-relaxed">
              We believe in building long-term relationships with our clients,
              understanding their goals, and delivering solutions that exceed
              expectations. Our commitment to quality, transparency, and results
              has made us the go-to choice for businesses looking to make a real
              impact online.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Results-Driven</CardTitle>
                <CardDescription>
                  We focus on delivering measurable outcomes that drive your
                  business forward
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every project is designed with your specific goals in mind,
                  ensuring maximum ROI and business impact.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Client-Centric</CardTitle>
                <CardDescription>
                  Your success is our success - we're partners in your digital
                  journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We take time to understand your business, challenges, and
                  goals to deliver truly personalized solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Excellence</CardTitle>
                <CardDescription>
                  We maintain the highest standards in everything we create
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From code quality to content strategy, we never compromise on
                  excellence and attention to detail.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Website Development</h4>
                    <p className="text-muted-foreground text-sm">
                      Custom websites built with modern technologies, optimized
                      for performance and conversions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold">Content Strategy</h4>
                    <p className="text-muted-foreground text-sm">
                      Strategic content creation that builds authority, drives
                      traffic, and engages your audience
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold">Digital Marketing</h4>
                    <p className="text-muted-foreground text-sm">
                      Compelling promotional content that converts prospects
                      into customers across all channels
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">SEO Optimization</h4>
                    <p className="text-muted-foreground text-sm">
                      Technical and content SEO to improve your search rankings
                      and organic visibility
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    100+ Projects Delivered
                  </CardTitle>
                  <CardDescription>
                    Successful websites and content campaigns
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    95% Client Satisfaction
                  </CardTitle>
                  <CardDescription>
                    Based on post-project surveys and reviews
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">24/7 Support</CardTitle>
                  <CardDescription>
                    Ongoing support and maintenance for all clients
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help transform your digital presence and
            drive real business results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/#services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
