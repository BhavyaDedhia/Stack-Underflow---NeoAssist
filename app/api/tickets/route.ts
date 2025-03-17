import { type NextRequest, NextResponse } from "next/server"

import clientPromise from "@/lib/mongodb"
import type { Ticket } from "@/lib/models/ticket"

// Get all tickets for the current user
export async function GET(request: NextRequest) {
  try {
    // In a real app, you would get the user ID from the session
    const userId = "sample-user-id" // Placeholder

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db()

    // Find tickets for the user
    const tickets = await db.collection("tickets").find({ userId }).sort({ createdAt: -1 }).toArray()

    return NextResponse.json({ tickets })
  } catch (error) {
    console.error("Error fetching tickets:", error)
    return NextResponse.json({ error: "An error occurred while fetching tickets" }, { status: 500 })
  }
}

// Create a new ticket
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // In a real app, you would get the user ID from the session
    const userId = "sample-user-id" // Placeholder

    // Generate a ticket ID
    const ticketId = `TKT-${Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0")}`

    // Create ticket object
    const ticket: Ticket = {
      ticketId,
      userId,
      subject: data.subject,
      description: data.description,
      category: data.category,
      priority: data.priority,
      status: "open",
      relatedAccountId: data.accountId,
      attachments: data.attachments || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db()

    // Insert the ticket
    const result = await db.collection("tickets").insertOne(ticket)

    return NextResponse.json({
      success: true,
      ticketId,
      _id: result.insertedId,
    })
  } catch (error) {
    console.error("Error creating ticket:", error)
    return NextResponse.json({ error: "An error occurred while creating the ticket" }, { status: 500 })
  }
}

