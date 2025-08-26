// Mock data for admin dashboard demonstration
export interface Submission {
  id: string;
  type: "website-building" | "blog-writing" | "promotional-content";
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  company?: string;
  status: "new" | "in-progress" | "completed" | "cancelled";
  package: string;
  createdAt: string;
  updatedAt: string;
  formData: any;
  notes: Note[];
}

export interface Note {
  id: string;
  submissionId: string;
  content: string;
  createdAt: string;
  createdBy: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  totalSubmissions: number;
  totalValue: number;
  status: "active" | "inactive";
  createdAt: string;
}

// Mock submissions data
export const mockSubmissions: Submission[] = [
  {
    id: "1",
    type: "website-building",
    clientName: "John Smith",
    clientEmail: "john@techstartup.com",
    clientPhone: "+91 98765 43210",
    company: "Tech Startup Inc.",
    status: "new",
    package: "professional",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
    formData: {
      projectType: "business",
      pages: "6-10",
      features: ["Contact Form", "Blog/News", "Analytics"],
      timeline: "3-4weeks",
      designStyle: "modern",
      budget: "₹20,000",
    },
    notes: [
      {
        id: "n1",
        submissionId: "1",
        content: "Initial consultation scheduled for tomorrow",
        createdAt: "2024-01-15T11:00:00Z",
        createdBy: "Admin User",
      },
    ],
  },
  {
    id: "2",
    type: "blog-writing",
    clientName: "Sarah Johnson",
    clientEmail: "sarah@healthwellness.com",
    clientPhone: "+91 87654 32109",
    company: "Health & Wellness Co.",
    status: "in-progress",
    package: "professional",
    createdAt: "2024-01-14T14:20:00Z",
    updatedAt: "2024-01-15T09:15:00Z",
    formData: {
      industry: "healthcare",
      targetAudience: "Health-conscious individuals aged 25-45",
      contentGoals: [
        "Increase website traffic",
        "Build brand authority",
        "Educate customers",
      ],
      topics: "Nutrition, fitness, mental health, wellness tips",
      toneStyle: "professional",
      publishingFrequency: "bi-weekly",
    },
    notes: [
      {
        id: "n2",
        submissionId: "2",
        content:
          "Content calendar approved. Starting with 4 articles on nutrition basics.",
        createdAt: "2024-01-14T16:30:00Z",
        createdBy: "Admin User",
      },
      {
        id: "n3",
        submissionId: "2",
        content: "First draft of article 1 completed and sent for review",
        createdAt: "2024-01-15T09:15:00Z",
        createdBy: "Admin User",
      },
    ],
  },
  {
    id: "3",
    type: "promotional-content",
    clientName: "Mike Chen",
    clientEmail: "mike@fashionbrand.com",
    company: "Fashion Brand",
    status: "completed",
    package: "growth",
    createdAt: "2024-01-10T09:45:00Z",
    updatedAt: "2024-01-13T16:20:00Z",
    formData: {
      marketingGoals: [
        "Increase brand awareness",
        "Boost sales",
        "Build social media following",
      ],
      targetAudience: "Fashion-forward millennials and Gen Z",
      contentTypes: ["Social media posts", "Email campaigns", "Ad copy"],
      platforms: ["Instagram", "Facebook", "Email"],
      toneStyle: "bold",
    },
    notes: [
      {
        id: "n4",
        submissionId: "3",
        content:
          "Campaign launched successfully. 24 social posts and 4 email campaigns delivered.",
        createdAt: "2024-01-13T16:20:00Z",
        createdBy: "Admin User",
      },
    ],
  },
  {
    id: "4",
    type: "website-building",
    clientName: "Lisa Wang",
    clientEmail: "lisa@consultingfirm.com",
    company: "Consulting Firm",
    status: "in-progress",
    package: "enterprise",
    createdAt: "2024-01-12T11:15:00Z",
    updatedAt: "2024-01-14T14:30:00Z",
    formData: {
      projectType: "business",
      pages: "11-20",
      features: [
        "Contact Form",
        "User Accounts",
        "Analytics",
        "SEO Optimization",
      ],
      timeline: "1-2months",
      designStyle: "corporate",
      budget: "₹45,000",
    },
    notes: [
      {
        id: "n5",
        submissionId: "4",
        content: "Wireframes approved. Moving to design phase.",
        createdAt: "2024-01-14T14:30:00Z",
        createdBy: "Admin User",
      },
    ],
  },
];

// Mock clients data
export const mockClients: Client[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john@techstartup.com",
    phone: "+91 98765 43210",
    company: "Tech Startup Inc.",
    totalSubmissions: 1,
    totalValue: 20000,
    status: "active",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@healthwellness.com",
    phone: "+91 87654 32109",
    company: "Health & Wellness Co.",
    totalSubmissions: 2,
    totalValue: 16000,
    status: "active",
    createdAt: "2024-01-14T14:20:00Z",
  },
  {
    id: "3",
    name: "Mike Chen",
    email: "mike@fashionbrand.com",
    company: "Fashion Brand",
    totalSubmissions: 1,
    totalValue: 7000,
    status: "active",
    createdAt: "2024-01-10T09:45:00Z",
  },
  {
    id: "4",
    name: "Lisa Wang",
    email: "lisa@consultingfirm.com",
    company: "Consulting Firm",
    totalSubmissions: 1,
    totalValue: 45000,
    status: "active",
    createdAt: "2024-01-12T11:15:00Z",
  },
];
