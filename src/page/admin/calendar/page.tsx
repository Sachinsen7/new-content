import { ProtectedRoute } from "@/components/auth/protected-route"
import { AdminHeader } from "@/components/admin/admin-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Plus } from "lucide-react"

export default function AdminCalendarPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Client Consultation - Tech Startup Inc.",
      date: "2024-01-16",
      time: "10:00 AM",
      type: "consultation",
      client: "John Smith",
    },
    {
      id: 2,
      title: "Project Review - Health & Wellness Co.",
      date: "2024-01-16",
      time: "2:00 PM",
      type: "review",
      client: "Sarah Johnson",
    },
    {
      id: 3,
      title: "Content Strategy Meeting",
      date: "2024-01-17",
      time: "11:00 AM",
      type: "meeting",
      client: "Internal",
    },
    {
      id: 4,
      title: "Website Launch - Consulting Firm",
      date: "2024-01-18",
      time: "3:00 PM",
      type: "launch",
      client: "Lisa Wang",
    },
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "consultation":
        return "default"
      case "review":
        return "secondary"
      case "meeting":
        return "outline"
      case "launch":
        return "destructive"
      default:
        return "default"
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <AdminHeader />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Calendar & Schedule</h1>
              <p className="text-muted-foreground">Manage your appointments and project deadlines</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
          </div>

          {/* Today's Schedule */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Today's Schedule
              </CardTitle>
              <CardDescription>Tuesday, January 16, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents
                  .filter((event) => event.date === "2024-01-16")
                  .map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <User className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{event.client}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant={getEventTypeColor(event.type) as any}>{event.type}</Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{event.title}</p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                          <span>{event.time}</span>
                          <span>{event.client}</span>
                        </div>
                      </div>
                      <Badge variant={getEventTypeColor(event.type) as any} className="text-xs">
                        {event.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Deadlines</CardTitle>
                <CardDescription>Upcoming project milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Website Design Approval</p>
                      <p className="text-xs text-muted-foreground">Tech Startup Inc. - Website Building</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Jan 18</p>
                      <Badge variant="secondary" className="text-xs">
                        2 days
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Content Calendar Review</p>
                      <p className="text-xs text-muted-foreground">Health & Wellness Co. - Blog Writing</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Jan 20</p>
                      <Badge variant="outline" className="text-xs">
                        4 days
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Campaign Launch</p>
                      <p className="text-xs text-muted-foreground">Fashion Brand - Promotional Content</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Jan 22</p>
                      <Badge variant="default" className="text-xs">
                        6 days
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
