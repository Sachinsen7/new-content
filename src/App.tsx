import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import HomePage from "@/page/home/page";
import AboutPage from "@/page/about/page";
import ContactPage from "@/page/contact/page";
import PrivacyPage from "@/page/privacy/page";
import TermsPage from "@/page/terms/page";
import WebsiteBuildingPage from "@/page/services/website-building/page";
import BlogWritingPage from "@/page/services/blog-writing/page";
import PromotionalContentPage from "@/page/services/promotional-content/page";
import WebsiteBuildingFormPage from "@/page/services/website-building/form/page";
import BlogWritingFormPage from "@/page/services/blog-writing/form/page";
import PromotionalContentFormPage from "@/page/services/promotional-content/form/page";
import AdminLoginPage from "@/page/admin/login/page";
import AdminDashboardPage from "@/page/admin/dashboard/page";
import AdminSubmissionsPage from "@/page/admin/submissions/page";
import AdminClientsPage from "@/page/admin/clients/page";
import AdminReportsPage from "@/page/admin/reports/page";
import AdminSettingsPage from "@/page/admin/settings/page";
import AdminCalendarPage from "@/page/admin/calendar/page";
import AdminWebsiteRequestsPage from "@/page/admin/website-requests/page";
import AdminBlogRequestsPage from "@/page/admin/blog-requests/page";
import AdminPromotionRequestsPage from "@/page/admin/promotion-requests/page";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Service Pages */}
          <Route
            path="/services/website-building"
            element={<WebsiteBuildingPage />}
          />
          <Route path="/services/blog-writing" element={<BlogWritingPage />} />
          <Route
            path="/services/promotional-content"
            element={<PromotionalContentPage />}
          />

          {/* Service Form Pages */}
          <Route
            path="/services/website-building/form"
            element={<WebsiteBuildingFormPage />}
          />
          <Route
            path="/services/blog-writing/form"
            element={<BlogWritingFormPage />}
          />
          <Route
            path="/services/promotional-content/form"
            element={<PromotionalContentFormPage />}
          />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/submissions" element={<AdminSubmissionsPage />} />
          <Route path="/admin/clients" element={<AdminClientsPage />} />
          <Route path="/admin/reports" element={<AdminReportsPage />} />
          <Route path="/admin/settings" element={<AdminSettingsPage />} />
          <Route path="/admin/calendar" element={<AdminCalendarPage />} />
          <Route
            path="/admin/website-requests"
            element={<AdminWebsiteRequestsPage />}
          />
          <Route
            path="/admin/blog-requests"
            element={<AdminBlogRequestsPage />}
          />
          <Route
            path="/admin/promotion-requests"
            element={<AdminPromotionRequestsPage />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
