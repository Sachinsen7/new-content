

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth/auth-provider";
import {
  LayoutDashboard,
  Globe,
  FileText,
  Megaphone,
  Settings,
  LogOut,
  User,
  Menu,
  X,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Website Requests", href: "/admin/website-requests", icon: Globe },
  { name: "Blog Requests", href: "/admin/blog-requests", icon: FileText },
  {
    name: "Promotion Requests",
    href: "/admin/promotion-requests",
    icon: Megaphone,
  },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#eceafa]">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-[#000000] border-r border-[#88adce]/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-[#88adce]/20">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-[#88adce] flex items-center justify-center">
                <span className="text-[#000000] font-bold text-sm">CC</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-[#eceafa]">
                  Admin Panel
                </h1>
                <p className="text-xs text-[#88adce]">Code & Content Studio</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-[#eceafa] hover:bg-[#88adce]/10"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#88adce] text-[#000000]"
                      : "text-[#eceafa] hover:bg-[#88adce]/10 hover:text-[#88adce]"
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User info */}
          <div className="border-t border-[#88adce]/20 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-8 w-8 rounded-full bg-[#4d93cb] flex items-center justify-center">
                <User className="h-4 w-4 text-[#eceafa]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#eceafa] truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-[#88adce] truncate">{user?.email}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="w-full border-[#88adce]/30 text-[#eceafa] hover:bg-[#88adce]/10 bg-transparent"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-30 bg-[#000000]/95 backdrop-blur border-b border-[#88adce]/20">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-[#eceafa] hover:bg-[#88adce]/10"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex-1" />
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
