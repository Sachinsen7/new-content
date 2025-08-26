

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

type PromotionalContentFormData = {
  // Step 1: Contact Information
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;

  // Step 2: Marketing Goals
  marketingGoals: string[];
  targetAudience: string;
  currentMarketing: string;
  competitors: string;

  // Step 3: Content Requirements
  contentTypes: string[];
  brandGuidelines: string;
  toneStyle: string;
  brandAssets: FileList | null;

  // Step 4: Package Selection
  package: string;
  platforms: string[];
  specialRequirements: string;
};

export default function PromotionalContentFormPage() {
  const [formData, setFormData] = useState<PromotionalContentFormData>({
    // Step 1: Contact Information
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",

    // Step 2: Marketing Goals
    marketingGoals: [],
    targetAudience: "",
    currentMarketing: "",
    competitors: "",

    // Step 3: Content Requirements
    contentTypes: [],
    brandGuidelines: "",
    toneStyle: "",
    brandAssets: null,

    // Step 4: Package Selection
    package: "",
    platforms: [],
    specialRequirements: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGoalChange = (goal: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      marketingGoals: checked
        ? [...prev.marketingGoals, goal]
        : prev.marketingGoals.filter((g: string) => g !== goal),
    }));
  };

  const handleContentTypeChange = (type: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      contentTypes: checked
        ? [...prev.contentTypes, type]
        : prev.contentTypes.filter((t: string) => t !== type),
    }));
  };

  const handlePlatformChange = (platform: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      platforms: checked
        ? [...prev.platforms, platform]
        : prev.platforms.filter((p: string) => p !== platform),
    }));
  };

  const handleSubmit = (data: any) => {
    console.log("Promotional Content Form Submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-3xl font-bold mb-4">
              Promotional Content Request Submitted!
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your promotional content request. We'll create a
              custom marketing strategy and get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <p className="text-sm">
                <strong>Next Steps:</strong>
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  • We'll analyze your marketing goals and target audience
                </li>
                <li>
                  • Our team will create a content strategy for your brand
                </li>
                <li>• You'll receive sample content and a detailed proposal</li>
              </ul>
            </div>
            <Button
              asChild
              className="mt-8"
              style={{
                backgroundColor: "hsl(var(--accent))",
                color: "hsl(var(--accent-foreground))",
              }}
            >
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
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => updateFormData("company", e.target.value)}
                placeholder="Your company name"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="website">Website URL</Label>
            <Input
              id="website"
              value={formData.website}
              onChange={(e) => updateFormData("website", e.target.value)}
              placeholder="https://yourwebsite.com"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Marketing Goals",
      content: (
        <div className="space-y-6">
          <div>
            <Label>Marketing Goals (Select all that apply)</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                "Increase brand awareness",
                "Generate leads",
                "Drive website traffic",
                "Boost sales",
                "Build social media following",
                "Launch new product",
                "Improve engagement",
                "Build email list",
              ].map((goal) => (
                <div key={goal} className="flex items-center space-x-2">
                  <Checkbox
                    id={goal}
                    checked={formData.marketingGoals.includes(goal)}
                    onCheckedChange={(checked) =>
                      handleGoalChange(goal, checked as boolean)
                    }
                  />
                  <Label htmlFor={goal} className="text-sm">
                    {goal}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="targetAudience">Target Audience *</Label>
            <Textarea
              id="targetAudience"
              value={formData.targetAudience}
              onChange={(e) => updateFormData("targetAudience", e.target.value)}
              placeholder="Describe your ideal customers - demographics, interests, behaviors, pain points..."
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="currentMarketing">Current Marketing Efforts</Label>
            <Textarea
              id="currentMarketing"
              value={formData.currentMarketing}
              onChange={(e) =>
                updateFormData("currentMarketing", e.target.value)
              }
              placeholder="Tell us about your current marketing activities - what's working, what's not..."
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="competitors">Key Competitors</Label>
            <Textarea
              id="competitors"
              value={formData.competitors}
              onChange={(e) => updateFormData("competitors", e.target.value)}
              placeholder="List your main competitors or brands you admire in your industry..."
              rows={3}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Content Requirements",
      content: (
        <div className="space-y-6">
          <div>
            <Label>Content Types Needed (Select all that apply)</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                "Social media posts",
                "Email campaigns",
                "Ad copy",
                "Landing page copy",
                "Press releases",
                "Product descriptions",
                "Blog promotional content",
                "Video scripts",
              ].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={formData.contentTypes.includes(type)}
                    onCheckedChange={(checked) =>
                      handleContentTypeChange(type, checked as boolean)
                    }
                  />
                  <Label htmlFor={type} className="text-sm">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="brandGuidelines">Brand Guidelines & Voice</Label>
            <Textarea
              id="brandGuidelines"
              value={formData.brandGuidelines}
              onChange={(e) =>
                updateFormData("brandGuidelines", e.target.value)
              }
              placeholder="Describe your brand personality, values, messaging guidelines, do's and don'ts..."
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="toneStyle">Preferred Tone & Style</Label>
            <Select
              value={formData.toneStyle}
              onValueChange={(value) => updateFormData("toneStyle", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select tone and style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">
                  Professional & Corporate
                </SelectItem>
                <SelectItem value="friendly">
                  Friendly & Approachable
                </SelectItem>
                <SelectItem value="bold">Bold & Confident</SelectItem>
                <SelectItem value="playful">Playful & Creative</SelectItem>
                <SelectItem value="authoritative">
                  Authoritative & Expert
                </SelectItem>
                <SelectItem value="conversational">
                  Conversational & Casual
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="brandAssets">Upload Brand Assets (Optional)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Upload logos, brand guidelines, style guides, or reference
                materials
              </p>
              <Input
                id="brandAssets"
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.png,.zip"
                multiple
                className="hidden"
                onChange={(e) => updateFormData("brandAssets", e.target.files)}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Package Selection",
      content: (
        <div className="space-y-6">
          <div>
            <Label>Select Promotional Content Package *</Label>
            <div className="grid grid-cols-1 gap-4 mt-4">
              {[
                {
                  id: "essential",
                  name: "Essential Plan",
                  price: "₹3,000/month",
                  features: [
                    "12 social media posts",
                    "2 email campaigns",
                    "Basic ad copy (5 variations)",
                    "Content calendar",
                    "2 revisions per piece",
                  ],
                },
                {
                  id: "growth",
                  name: "Growth Plan",
                  price: "₹7,000/month",
                  features: [
                    "24 social media posts",
                    "4 email campaigns",
                    "Advanced ad copy (10 variations)",
                    "Landing page copy (2 pages)",
                    "Monthly strategy review",
                    "Performance analytics",
                  ],
                },
                {
                  id: "premium",
                  name: "Premium Plan",
                  price: "₹12,000/month",
                  features: [
                    "40 social media posts",
                    "8 email campaigns",
                    "Premium ad copy (20 variations)",
                    "Landing page copy (5 pages)",
                    "Press releases (2 per month)",
                    "Dedicated account manager",
                  ],
                },
              ].map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`cursor-pointer transition-all ${
                    formData.package === pkg.id ? "border-accent border-2" : ""
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
                        <CardDescription className="text-2xl font-bold text-accent">
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
                          <CheckCircle className="h-3 w-3 text-accent mr-2" />
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
            <Label>Target Platforms (Select all that apply)</Label>
            <div className="grid grid-cols-3 gap-4 mt-2">
              {[
                "Facebook",
                "Instagram",
                "LinkedIn",
                "Twitter",
                "YouTube",
                "TikTok",
                "Google Ads",
                "Email",
                "Website",
              ].map((platform) => (
                <div key={platform} className="flex items-center space-x-2">
                  <Checkbox
                    id={platform}
                    checked={formData.platforms.includes(platform)}
                    onCheckedChange={(checked) =>
                      handlePlatformChange(platform, checked as boolean)
                    }
                  />
                  <Label htmlFor={platform} className="text-sm">
                    {platform}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="specialRequirements">Special Requirements</Label>
            <Textarea
              id="specialRequirements"
              value={formData.specialRequirements}
              onChange={(e) =>
                updateFormData("specialRequirements", e.target.value)
              }
              placeholder="Any specific requirements, campaign details, or special requests..."
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
            Promotional Content Request
          </Badge>
          <h1 className="text-3xl font-bold mb-4">
            Let's Create Your Marketing Campaign
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Help us understand your marketing goals so we can create compelling
            promotional content that drives results.
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
