import { type NextRequest, NextResponse } from "next/server"

import clientPromise from "@/lib/mongodb"

// Get all accounts for the current user
export async function GET(request: NextRequest) {
  try {
    // In a real app, you would get the user ID from the session
    const userId = "sample-user-id" // Placeholder

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db()

    // Find accounts for the user
    const accounts = await db.collection("accounts").find({ userId }).toArray()

    return NextResponse.json({ accounts })
  } catch (error) {
    console.error("Error fetching accounts:", error)
    return NextResponse.json({ error: "An error occurred while fetching accounts" }, { status: 500 })
  }
}

