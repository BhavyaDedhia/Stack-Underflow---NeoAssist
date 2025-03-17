import type { ObjectId } from "mongodb"

export interface User {
  _id?: ObjectId
  firstName: string
  lastName: string
  email: string
  phone: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  dateOfBirth: Date
  customerSince: Date
  customerId: string
  faceId?: string // Reference to stored face recognition data
  accounts: string[] // References to account IDs
  communicationPreferences: {
    email: boolean
    sms: boolean
    marketing: boolean
  }
  createdAt: Date
  updatedAt: Date
}

export interface UserCredentials {
  _id?: ObjectId
  userId: ObjectId | string
  passwordHash: string
  passwordSalt: string
  lastLogin: Date
  failedLoginAttempts: number
  isLocked: boolean
  twoFactorEnabled: boolean
  twoFactorMethods: string[] // e.g., ["face", "sms"]
  createdAt: Date
  updatedAt: Date
}

