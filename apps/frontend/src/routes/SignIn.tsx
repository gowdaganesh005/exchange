import Background from "../components/Background.tsx"
import { SignInForm } from "@/components/SignInForm.tsx"



export function SignIn(){
    
    return(
        <>
        
            <div className="flex justify-center items-center w-screen h-screen bg-transparent">
                <div >
                    <SignInForm/>
                </div>
            </div>
        
        </>
    )
}