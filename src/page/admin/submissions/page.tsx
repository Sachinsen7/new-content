"use client"

import { useState } from "react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { mockSubmissions, type Submission, type Note } from "@/lib/mock-data"
import { Eye, MessageSquare, Plus, Search, Filter } from "lucide-react"

export default function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>(mockSubmissions)
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [newNote, setNewNote] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      submission.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.clientEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.company?.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || submission.status === statusFilter
    const matchesType = typeFilter === "all" || submission.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  const updateSubmissionStatus = (id: string, status: Submission["status"]) => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status, updatedAt: new Date().toISOString() } : sub)),
    )
  }

  const addNote = (submissionId: string) => {
    if (!newNote.trim()) return

    const note: Note = {
      id: Date.now().toString(),
      submissionId,
      content: newNote,
      createdAt: new Date().toISOString(),
      createdBy: "Admin User",
    }

    setSubmissions((prev) =>
      prev.map((sub) =>
        sub.id === submissionId ? { ...sub, notes: [...sub.notes, note], updatedAt: new Date().toISOString() } : sub,
      ),
    )

    setNewNote("")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "default"
      case "in-progress":
        return "secondary"
      case "completed":
        return "outline"
      case "cancelled":
        return "destructive"
      default:
        return "default"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "website-building":
        return "Website Building"
      case "blog-writing":
        return "Blog Writing"
      case "promotional-content":
        return "Promotional Content"
      default:
        return type
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <AdminHeader />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Submissions Management</h1>
              <p className="text-muted-foreground">Manage client requests and project submissions</p>
            </div>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Filters & Search</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Search by name, email, or company..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="status-filter">Status</Label>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="type-filter">Service Type</Label>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="website-building">Website Building</SelectItem>
                      <SelectItem value="blog-writing">Blog Writing</SelectItem>
                      <SelectItem value="promotional-content">Promotional Content</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Filter className="h-4 w-4 mr-2" />
                    Apply Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submissions Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Submissions ({filteredSubmissions.length})</CardTitle>
              <CardDescription>Complete list of client submissions and requests</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Service Type</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubmissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{submission.clientName}</p>
                          <p className="text-sm text-muted-foreground">{submission.clientEmail}</p>
                          {submission.company && <p className="text-sm text-muted-foreground">{submission.company}</p>}
                        </div>
                      </TableCell>
                      <TableCell>{getTypeLabel(submission.type)}</TableCell>
                      <TableCell className="capitalize">{submission.package}</TableCell>
                      <TableCell>
                        <Select
                          value={submission.status}
                          onValueChange={(value) =>
                            updateSubmissionStatus(submission.id, value as Submission["status"])
                          }
                        >
                          <SelectTrigger className="w-32">
                            <Badge variant={getStatusColor(submission.status) as any}>{submission.status}</Badge>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>{new Date(submission.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => setSelectedSubmission(submission)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Submission Details</DialogTitle>
                                <DialogDescription>
                                  {getTypeLabel(submission.type)} request from {submission.clientName}
                                </DialogDescription>
                              </DialogHeader>

                              {selectedSubmission && (
                                <div className="space-y-6">
                                  {/* Client Info */}
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3">Client Information</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label>Name</Label>
                                        <p className="text-sm">{selectedSubmission.clientName}</p>
                                      </div>
                                      <div>
                                        <Label>Email</Label>
                                        <p className="text-sm">{selectedSubmission.clientEmail}</p>
                                      </div>
                                      {selectedSubmission.clientPhone && (
                                        <div>
                                          <Label>Phone</Label>
                                          <p className="text-sm">{selectedSubmission.clientPhone}</p>
                                        </div>
                                      )}
                                      {selectedSubmission.company && (
                                        <div>
                                          <Label>Company</Label>
                                          <p className="text-sm">{selectedSubmission.company}</p>
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  {/* Form Data */}
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                                    <div className="bg-muted/50 p-4 rounded-lg">
                                      <pre className="text-sm whitespace-pre-wrap">
                                        {JSON.stringify(selectedSubmission.formData, null, 2)}
                                      </pre>
                                    </div>
                                  </div>

                                  {/* Notes */}
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3">
                                      Notes ({selectedSubmission.notes.length})
                                    </h3>
                                    <div className="space-y-3">
                                      {selectedSubmission.notes.map((note) => (
                                        <div key={note.id} className="border rounded-lg p-3">
                                          <p className="text-sm">{note.content}</p>
                                          <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
                                            <span>By {note.createdBy}</span>
                                            <span>{new Date(note.createdAt).toLocaleString()}</span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Add Note */}
                                    <div className="mt-4">
                                      <Label htmlFor="new-note">Add Note</Label>
                                      <Textarea
                                        id="new-note"
                                        value={newNote}
                                        onChange={(e) => setNewNote(e.target.value)}
                                        placeholder="Add a note about this submission..."
                                        rows={3}
                                      />
                                      <Button onClick={() => addNote(selectedSubmission.id)} className="mt-2" size="sm">
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add Note
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>

                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  )
}
