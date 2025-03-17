import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { ObjectId } from "mongodb"

import clientPromise from "@/lib/mongodb"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db()

    // Find user by email
    const user = await db.collection("users").findOne({ email })

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // In a real app, you would verify the password hash here
    // For demo purposes, we'll just simulate a successful login

    // Find user credentials
    const userCredentials = await db.collection("userCredentials").findOne({
      userId: user._id,
    })

    if (!userCredentials) {
      return NextResponse.json({ error: "User credentials not found" }, { status: 401 })
    }

    // Update last login time
    await db.collection("userCredentials").updateOne(
      { _id: userCredentials._id },
      {
        $set: {
          lastLogin: new Date(),
          failedLoginAttempts: 0,
        },
      },
    )

    // Create a session
    const sessionId = new ObjectId().toString()
    const session = {
      sessionId,
      userId: user._id,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    }

    await db.collection("sessions").insertOne(session)

    // Set session cookie
    cookies().set({
      name: "sessionId",
      value: sessionId,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    })

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 })
  }
}

