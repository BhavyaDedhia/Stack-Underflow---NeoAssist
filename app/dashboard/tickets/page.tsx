import Link from "next/link"
import { ArrowUpRight, Clock, Filter, Plus, Search, Ticket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Sample ticket data
const tickets = [
  {
    id: "TKT-001",
    subject: "Unable to access mobile banking",
    status: "open",
    priority: "high",
    created: "Mar 14, 2025",
    lastUpdated: "Mar 15, 2025",
  },
  {
    id: "TKT-002",
    subject: "Question about international transfer fees",
    status: "awaiting",
    priority: "medium",
    created: "Mar 10, 2025",
    lastUpdated: "Mar 12, 2025",
  },
  {
    id: "TKT-003",
    subject: "Request for credit limit increase",
    status: "closed",
    priority: "low",
    created: "Feb 28, 2025",
    lastUpdated: "Mar 05, 2025",
  },
  {
    id: "TKT-004",
    subject: "Unauthorized transaction dispute",
    status: "closed",
    priority: "high",
    created: "Feb 20, 2025",
    lastUpdated: "Feb 25, 2025",
  },
  {
    id: "TKT-005",
    subject: "Change of address request",
    status: "closed",
    priority: "medium",
    created: "Feb 15, 2025",
    lastUpdated: "Feb 18, 2025",
  },
]

// Helper function to get badge variant based on status
const getStatusBadge = (status: string) => {
  switch (status) {
    case "open":
      return "default"
    case "awaiting":
      return "warning"
    case "closed":
      return "secondary"
    default:
      return "default"
  }
}

// Helper function to get badge variant based on priority
const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return "destructive"
    case "medium":
      return "warning"
    case "low":
      return "outline"
    default:
      return "default"
  }
}

export default function TicketsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Support Tickets</h2>
          <p className="text-muted-foreground">View and manage your support requests.</p>
        </div>
        <Link href="/dashboard/tickets/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Ticket
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Tickets</CardTitle>
          <CardDescription>Track the status of your support requests.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input placeholder="Search tickets..." className="h-9" type="search" />
              <Button size="sm" variant="ghost">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Select defaultValue="all">
                <SelectTrigger className="h-9 w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="awaiting">Awaiting Response</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="h-9 w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Button size="sm" variant="outline" className="h-9">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>

          <div className="mt-6 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket ID</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium">{ticket.id}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadge(ticket.status)}>
                        {ticket.status === "awaiting"
                          ? "Awaiting Response"
                          : ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getPriorityBadge(ticket.priority)}>
                        {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{ticket.created}</TableCell>
                    <TableCell>{ticket.lastUpdated}</TableCell>
                    <TableCell className="text-right">
                      <Link href={`/dashboard/tickets/${ticket.id}`}>
                        <Button variant="ghost" size="sm">
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <strong>5</strong> of <strong>5</strong> tickets
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates on your support tickets.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="mr-4 mt-0.5 rounded-full bg-primary/10 p-2">
                <Ticket className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Ticket TKT-001 updated</p>
                <p className="text-sm text-muted-foreground">
                  Support agent has responded to your ticket about mobile banking access.
                </p>
                <div className="flex items-center pt-1">
                  <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-0.5 rounded-full bg-primary/10 p-2">
                <Ticket className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Ticket TKT-002 updated</p>
                <p className="text-sm text-muted-foreground">
                  Your ticket about international transfer fees has been assigned to a specialist.
                </p>
                <div className="flex items-center pt-1">
                  <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">1 day ago</span>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-0.5 rounded-full bg-green-500/10 p-2">
                <Ticket className="h-4 w-4 text-green-500" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Ticket TKT-003 closed</p>
                <p className="text-sm text-muted-foreground">
                  Your request for credit limit increase has been processed and completed.
                </p>
                <div className="flex items-center pt-1">
                  <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

