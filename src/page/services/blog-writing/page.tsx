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
import {
  CheckCircle,
  PenTool,
  Target,
  TrendingUp,
  Users,
  Calendar,
  BarChart,
} from "lucide-react";

export default function BlogWritingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            Blog Writing Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Expert <span className="text-secondary">Blog Writing</span> Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Engaging, SEO-optimized blog content that drives traffic, builds
            authority, and converts readers into customers.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Our Blog Writing Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SEO Optimized</h3>
              <p className="text-muted-foreground">
                Every post is optimized for search engines to drive organic
                traffic
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Research-Based</h3>
              <p className="text-muted-foreground">
                Thoroughly researched content that provides real value
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Audience-Focused</h3>
              <p className="text-muted-foreground">
                Content tailored to your target audience's needs and interests
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Consistent Publishing
              </h3>
              <p className="text-muted-foreground">
                Regular content schedule to keep your audience engaged
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <PenTool className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Professional Writing
              </h3>
              <p className="text-muted-foreground">
                High-quality, engaging content that reflects your brand voice
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Performance Tracking
              </h3>
              <p className="text-muted-foreground">
                Monthly reports on content performance and engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Blog Writing Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your content marketing needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Starter Plan</CardTitle>
                <CardDescription>
                  Perfect for small businesses starting their blog
                </CardDescription>
                <div className="text-4xl font-bold text-secondary">₹4,000</div>
                <p className="text-sm text-muted-foreground">per month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />4
                    blog posts per month
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    800-1000 words each
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    Basic SEO optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    Topic research
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />2
                    revisions per post
                  </li>
                </ul>
                <Button asChild className="w-full" variant="secondary">
                  <Link to="/services/blog-writing/form">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="relative border-secondary border-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-secondary text-secondary-foreground">
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professional Plan</CardTitle>
                <CardDescription>Ideal for growing businesses</CardDescription>
                <div className="text-4xl font-bold text-secondary">₹8,000</div>
                <p className="text-sm text-muted-foreground">per month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />8
                    blog posts per month
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    1000-1500 words each
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    Advanced SEO optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    Keyword research
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    Social media snippets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    Monthly performance report
                  </li>
                </ul>
                <Button asChild className="w-full" variant="secondary">
                  <Link to="/services/blog-writing/form">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise Plan</CardTitle>
                <CardDescription>
                  For businesses serious about content marketing
                </CardDescription>
                <div className="text-4xl font-bold text-secondary">₹13,000</div>
                <p className="text-sm text-muted-foreground">per month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    12 blog posts per month
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    1500+ words each
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    Premium SEO optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    Content strategy planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    Email newsletter content
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    Dedicated content manager
                  </li>
                </ul>
                <Button asChild className="w-full" variant="secondary">
                  <Link to="/services/blog-writing/form">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Blog?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create compelling content that drives traffic and builds your
            authority
          </p>
          <Button size="lg" asChild variant="secondary">
            <Link to="/services/blog-writing/form">Start Your Blog</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
