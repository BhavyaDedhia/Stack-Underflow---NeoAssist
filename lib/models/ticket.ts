import type { ObjectId } from "mongodb"

export interface Ticket {
  _id?: ObjectId
  ticketId: string
  userId: ObjectId | string
  subject: string
  description: string
  category: "account" | "transaction" | "card" | "loan" | "technical" | "other"
  priority: "low" | "medium" | "high"
  status: "open" | "awaiting" | "in_progress" | "resolved" | "closed"
  relatedAccountId?: ObjectId | string
  attachments?: string[] // Array of file URLs
  createdAt: Date
  updatedAt: Date
  closedAt?: Date
}

export interface TicketResponse {
  _id?: ObjectId
  ticketId: ObjectId | string
  responderId: ObjectId | string
  responderType: "user" | "agent"
  message: string
  attachments?: string[] // Array of file URLs
  createdAt: Date
  updatedAt: Date
}

