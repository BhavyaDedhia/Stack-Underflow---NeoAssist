import { type NextRequest, NextResponse } from "next/server"

import clientPromise from "@/lib/mongodb"

// Get transactions for a specific account or all accounts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const accountId = searchParams.get("accountId")

    // In a real app, you would get the user ID from the session
    const userId = "sample-user-id" // Placeholder

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db()

    const query: any = {}

    if (accountId) {
      // Get transactions for a specific account
      query.accountId = accountId
    } else {
      // Get transactions for all user accounts
      // First, get all user accounts
      const accounts = await db.collection("accounts").find({ userId }).project({ _id: 1 }).toArray()

      const accountIds = accounts.map((account) => account._id)
      query.accountId = { $in: accountIds }
    }

    // Find transactions
    const transactions = await db
      .collection("transactions")
      .find(query)
      .sort({ date: -1 })
      .limit(50) // Limit to 50 most recent transactions
      .toArray()

    return NextResponse.json({ transactions })
  } catch (error) {
    console.error("Error fetching transactions:", error)
    return NextResponse.json({ error: "An error occurred while fetching transactions" }, { status: 500 })
  }
}

