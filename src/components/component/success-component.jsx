'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2ah9lr92CML
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "../ui/button"

export default function SuccessComponent({setVerification}) {

    function setIt(){
        console.log('click')
        setVerification(true)
    }
    return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-green-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Success!</h1>
        <p className="mt-4 text-muted-foreground">Congratulations, your process was completed successfully.</p>
        <div className="mt-6">
            <Button onClick={setIt}>Go back</Button>
        </div>
        </div>
    </div>
    )
}