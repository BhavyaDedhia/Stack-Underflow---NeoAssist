import Link from "next/link"
import { ArrowUpRight, CreditCard, DollarSign, HelpCircle, LineChart, Ticket, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back, John!</h2>
          <p className="text-muted-foreground">Here's an overview of your accounts and recent activity.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/accounts">
            <Button>
              <CreditCard className="mr-2 h-4 w-4" />
              View Accounts
            </Button>
          </Link>
          <Link href="/dashboard/tickets/new">
            <Button variant="outline">
              <Ticket className="mr-2 h-4 w-4" />
              New Support Ticket
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Accounts</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Savings, Checking, Investment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
            <Ticket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">1 awaiting response</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Beneficiaries</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">Across all accounts</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Account Activity</CardTitle>
            <CardDescription>Your transaction history for the past 30 days.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full rounded-md border">
              <div className="flex h-full items-center justify-center">
                <LineChart className="h-8 w-8 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/passbook">
              <Button variant="outline" size="sm">
                View Full History
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest account transactions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-primary/10 p-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Grocery Store</p>
                  <p className="text-xs text-muted-foreground">March 14, 2025</p>
                </div>
                <div className="font-medium">-$42.50</div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-green-500/10 p-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Salary Deposit</p>
                  <p className="text-xs text-muted-foreground">March 10, 2025</p>
                </div>
                <div className="font-medium text-green-600">+$3,500.00</div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-primary/10 p-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Electric Bill</p>
                  <p className="text-xs text-muted-foreground">March 5, 2025</p>
                </div>
                <div className="font-medium">-$85.00</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/passbook">
              <Button variant="outline" size="sm">
                View All
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quick Help</CardTitle>
            <CardDescription>Frequently asked questions and support.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="rounded-md bg-muted p-3">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium">How do I transfer money?</p>
                </div>
              </div>
              <div className="rounded-md bg-muted p-3">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium">How to update my profile?</p>
                </div>
              </div>
              <div className="rounded-md bg-muted p-3">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium">How to report a lost card?</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/help">
              <Button variant="outline" size="sm">
                View All Help Topics
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

