

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MultiStepForm } from "@/components/multi-step-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Upload } from "lucide-react";
import { Link } from "react-router-dom";

type WebsiteFormData = {
  // Step 1: Contact Information
  name: string;
  email: string;
  phone: string;
  company: string;

  // Step 2: Project Details
  projectType: string;
  pages: string;
  features: string[];
  timeline: string;

  // Step 3: Design Preferences
  designStyle: string;
  colorPreferences: string;
  inspiration: string;
  logo: File | null;

  // Step 4: Budget & Package
  package: string;
  budget: string;
  additionalRequirements: string;
};

export default function WebsiteBuildingFormPage() {
  const [formData, setFormData] = useState<WebsiteFormData>({
    // Step 1: Contact Information
    name: "",
    email: "",
    phone: "",
    company: "",

    // Step 2: Project Details
    projectType: "",
    pages: "",
    features: [],
    timeline: "",

    // Step 3: Design Preferences
    designStyle: "",
    colorPreferences: "",
    inspiration: "",
    logo: null,

    // Step 4: Budget & Package
    package: "",
    budget: "",
    additionalRequirements: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      features: checked
        ? [...prev.features, feature]
        : prev.features.filter((f: string) => f !== feature),
    }));
  };

  const handleSubmit = (data: any) => {
    console.log("Website Building Form Submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">
              Request Submitted Successfully!
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your website building request. We'll review your
              requirements and get back to you within 24 hours with a detailed
              proposal.
            </p>
            <div className="space-y-4">
              <p className="text-sm">
                <strong>Next Steps:</strong>
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• We'll review your project requirements</li>
                <li>• Our team will prepare a detailed proposal</li>
                <li>• You'll receive an email with timeline and next steps</li>
              </ul>
            </div>
            <Button asChild className="mt-8">
              <Link to="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const steps = [
    {
      title: "Contact Information",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => updateFormData("company", e.target.value)}
                placeholder="Your company name"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Project Details",
      content: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="projectType">Project Type *</Label>
            <Select
              value={formData.projectType}
              onValueChange={(value) => updateFormData("projectType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business">Business Website</SelectItem>
                <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                <SelectItem value="portfolio">Portfolio Website</SelectItem>
                <SelectItem value="blog">Blog/News Site</SelectItem>
                <SelectItem value="landing">Landing Page</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="pages">Estimated Number of Pages *</Label>
            <Select
              value={formData.pages}
              onValueChange={(value) => updateFormData("pages", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select number of pages" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">1-5 pages</SelectItem>
                <SelectItem value="6-10">6-10 pages</SelectItem>
                <SelectItem value="11-20">11-20 pages</SelectItem>
                <SelectItem value="20+">20+ pages</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Required Features (Select all that apply)</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                "Contact Form",
                "Blog/News",
                "E-commerce",
                "User Accounts",
                "Payment Integration",
                "Social Media",
                "Analytics",
                "SEO Optimization",
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox
                    id={feature}
                    checked={formData.features.includes(feature)}
                    onCheckedChange={(checked) =>
                      handleFeatureChange(feature, checked as boolean)
                    }
                  />
                  <Label htmlFor={feature} className="text-sm">
                    {feature}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="timeline">Project Timeline *</Label>
            <Select
              value={formData.timeline}
              onValueChange={(value) => updateFormData("timeline", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP (Rush job)</SelectItem>
                <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                <SelectItem value="1-2months">1-2 months</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ),
    },
    {
      title: "Design Preferences",
      content: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="designStyle">Design Style Preference</Label>
            <Select
              value={formData.designStyle}
              onValueChange={(value) => updateFormData("designStyle", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select design style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="modern">Modern & Clean</SelectItem>
                <SelectItem value="creative">Creative & Artistic</SelectItem>
                <SelectItem value="corporate">
                  Corporate & Professional
                </SelectItem>
                <SelectItem value="minimalist">Minimalist</SelectItem>
                <SelectItem value="bold">Bold & Colorful</SelectItem>
                <SelectItem value="classic">Classic & Traditional</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="colorPreferences">Color Preferences</Label>
            <Textarea
              id="colorPreferences"
              value={formData.colorPreferences}
              onChange={(e) =>
                updateFormData("colorPreferences", e.target.value)
              }
              placeholder="Describe your preferred colors, brand colors, or any color restrictions..."
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="inspiration">Inspiration Websites</Label>
            <Textarea
              id="inspiration"
              value={formData.inspiration}
              onChange={(e) => updateFormData("inspiration", e.target.value)}
              placeholder="Share URLs of websites you like or describe the style you're looking for..."
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="logo">Upload Logo (Optional)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Drag and drop your logo here, or click to browse
              </p>
              <Input
                id="logo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => updateFormData("logo", e.target.files?.[0])}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Budget & Package Selection",
      content: (
        <div className="space-y-6">
          <div>
            <Label>Select Package *</Label>
            <div className="grid grid-cols-1 gap-4 mt-4">
              {[
                {
                  id: "basic",
                  name: "Basic Website",
                  price: "₹8,000",
                  features: [
                    "Up to 5 pages",
                    "Responsive design",
                    "Basic SEO",
                    "1 month support",
                  ],
                },
                {
                  id: "professional",
                  name: "Professional Website",
                  price: "₹20,000",
                  features: [
                    "Up to 10 pages",
                    "Advanced design",
                    "Complete SEO",
                    "CMS integration",
                    "3 months support",
                  ],
                },
                {
                  id: "enterprise",
                  name: "Enterprise Website",
                  price: "₹45,000",
                  features: [
                    "Unlimited pages",
                    "Custom functionality",
                    "E-commerce",
                    "Advanced integrations",
                    "6 months support",
                  ],
                },
              ].map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`cursor-pointer transition-all ${
                    formData.package === pkg.id ? "border-primary border-2" : ""
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        checked={formData.package === pkg.id}
                        onCheckedChange={() =>
                          updateFormData("package", pkg.id)
                        }
                      />
                      <div>
                        <CardTitle className="text-lg">{pkg.name}</CardTitle>
                        <CardDescription className="text-2xl font-bold text-primary">
                          {pkg.price}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {pkg.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex items-center"
                        >
                          <CheckCircle className="h-3 w-3 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="budget">Additional Budget Considerations</Label>
            <Textarea
              id="budget"
              value={formData.budget}
              onChange={(e) => updateFormData("budget", e.target.value)}
              placeholder="Any specific budget constraints or additional requirements..."
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="additionalRequirements">
              Additional Requirements
            </Label>
            <Textarea
              id="additionalRequirements"
              value={formData.additionalRequirements}
              onChange={(e) =>
                updateFormData("additionalRequirements", e.target.value)
              }
              placeholder="Any other specific requirements, integrations, or features you need..."
              rows={4}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Website Building Request
          </Badge>
          <h1 className="text-3xl font-bold mb-4">
            Tell Us About Your Project
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Help us understand your website requirements so we can create the
            perfect solution for your business.
          </p>
        </div>

        <MultiStepForm
          steps={steps}
          onSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
      <Footer />
    </div>
  );
}
