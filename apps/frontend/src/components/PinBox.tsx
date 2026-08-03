import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp.tsx"
import React, { useEffect } from "react"
import { useRef } from "react"
  
  export function PinBox({value,onChange}:{value:string,onChange:React.EventHandler<any>}) {
    const pinRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
      if(pinRef.current) pinRef.current.focus();
    },[])
    
    return (
        <InputOTP
          ref={pinRef}
          value={value}
          onChange={(val) => {
            const numeric = val.replace(/\D/g, "");
            onChange(numeric);
          }}
          maxLength={4}
          inputMode="numeric"   // mobile numeric keyboard
          pattern="[0-9]*"      // browser attempts numeric-only
        > 
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    )
  }
  