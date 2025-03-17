import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary py-4">
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary-foreground">Union Bank</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/about" className="text-primary-foreground hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-primary-foreground hover:underline">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-20">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Banking Made Simple</h2>
                <p className="text-muted-foreground md:text-xl">
                  Experience secure banking with advanced face recognition technology. Access your accounts, manage
                  transactions, and get support - all in one place.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login">
                    <Button size="lg">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Banking App"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Services</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">Secure Banking</h3>
                <p className="text-muted-foreground">
                  State-of-the-art face recognition technology ensures your account is protected.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Raise tickets and get assistance from our support team anytime, anywhere.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">Easy Transactions</h3>
                <p className="text-muted-foreground">
                  Transfer funds, pay bills, and manage your finances with just a few clicks.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container text-center">
          <p className="text-muted-foreground">© 2025 Union Bank. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

