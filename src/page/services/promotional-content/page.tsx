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
  Megaphone,
  Share2,
  Mail,
  MousePointer,
  Zap,
  Heart,
} from "lucide-react";

export default function PromotionalContentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            Promotional Content Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Compelling <span className="text-accent">Promotional Content</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Marketing materials that convert. From social media posts to email
            campaigns, we create content that drives action.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Create
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Share2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media Posts</h3>
              <p className="text-muted-foreground">
                Engaging posts for Facebook, Instagram, LinkedIn, and Twitter
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Campaigns</h3>
              <p className="text-muted-foreground">
                Compelling email content that drives opens and clicks
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MousePointer className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ad Copy</h3>
              <p className="text-muted-foreground">
                High-converting ad copy for Google, Facebook, and other
                platforms
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Landing Page Copy</h3>
              <p className="text-muted-foreground">
                Persuasive copy that converts visitors into customers
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Megaphone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Press Releases</h3>
              <p className="text-muted-foreground">
                Professional press releases for media coverage
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Brand Messaging</h3>
              <p className="text-muted-foreground">
                Consistent brand voice across all marketing materials
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
              Promotional Content Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your marketing needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential Package */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Essential Plan</CardTitle>
                <CardDescription>
                  Perfect for small businesses getting started
                </CardDescription>
                <div className="text-4xl font-bold text-accent">₹3,000</div>
                <p className="text-sm text-muted-foreground">per month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    12 social media posts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />2 email
                    campaigns
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    Basic ad copy (5 variations)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    Content calendar
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />2
                    revisions per piece
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full"
                  style={{
                    backgroundColor: "hsl(var(--accent))",
                    color: "hsl(var(--accent-foreground))",
                  }}
                >
                  <Link to="/services/promotional-content/form">
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Growth Package */}
            <Card className="relative border-accent border-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge
                  style={{
                    backgroundColor: "hsl(var(--accent))",
                    color: "hsl(var(--accent-foreground))",
                  }}
                >
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Growth Plan</CardTitle>
                <CardDescription>Ideal for growing businesses</CardDescription>
                <div className="text-4xl font-bold text-accent">₹7,000</div>
                <p className="text-sm text-muted-foreground">per month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    24 social media posts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />4 email
                    campaigns
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    Advanced ad copy (10 variations)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    Landing page copy (2 pages)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    Monthly strategy review
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    Performance analytics
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full"
                  style={{
                    backgroundColor: "hsl(var(--accent))",
                    color: "hsl(var(--accent-foreground))",
                  }}
                >
                  <Link to="/services/promotional-content/form">
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Premium Plan</CardTitle>
                <CardDescription>
                  For businesses serious about marketing
                </CardDescription>
                <div className="text-4xl font-bold text-accent">₹12,000</div>
                <p className="text-sm text-muted-foreground">per month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    40 social media posts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />8 email
                    campaigns
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    Premium ad copy (20 variations)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    Landing page copy (5 pages)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    Press releases (2 per month)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    Dedicated account manager
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full"
                  style={{
                    backgroundColor: "hsl(var(--accent))",
                    color: "hsl(var(--accent-foreground))",
                  }}
                >
                  <Link to="/services/promotional-content/form">
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Boost Your Marketing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create promotional content that drives results and grows your
            business
          </p>
          <Button
            size="lg"
            asChild
            style={{
              backgroundColor: "hsl(var(--accent))",
              color: "hsl(var(--accent-foreground))",
            }}
          >
            <Link to="/services/promotional-content/form">
              Start Your Campaign
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
