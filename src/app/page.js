'use client'
import SuccessComponent from "@/components/component/success-component";
import VerificationComponent from "@/components/component/verification-component";
import { useState } from "react";

export default function Home() {

  const [verification, setVerification] = useState(false)

  return (
    <main>
      {verification?  <VerificationComponent setVerification={setVerification}/> : <SuccessComponent setVerification={setVerification}/>}
      
    </main>
      );
}
