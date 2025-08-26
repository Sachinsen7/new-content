import { ProtectedRoute } from "@/components/auth/protected-route";
import { AdminLayout } from "@/components/admin/admin-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Users,
  MessageSquare,
  TrendingUp,
  Eye,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminDashboardPage() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-[#eceafa]">
              Welcome to Admin Dashboard
            </h1>
            <p className="text-[#88adce]">
              Manage your Code & Content Studio submissions and client requests
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-[#000000] border-[#88adce]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#eceafa]">
                  Total Submissions
                </CardTitle>
                <FileText className="h-4 w-4 text-[#88adce]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#eceafa]">24</div>
                <p className="text-xs text-[#88adce]">+3 from last week</p>
              </CardContent>
            </Card>

            <Card className="bg-[#000000] border-[#88adce]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#eceafa]">
                  Website Requests
                </CardTitle>
                <Users className="h-4 w-4 text-[#88adce]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#eceafa]">12</div>
                <p className="text-xs text-[#88adce]">+2 from last week</p>
              </CardContent>
            </Card>

            <Card className="bg-[#000000] border-[#88adce]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#eceafa]">
                  Blog Requests
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-[#88adce]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#eceafa]">8</div>
                <p className="text-xs text-[#88adce]">+1 from last week</p>
              </CardContent>
            </Card>

            <Card className="bg-[#000000] border-[#88adce]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#eceafa]">
                  Promo Requests
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-[#88adce]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#eceafa]">4</div>
                <p className="text-xs text-[#88adce]">Same as last week</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-[#000000] border-[#88adce]/20">
              <CardHeader>
                <CardTitle className="text-[#eceafa]">
                  Recent Submissions
                </CardTitle>
                <CardDescription className="text-[#88adce]">
                  Latest client requests and inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      type: "Website Building",
                      client: "Tech Startup Inc.",
                      status: "new",
                      date: "2 hours ago",
                    },
                    {
                      id: 2,
                      type: "Blog Writing",
                      client: "Health & Wellness Co.",
                      status: "in-progress",
                      date: "1 day ago",
                    },
                    {
                      id: 3,
                      type: "Promotional Content",
                      client: "Fashion Brand",
                      status: "completed",
                      date: "3 days ago",
                    },
                  ].map((submission) => (
                    <div
                      key={submission.id}
                      className="flex items-center justify-between p-3 border border-[#88adce]/20 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-[#eceafa]">
                          {submission.client}
                        </p>
                        <p className="text-sm text-[#88adce]">
                          {submission.type}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            submission.status === "new"
                              ? "default"
                              : submission.status === "in-progress"
                              ? "secondary"
                              : "outline"
                          }
                          className={
                            submission.status === "new"
                              ? "bg-[#88adce] text-[#000000]"
                              : submission.status === "in-progress"
                              ? "bg-[#4d93cb] text-[#eceafa]"
                              : "border-[#88adce] text-[#88adce]"
                          }
                        >
                          {submission.status}
                        </Badge>
                        <span className="text-xs text-[#88adce]">
                          {submission.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="w-full mt-4 bg-[#88adce] text-[#000000] hover:bg-[#4d93cb]"
                >
                  <Link to="/admin/website-requests">View All Submissions</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#000000] border-[#88adce]/20">
              <CardHeader>
                <CardTitle className="text-[#eceafa]">Quick Actions</CardTitle>
                <CardDescription className="text-[#88adce]">
                  Common administrative tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="h-20 flex-col border-[#88adce]/30 text-[#eceafa] hover:bg-[#88adce]/10 bg-transparent"
                  >
                    <Link to="/admin/website-requests">
                      <Eye className="h-6 w-6 mb-2" />
                      View Requests
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-20 flex-col border-[#88adce]/30 text-[#eceafa] hover:bg-[#88adce]/10 bg-transparent"
                  >
                    <Link to="/admin/clients">
                      <Users className="h-6 w-6 mb-2" />
                      Manage Clients
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-20 flex-col border-[#88adce]/30 text-[#eceafa] hover:bg-[#88adce]/10 bg-transparent"
                  >
                    <Link to="/admin/reports">
                      <TrendingUp className="h-6 w-6 mb-2" />
                      View Reports
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col border-[#88adce]/30 text-[#eceafa] hover:bg-[#88adce]/10 bg-transparent"
                  >
                    <Download className="h-6 w-6 mb-2" />
                    Export Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Status */}
          <Card className="bg-[#000000] border-[#88adce]/20">
            <CardHeader>
              <CardTitle className="text-[#eceafa]">System Status</CardTitle>
              <CardDescription className="text-[#88adce]">
                Current system health and performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-[#22C55E]"></div>
                  <span className="text-sm text-[#eceafa]">
                    Website Forms: Online
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-[#22C55E]"></div>
                  <span className="text-sm text-[#eceafa]">
                    Email System: Online
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-[#22C55E]"></div>
                  <span className="text-sm text-[#eceafa]">
                    Admin Panel: Online
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
