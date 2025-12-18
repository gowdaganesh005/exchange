import { Button } from "@/components/ui/button.tsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { Input } from "../components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import {  useState } from "react"
import { Root, Content} from "./ResizablePanel.tsx"
import { PinBox } from "./PinBox.tsx"
import axios from "axios"
import { Link } from "react-router"

interface SignInDataType{
    
    password: string,
    email: string,
    pin:string

}

export function SignInForm() {
    const [data,setData]=useState<SignInDataType>({
        email:"",
        password:"",
        pin:"",
    })
    const [error,setError]=useState<string>("");

    const isValidEmail = (email: string) => {
      return /\S+@\S+\.\S+/.test(email);
    };

    const isPinValid = data.pin.trim().length==4;
    
    

    const isMainFormValid =
    isValidEmail(data.email) &&
    data.password.trim().length >= 6;
  
  

    
    const [page,setPage]= useState<"email" | "pin" | "success">("email")
    const [loading,setLoading] = useState<boolean>(false)
    const onCreate=()=>{
      setPage("pin");
    }
    const onSetPin = async ()=>{
      
      console.log(data)
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:3000/api/v1/signin",data)
      if(response.status==200){
        setLoading(false);
        setPage("success");

      }
        
      } catch (error:any) {
        setLoading(false);
        if(error.response.status === 401){
          setPage("email");
          setData({
            email:"",
            password:"",
            pin:"",
        })
          setError("In Valid Credentials")
          
        }
        else if(error.response.status === 404){
            setPage("email");
            setError("Email Not Registered.SignUp To Create New Account")
            setData({
                email:"",
                password:"",
                pin:"",
            })
        }
        else{
            setPage("email");
          setError("Something Went Wrong")
          setData({
            email:"",
            password:"",
            pin:"",
        })

        }
        
      }
      
    }

  return (
    <Root value={page}>
    <Content value="email">
    <Card className="w-full min-w-sm max-w-sm shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        
      <CardHeader>
        <CardTitle>Login To Your Trading Account</CardTitle>
        <CardDescription>
          Enter your Email and Password 
        </CardDescription>
        <div  className="mt-2 flex justify-end">
          <Button variant="link"><Link to="/signup">Sign Up</Link></Button>
        </div>
        {error.trim().length > 0  && (
                  <p className="text-xs text-red-500">{error}</p>
        )}
      </CardHeader>
      <CardContent>
        <form autoComplete="off" >
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                    setData((prev:SignInDataType)=>({
                        ...prev,
                        email: e.target.value
                    }))
                }}
                
              />
              {data.email.length > 0 && !isValidEmail(data.email) && (
                  <p className="text-xs text-red-500">Please enter a valid email address.</p>
                )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                
              </div>
              <Input id="password" type="password" required 
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                setData((prev:SignInDataType)=>({
                    ...prev,
                    password: e.target.value
                }))
            }}/>
            
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button  disabled={!isMainFormValid} onClick={onCreate} className="w-full shadow-[0px_2px_6px_rgba(200,200,200,0.3)]">
          Log In
        </Button>
        
      </CardFooter>
    </Card>
    </Content>
    <Content value="pin">
    <Card className="w-full  min-w-sm max-w-sm shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        
        <CardHeader>
          <CardTitle>Enter Your Pin</CardTitle>
          <CardDescription>
            Enter your secret Pin 
          </CardDescription>
          
        </CardHeader>
        <CardContent>
          <div className="w-full justify-center flex">

            <PinBox  value={data.pin} onChange={(value)=>{
              setData((prev:SignInDataType)=>({
                ...prev,
                pin: value
            }))
            }}/>
      </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button disabled={!isPinValid} onClick={onSetPin} className="w-full shadow-[0px_2px_6px_rgba(200,200,200,0.3)]">
          {!loading?(<>Check Pin</>):(
            <div>
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-icon lucide-loader animate-spin"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg></div>)
          }
        </Button>
        
      </CardFooter>
    </Card>
    </Content>
    <Content value="success">
    <Card className="w-full max-w-sm shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        
        <CardHeader>
          <CardTitle>Successfully Logged In To Your Account</CardTitle>
          
          
        </CardHeader>
        
      <CardFooter className="flex-col gap-2">
        <Button disabled={!isPinValid} onClick={onSetPin} className="w-full shadow-[0px_2px_6px_rgba(200,200,200,0.3)]">
          {!loading?(<>Go To Dashboard</>):(
            <div>
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-icon lucide-loader animate-spin"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg></div>)
          }
        </Button>
        
      </CardFooter>
    </Card>
    </Content>
    </Root>
  )
}
