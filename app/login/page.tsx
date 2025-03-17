"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Camera, Loader2, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isCameraActive, setIsCameraActive] = useState(false)
  const [isRecognizing, setIsRecognizing] = useState(false)
  const [recognitionStatus, setRecognitionStatus] = useState("")

  // Function to handle traditional login
  const handleTraditionalLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate credentials here
    router.push("/dashboard")
  }

  // Function to start the camera for face recognition
  const startCamera = async () => {
    try {
      if (videoRef.current) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        videoRef.current.srcObject = stream
        setIsCameraActive(true)
      }
    } catch (error) {
      console.error("Error accessing camera:", error)
      setRecognitionStatus("Camera access denied. Please check permissions.")
    }
  }

  // Function to stop the camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      const tracks = stream.getTracks()
      tracks.forEach((track) => track.stop())
      videoRef.current.srcObject = null
      setIsCameraActive(false)
    }
  }

  // Function to simulate face recognition
  const recognizeFace = () => {
    if (!isCameraActive) return

    setIsRecognizing(true)
    setRecognitionStatus("Scanning face...")

    // Capture current frame from video
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d")
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth
        canvasRef.current.height = videoRef.current.videoHeight
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)
      }
    }

    // Simulate face recognition process with a timeout
    setTimeout(() => {
      setRecognitionStatus("Face recognized! Logging in...")

      // Simulate successful authentication after a delay
      setTimeout(() => {
        setIsRecognizing(false)
        stopCamera()
        router.push("/dashboard")
      }, 1000)
    }, 2000)
  }

  // Clean up camera when component unmounts
  useEffect(() => {
    return () => {
      stopCamera()
    }
  }, [])

  return (
    <div className="container flex h-screen items-center justify-center">
      <Tabs defaultValue="face" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="face">Face Recognition</TabsTrigger>
          <TabsTrigger value="traditional">Traditional Login</TabsTrigger>
        </TabsList>

        <TabsContent value="face">
          <Card>
            <CardHeader>
              <CardTitle>Face Recognition Login</CardTitle>
              <CardDescription>Log in securely using your face as your password.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                {isCameraActive ? (
                  <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Camera className="h-12 w-12 text-muted-foreground" />
                  </div>
                )}
                <canvas ref={canvasRef} className="hidden" />
              </div>

              {recognitionStatus && (
                <div className="flex items-center gap-2 text-sm">
                  {isRecognizing ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                  )}
                  <span>{recognitionStatus}</span>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {!isCameraActive ? (
                <Button onClick={startCamera}>Start Camera</Button>
              ) : (
                <>
                  <Button variant="outline" onClick={stopCamera}>
                    Cancel
                  </Button>
                  <Button onClick={recognizeFace} disabled={isRecognizing}>
                    {isRecognizing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Recognize Face
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="traditional">
          <Card>
            <CardHeader>
              <CardTitle>Account Login</CardTitle>
              <CardDescription>Enter your credentials to access your account.</CardDescription>
            </CardHeader>
            <form onSubmit={handleTraditionalLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Enter your username" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

