import Background from "../components/Background.tsx"
 import { SignUpForm } from "@/components/SignupForm.tsx";



export function SignUp(){
    
    return(
        <>
        
            <div className="flex justify-center items-center w-screen h-screen bg-transparent">
                <div >
                        <SignUpForm/>
                </div>
            </div>
        
        </>
    )
}