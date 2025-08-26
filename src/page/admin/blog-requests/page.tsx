

import { useState } from "react";
import { ProtectedRoute } from "@/components/auth/protected-route";
import { AdminLayout } from "@/components/admin/admin-layout";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockSubmissions, type Submission, type Note } from "@/lib/mock-data";
import {
  Eye,
  MessageSquare,
  Plus,
  Search,
  Filter,
  Download,
} from "lucide-react";

export default function BlogRequestsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>(
    mockSubmissions.filter((sub) => sub.type === "blog-writing")
  );
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);
  const [newNote, setNewNote] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      submission.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.clientEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.company?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || submission.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const updateSubmissionStatus = (id: string, status: Submission["status"]) => {
    setSubmissions((prev) =>
      prev.map((sub) =>
        sub.id === id
          ? { ...sub, status, updatedAt: new Date().toISOString() }
          : sub
      )
    );
  };

  const addNote = (submissionId: string) => {
    if (!newNote.trim()) return;

    const note: Note = {
      id: Date.now().toString(),
      submissionId,
      content: newNote,
      createdAt: new Date().toISOString(),
      createdBy: "Admin User",
    };

    setSubmissions((prev) =>
      prev.map((sub) =>
        sub.id === submissionId
          ? {
              ...sub,
              notes: [...sub.notes, note],
              updatedAt: new Date().toISOString(),
            }
          : sub
      )
    );

    setNewNote("");
  };

  const exportToCSV = () => {
    const headers = [
      "Client Name",
      "Email",
      "Company",
      "Package",
      "Status",
      "Created Date",
    ];
    const csvContent = [
      headers.join(","),
      ...filteredSubmissions.map((sub) =>
        [
          sub.clientName,
          sub.clientEmail,
          sub.company || "",
          sub.package,
          sub.status,
          new Date(sub.createdAt).toLocaleDateString(),
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "blog-requests.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-[#88adce] text-[#000000]";
      case "in-progress":
        return "bg-[#4d93cb] text-[#eceafa]";
      case "completed":
        return "border-[#88adce] text-[#88adce] bg-transparent";
      case "cancelled":
        return "bg-red-600 text-white";
      default:
        return "bg-[#88adce] text-[#000000]";
    }
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-[#eceafa]">
                Blog Requests
              </h1>
              <p className="text-[#88adce]">
                Manage blog writing service requests
              </p>
            </div>
            <Button
              onClick={exportToCSV}
              className="bg-[#88adce] text-[#000000] hover:bg-[#4d93cb]"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>

          {/* Filters */}
          <Card className="mb-6 bg-[#000000] border-[#88adce]/20">
            <CardHeader>
              <CardTitle className="text-lg text-[#eceafa]">
                Filters & Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="search" className="text-[#eceafa]">
                    Search
                  </Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-[#88adce]" />
                    <Input
                      id="search"
                      placeholder="Search by name, email, or company..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-[#000000] border-[#88adce]/30 text-[#eceafa] placeholder:text-[#88adce]/60"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="status-filter" className="text-[#eceafa]">
                    Status
                  </Label>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="bg-[#000000] border-[#88adce]/30 text-[#eceafa]">
                      <SelectValue placeholder="All statuses" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#000000] border-[#88adce]/30">
                      <SelectItem
                        value="all"
                        className="text-[#eceafa] hover:bg-[#88adce]/10"
                      >
                        All Statuses
                      </SelectItem>
                      <SelectItem
                        value="new"
                        className="text-[#eceafa] hover:bg-[#88adce]/10"
                      >
                        New
                      </SelectItem>
                      <SelectItem
                        value="in-progress"
                        className="text-[#eceafa] hover:bg-[#88adce]/10"
                      >
                        In Progress
                      </SelectItem>
                      <SelectItem
                        value="completed"
                        className="text-[#eceafa] hover:bg-[#88adce]/10"
                      >
                        Completed
                      </SelectItem>
                      <SelectItem
                        value="cancelled"
                        className="text-[#eceafa] hover:bg-[#88adce]/10"
                      >
                        Cancelled
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button
                    variant="outline"
                    className="w-full border-[#88adce]/30 text-[#eceafa] hover:bg-[#88adce]/10 bg-transparent"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Apply Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submissions Table */}
          <Card className="bg-[#000000] border-[#88adce]/20">
            <CardHeader>
              <CardTitle className="text-[#eceafa]">
                Blog Writing Requests ({filteredSubmissions.length})
              </CardTitle>
              <CardDescription className="text-[#88adce]">
                Complete list of blog writing service requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#88adce]/20">
                    <TableHead className="text-[#88adce]">Client</TableHead>
                    <TableHead className="text-[#88adce]">Package</TableHead>
                    <TableHead className="text-[#88adce]">Status</TableHead>
                    <TableHead className="text-[#88adce]">Created</TableHead>
                    <TableHead className="text-[#88adce]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubmissions.map((submission) => (
                    <TableRow
                      key={submission.id}
                      className="border-[#88adce]/20"
                    >
                      <TableCell>
                        <div>
                          <p className="font-medium text-[#eceafa]">
                            {submission.clientName}
                          </p>
                          <p className="text-sm text-[#88adce]">
                            {submission.clientEmail}
                          </p>
                          {submission.company && (
                            <p className="text-sm text-[#88adce]">
                              {submission.company}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="capitalize text-[#eceafa]">
                        {submission.package}
                      </TableCell>
                      <TableCell>
                        <Select
                          value={submission.status}
                          onValueChange={(value) =>
                            updateSubmissionStatus(
                              submission.id,
                              value as Submission["status"]
                            )
                          }
                        >
                          <SelectTrigger className="w-32 bg-transparent border-none p-0">
                            <Badge
                              className={getStatusColor(submission.status)}
                            >
                              {submission.status}
                            </Badge>
                          </SelectTrigger>
                          <SelectContent className="bg-[#000000] border-[#88adce]/30">
                            <SelectItem
                              value="new"
                              className="text-[#eceafa] hover:bg-[#88adce]/10"
                            >
                              New
                            </SelectItem>
                            <SelectItem
                              value="in-progress"
                              className="text-[#eceafa] hover:bg-[#88adce]/10"
                            >
                              In Progress
                            </SelectItem>
                            <SelectItem
                              value="completed"
                              className="text-[#eceafa] hover:bg-[#88adce]/10"
                            >
                              Completed
                            </SelectItem>
                            <SelectItem
                              value="cancelled"
                              className="text-[#eceafa] hover:bg-[#88adce]/10"
                            >
                              Cancelled
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-[#eceafa]">
                        {new Date(submission.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  setSelectedSubmission(submission)
                                }
                                className="border-[#88adce]/30 text-[#eceafa] hover:bg-[#88adce]/10"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#000000] border-[#88adce]/30 text-[#eceafa]">
                              <DialogHeader>
                                <DialogTitle className="text-[#eceafa]">
                                  Blog Request Details
                                </DialogTitle>
                                <DialogDescription className="text-[#88adce]">
                                  Blog writing request from{" "}
                                  {submission.clientName}
                                </DialogDescription>
                              </DialogHeader>

                              {selectedSubmission && (
                                <div className="space-y-6">
                                  {/* Client Info */}
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3 text-[#eceafa]">
                                      Client Information
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label className="text-[#88adce]">
                                          Name
                                        </Label>
                                        <p className="text-sm text-[#eceafa]">
                                          {selectedSubmission.clientName}
                                        </p>
                                      </div>
                                      <div>
                                        <Label className="text-[#88adce]">
                                          Email
                                        </Label>
                                        <p className="text-sm text-[#eceafa]">
                                          {selectedSubmission.clientEmail}
                                        </p>
                                      </div>
                                      {selectedSubmission.clientPhone && (
                                        <div>
                                          <Label className="text-[#88adce]">
                                            Phone
                                          </Label>
                                          <p className="text-sm text-[#eceafa]">
                                            {selectedSubmission.clientPhone}
                                          </p>
                                        </div>
                                      )}
                                      {selectedSubmission.company && (
                                        <div>
                                          <Label className="text-[#88adce]">
                                            Company
                                          </Label>
                                          <p className="text-sm text-[#eceafa]">
                                            {selectedSubmission.company}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  {/* Form Data */}
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3 text-[#eceafa]">
                                      Project Details
                                    </h3>
                                    <div className="bg-[#88adce]/5 p-4 rounded-lg border border-[#88adce]/20">
                                      <pre className="text-sm whitespace-pre-wrap text-[#eceafa]">
                                        {JSON.stringify(
                                          selectedSubmission.formData,
                                          null,
                                          2
                                        )}
                                      </pre>
                                    </div>
                                  </div>

                                  {/* Notes */}
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3 text-[#eceafa]">
                                      Notes ({selectedSubmission.notes.length})
                                    </h3>
                                    <div className="space-y-3">
                                      {selectedSubmission.notes.map((note) => (
                                        <div
                                          key={note.id}
                                          className="border border-[#88adce]/20 rounded-lg p-3"
                                        >
                                          <p className="text-sm text-[#eceafa]">
                                            {note.content}
                                          </p>
                                          <div className="flex justify-between items-center mt-2 text-xs text-[#88adce]">
                                            <span>By {note.createdBy}</span>
                                            <span>
                                              {new Date(
                                                note.createdAt
                                              ).toLocaleString()}
                                            </span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Add Note */}
                                    <div className="mt-4">
                                      <Label
                                        htmlFor="new-note"
                                        className="text-[#88adce]"
                                      >
                                        Add Note
                                      </Label>
                                      <Textarea
                                        id="new-note"
                                        value={newNote}
                                        onChange={(e) =>
                                          setNewNote(e.target.value)
                                        }
                                        placeholder="Add a note about this submission..."
                                        rows={3}
                                        className="bg-[#000000] border-[#88adce]/30 text-[#eceafa] placeholder:text-[#88adce]/60"
                                      />
                                      <Button
                                        onClick={() =>
                                          addNote(selectedSubmission.id)
                                        }
                                        className="mt-2 bg-[#88adce] text-[#000000] hover:bg-[#4d93cb]"
                                        size="sm"
                                      >
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add Note
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>

                          <Button
                            variant="outline"
                            size="sm"
                            className="border-[#88adce]/30 text-[#eceafa] hover:bg-[#88adce]/10 bg-transparent"
                          >
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
      </AdminLayout>
    </ProtectedRoute>
  );
}
