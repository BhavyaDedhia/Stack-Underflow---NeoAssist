import type { ObjectId } from "mongodb"

export interface Account {
  _id?: ObjectId
  accountNumber: string
  userId: ObjectId | string
  accountType: "savings" | "checking" | "investment"
  balance: number
  availableBalance: number
  currency: string
  isActive: boolean
  openDate: Date
  lastActivity: Date
  interestRate?: number // For savings and investment accounts
  monthlyFee?: number // For checking accounts
  overdraftProtection?: boolean // For checking accounts
  riskLevel?: "low" | "moderate" | "high" // For investment accounts
  createdAt: Date
  updatedAt: Date
}

export interface Transaction {
  _id?: ObjectId
  transactionId: string
  accountId: ObjectId | string
  amount: number
  type: "credit" | "debit"
  description: string
  category?: string
  date: Date
  balance: number
  status: "pending" | "completed" | "failed" | "reversed"
  reference?: string
  createdAt: Date
  updatedAt: Date
}

