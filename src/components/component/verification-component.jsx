'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j3zWm2abiSW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function VerificationComponent({setVerification}) {
  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Verify Your ID</h1>
        <p className="text-muted-foreground">
          To complete the verification process, please upload clear photos of the front and back of your ID.
        </p>
        <Carousel className="grid gap-6">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Document Type</CardTitle>
                  <CardDescription>Select the type of document you are uploading.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select document type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="drivers-license">Drivers License</SelectItem>
                        <SelectItem value="passport">Passport</SelectItem>
                        <SelectItem value="national-id">National ID</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Front of ID</CardTitle>
                  <CardDescription>Upload a photo of the front of your ID.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <img
                      src="/placeholder.svg"
                      width={300}
                      height={200}
                      alt="Front of ID"
                      className="rounded-md object-cover"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    />
                    <Button>
                      <UploadIcon className="mr-2 h-4 w-4" />
                      Upload Front
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Back of ID</CardTitle>
                  <CardDescription>Upload a photo of the back of your ID.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <img
                      src="/placeholder.svg"
                      width={300}
                      height={200}
                      alt="Back of ID"
                      className="rounded-md object-cover"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    />
                    <Button>
                      <UploadIcon className="mr-2 h-4 w-4" />
                      Upload Back
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex justify-end">
          <Button onClick={() => setVerification(false)}>Verify ID</Button>
        </div>
      </div>
    </div>
  )
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}