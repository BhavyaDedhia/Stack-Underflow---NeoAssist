import { ArrowDownUp, ArrowUpRight, Calendar, Download, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample transaction data
const transactions = [
  {
    id: "T12345",
    date: "Mar 15, 2025",
    description: "Salary Deposit",
    amount: 3500.0,
    type: "credit",
    balance: 5872.34,
    account: "Primary Checking",
  },
  {
    id: "T12344",
    date: "Mar 14, 2025",
    description: "Grocery Store",
    amount: 42.5,
    type: "debit",
    balance: 2372.34,
    account: "Primary Checking",
  },
  {
    id: "T12343",
    date: "Mar 10, 2025",
    description: "Transfer to Savings",
    amount: 500.0,
    type: "debit",
    balance: 2414.84,
    account: "Primary Checking",
  },
  {
    id: "T12342",
    date: "Mar 10, 2025",
    description: "Transfer from Checking",
    amount: 500.0,
    type: "credit",
    balance: 24563.55,
    account: "Primary Savings",
  },
  {
    id: "T12341",
    date: "Mar 05, 2025",
    description: "Electric Bill",
    amount: 85.0,
    type: "debit",
    balance: 2914.84,
    account: "Primary Checking",
  },
  {
    id: "T12340",
    date: "Mar 01, 2025",
    description: "Interest Credit",
    amount: 51.17,
    type: "credit",
    balance: 24063.55,
    account: "Primary Savings",
  },
  {
    id: "T12339",
    date: "Feb 28, 2025",
    description: "Rent Payment",
    amount: 1200.0,
    type: "debit",
    balance: 2999.84,
    account: "Primary Checking",
  },
  {
    id: "T12338",
    date: "Feb 25, 2025",
    description: "Restaurant",
    amount: 65.3,
    type: "debit",
    balance: 4199.84,
    account: "Primary Checking",
  },
  {
    id: "T12337",
    date: "Feb 20, 2025",
    description: "Investment Dividend",
    amount: 125.45,
    type: "credit",
    balance: 14796.0,
    account: "Investment Account",
  },
  {
    id: "T12336",
    date: "Feb 15, 2025",
    description: "Salary Deposit",
    amount: 3500.0,
    type: "credit",
    balance: 4265.14,
    account: "Primary Checking",
  },
]

export default function PassbookPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Passbook</h2>
          <p className="text-muted-foreground">View and search your transaction history.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>View all transactions across your accounts.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input placeholder="Search transactions..." className="h-9" type="search" />
              <Button size="sm" variant="ghost">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Select defaultValue="all">
                <SelectTrigger className="h-9 w-[180px]">
                  <SelectValue placeholder="Account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Accounts</SelectItem>
                  <SelectItem value="checking">Primary Checking</SelectItem>
                  <SelectItem value="savings">Primary Savings</SelectItem>
                  <SelectItem value="investment">Investment Account</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="h-9 w-[180px]">
                  <SelectValue placeholder="Transaction Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="credit">Credits</SelectItem>
                  <SelectItem value="debit">Debits</SelectItem>
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
                  <TableHead>
                    <Button variant="ghost" size="sm" className="font-medium">
                      Date
                      <ArrowDownUp className="ml-2 h-3 w-3" />
                    </Button>
                  </TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Account</TableHead>
                  <TableHead className="text-right">
                    <Button variant="ghost" size="sm" className="font-medium">
                      Amount
                      <ArrowDownUp className="ml-2 h-3 w-3" />
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                  <TableHead className="text-right">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.account}</TableCell>
                    <TableCell className={`text-right ${transaction.type === "credit" ? "text-green-600" : ""}`}>
                      {transaction.type === "credit" ? "+" : "-"}${transaction.amount.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">${transaction.balance.toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <strong>10</strong> of <strong>50</strong> transactions
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

