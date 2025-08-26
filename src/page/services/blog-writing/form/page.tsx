

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
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

type BlogWritingFormData = {
  // Step 1: Contact Information
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;

  // Step 2: Content Strategy
  industry: string;
  targetAudience: string;
  contentGoals: string[];
  currentContent: string;

  // Step 3: Blog Preferences
  topics: string;
  toneStyle: string;
  postLength: string;
  publishingFrequency: string;

  // Step 4: Package Selection
  package: string;
  additionalServices: string[];
  specialRequirements: string;
};

export default function BlogWritingFormPage() {
  const [formData, setFormData] = useState<BlogWritingFormData>({
    // Step 1: Contact Information
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",

    // Step 2: Content Strategy
    industry: "",
    targetAudience: "",
    contentGoals: [],
    currentContent: "",

    // Step 3: Blog Preferences
    topics: "",
    toneStyle: "",
    postLength: "",
    publishingFrequency: "",

    // Step 4: Package Selection
    package: "",
    additionalServices: [],
    specialRequirements: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGoalChange = (goal: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      contentGoals: checked
        ? [...prev.contentGoals, goal]
        : prev.contentGoals.filter((g: string) => g !== goal),
    }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, service]
        : prev.additionalServices.filter((s: string) => s !== service),
    }));
  };

  const handleSubmit = (data: any) => {
    console.log("Blog Writing Form Submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">
              Blog Writing Request Submitted!
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your blog writing request. We'll create a custom
              content strategy and get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <p className="text-sm">
                <strong>Next Steps:</strong>
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• We'll develop a content strategy for your industry</li>
                <li>• Our writers will research your target topics</li>
                <li>
                  • You'll receive a content calendar and first draft timeline
                </li>
              </ul>
            </div>
            <Button asChild className="mt-8" variant="secondary">
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
      title: "Content Strategy",
      content: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="industry">Industry/Niche *</Label>
            <Select
              value={formData.industry}
              onValueChange={(value) => updateFormData("industry", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="retail">Retail/E-commerce</SelectItem>
                <SelectItem value="real-estate">Real Estate</SelectItem>
                <SelectItem value="food">Food & Beverage</SelectItem>
                <SelectItem value="travel">Travel & Tourism</SelectItem>
                <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="targetAudience">Target Audience *</Label>
            <Textarea
              id="targetAudience"
              value={formData.targetAudience}
              onChange={(e) => updateFormData("targetAudience", e.target.value)}
              placeholder="Describe your ideal readers - demographics, interests, pain points, etc."
              rows={4}
            />
          </div>

          <div>
            <Label>Content Goals (Select all that apply)</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                "Increase website traffic",
                "Generate leads",
                "Build brand authority",
                "Educate customers",
                "Improve SEO rankings",
                "Drive sales",
                "Build community",
                "Thought leadership",
              ].map((goal) => (
                <div key={goal} className="flex items-center space-x-2">
                  <Checkbox
                    id={goal}
                    checked={formData.contentGoals.includes(goal)}
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
            <Label htmlFor="currentContent">Current Content Situation</Label>
            <Textarea
              id="currentContent"
              value={formData.currentContent}
              onChange={(e) => updateFormData("currentContent", e.target.value)}
              placeholder="Tell us about your current blog/content - what's working, what's not, existing content strategy..."
              rows={4}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Blog Preferences",
      content: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="topics">Preferred Topics & Keywords</Label>
            <Textarea
              id="topics"
              value={formData.topics}
              onChange={(e) => updateFormData("topics", e.target.value)}
              placeholder="List topics, keywords, or themes you want us to cover in your blog posts..."
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="toneStyle">Tone & Style Preference</Label>
            <Select
              value={formData.toneStyle}
              onValueChange={(value) => updateFormData("toneStyle", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select tone and style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">
                  Professional & Formal
                </SelectItem>
                <SelectItem value="conversational">
                  Conversational & Friendly
                </SelectItem>
                <SelectItem value="authoritative">
                  Authoritative & Expert
                </SelectItem>
                <SelectItem value="casual">Casual & Relaxed</SelectItem>
                <SelectItem value="inspiring">
                  Inspiring & Motivational
                </SelectItem>
                <SelectItem value="educational">
                  Educational & Informative
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="postLength">Preferred Post Length</Label>
            <Select
              value={formData.postLength}
              onValueChange={(value) => updateFormData("postLength", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select post length" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="short">Short (500-800 words)</SelectItem>
                <SelectItem value="medium">Medium (800-1200 words)</SelectItem>
                <SelectItem value="long">Long (1200-2000 words)</SelectItem>
                <SelectItem value="variable">
                  Variable based on topic
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="publishingFrequency">
              Publishing Frequency Preference
            </Label>
            <Select
              value={formData.publishingFrequency}
              onValueChange={(value) =>
                updateFormData("publishingFrequency", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select publishing frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly (4 posts/month)</SelectItem>
                <SelectItem value="bi-weekly">
                  Bi-weekly (8 posts/month)
                </SelectItem>
                <SelectItem value="tri-weekly">
                  3x per week (12 posts/month)
                </SelectItem>
                <SelectItem value="flexible">Flexible schedule</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ),
    },
    {
      title: "Package Selection",
      content: (
        <div className="space-y-6">
          <div>
            <Label>Select Blog Writing Package *</Label>
            <div className="grid grid-cols-1 gap-4 mt-4">
              {[
                {
                  id: "starter",
                  name: "Starter Plan",
                  price: "₹4,000/month",
                  features: [
                    "4 blog posts per month",
                    "800-1000 words each",
                    "Basic SEO optimization",
                    "Topic research",
                    "2 revisions per post",
                  ],
                },
                {
                  id: "professional",
                  name: "Professional Plan",
                  price: "₹8,000/month",
                  features: [
                    "8 blog posts per month",
                    "1000-1500 words each",
                    "Advanced SEO optimization",
                    "Keyword research",
                    "Social media snippets",
                    "Monthly performance report",
                  ],
                },
                {
                  id: "enterprise",
                  name: "Enterprise Plan",
                  price: "₹13,000/month",
                  features: [
                    "12 blog posts per month",
                    "1500+ words each",
                    "Premium SEO optimization",
                    "Content strategy planning",
                    "Email newsletter content",
                    "Dedicated content manager",
                  ],
                },
              ].map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`cursor-pointer transition-all ${
                    formData.package === pkg.id
                      ? "border-secondary border-2"
                      : ""
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
                        <CardDescription className="text-2xl font-bold text-secondary">
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
                          <CheckCircle className="h-3 w-3 text-secondary mr-2" />
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
            <Label>Additional Services (Optional)</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                "Social media promotion",
                "Email newsletter",
                "Content calendar",
                "Competitor analysis",
                "Keyword research report",
                "Content performance analytics",
                "Guest posting",
                "Content repurposing",
              ].map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={formData.additionalServices.includes(service)}
                    onCheckedChange={(checked) =>
                      handleServiceChange(service, checked as boolean)
                    }
                  />
                  <Label htmlFor={service} className="text-sm">
                    {service}
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
              placeholder="Any specific requirements, content guidelines, or special requests..."
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
            Blog Writing Request
          </Badge>
          <h1 className="text-3xl font-bold mb-4">
            Let's Plan Your Content Strategy
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Help us understand your content goals so we can create engaging blog
            posts that drive results.
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
