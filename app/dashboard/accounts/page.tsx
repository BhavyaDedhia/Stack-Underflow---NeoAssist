import { ArrowUpRight, CreditCard, DollarSign, LineChart, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AccountsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Your Accounts</h2>
          <p className="text-muted-foreground">Manage your bank accounts and view balances.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Account
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Accounts</TabsTrigger>
          <TabsTrigger value="savings">Savings</TabsTrigger>
          <TabsTrigger value="checking">Checking</TabsTrigger>
          <TabsTrigger value="investment">Investment</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Primary Savings</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,563.55</div>
                <p className="text-xs text-muted-foreground">Account #: XXXX-XXXX-1234</p>
                <div className="mt-4">
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span>Interest: 2.5% APY</span>
                    <span>Next credit: April 1</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Primary Checking</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$5,872.34</div>
                <p className="text-xs text-muted-foreground">Account #: XXXX-XXXX-5678</p>
                <div className="mt-4">
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span>Monthly Fee: $0</span>
                    <span>Overdraft: Protected</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Investment Account</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$14,796.00</div>
                <p className="text-xs text-muted-foreground">Account #: XXXX-XXXX-9012</p>
                <div className="mt-4">
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span>YTD Return: +8.2%</span>
                    <span>Risk: Moderate</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Account Summary</CardTitle>
              <CardDescription>Overview of all your accounts and balances.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Total Balance</p>
                    <p className="text-xs text-muted-foreground">Across all accounts</p>
                  </div>
                  <div className="text-2xl font-bold">$45,231.89</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="mr-4 rounded-full bg-blue-500/10 p-2">
                      <DollarSign className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Primary Savings</p>
                      <p className="text-xs text-muted-foreground">XXXX-1234</p>
                    </div>
                    <div className="font-medium">$24,563.55</div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 rounded-full bg-green-500/10 p-2">
                      <DollarSign className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Primary Checking</p>
                      <p className="text-xs text-muted-foreground">XXXX-5678</p>
                    </div>
                    <div className="font-medium">$5,872.34</div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 rounded-full bg-purple-500/10 p-2">
                      <DollarSign className="h-4 w-4 text-purple-500" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Investment Account</p>
                      <p className="text-xs text-muted-foreground">XXXX-9012</p>
                    </div>
                    <div className="font-medium">$14,796.00</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="savings" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Primary Savings</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24,563.55</div>
              <p className="text-xs text-muted-foreground">Account #: XXXX-XXXX-1234</p>
              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span>Interest: 2.5% APY</span>
                  <span>Next credit: April 1</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View Details
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="checking" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Primary Checking</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$5,872.34</div>
              <p className="text-xs text-muted-foreground">Account #: XXXX-XXXX-5678</p>
              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span>Monthly Fee: $0</span>
                  <span>Overdraft: Protected</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View Details
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="investment" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Investment Account</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$14,796.00</div>
              <p className="text-xs text-muted-foreground">Account #: XXXX-XXXX-9012</p>
              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span>YTD Return: +8.2%</span>
                  <span>Risk: Moderate</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View Details
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

