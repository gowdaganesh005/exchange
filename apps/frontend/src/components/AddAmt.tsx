import { useState } from "react"
import { AuthContextType, useAuth } from "./providers/AuthContext.tsx"
import { CardHeader, CardTitle } from "./ui/card.tsx"
import { Label } from "@radix-ui/react-label"
import Card from "./Card.tsx"
import { Input } from "./ui/input.tsx"
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select.tsx"
import { Select, SelectPortal } from "@radix-ui/react-select"
import { Button } from "./ui/button.tsx"
import axios from "axios"
import { toast } from "sonner"
import { useNavigate } from "react-router"

export const AddAmt = ()=>{
    const userContext : AuthContextType | null = useAuth()
    const [data,setData] = useState({
        bank_name: "TMBB - (Trust Me Bro Bank)",
        bank_ifsc: "TMBB0001",
        account_number: "TMB005002323",
        amount: 500

    })
    const [disabledBtn, setDisableBtn ]= useState(false);
    const navigate = useNavigate();

    const onSubmit = async () =>{
        setDisableBtn(true)
        try {
            const response = await axios.post("http://localhost:3000/api/v1/addAmt",{
                amount: data.amount.toString(),
                asset: 'USDT'
            },{
                withCredentials: true
            })
            console.log(response)
            if(response.status==200){
            toast.success("The Amount was Credited to your wallet")
            await new Promise(resolve=>setTimeout(resolve,2000))
            navigate("/dashboard")
            setDisableBtn(false)
        }
        } catch (error) {
            toast.error("The Payment Failed") 
            console.log(error)
            setDisableBtn(false)
        }
        
    }
    return(
        <>
            <Card className="w-full max-w-2xl mx-auto bg-card">
                <CardHeader>
                    <CardTitle className="text-xl md:text-3xl">
                        Add Funds to your Trading Account
                    </CardTitle>
                    <div className="space-y-5">
                    <Label className="text-lg md:text-xl font-medium"> Name of the Bank</Label>
                    <div className="text-xl">
                    <Select  defaultValue="TMBB - (Trust Me Bro Bank)">
                    <SelectTrigger className="w-full text-lg md:text-xl h-12 md:h-14">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem
                                className="text-lg md:text-xl"
                                value="TMBB - (Trust Me Bro Bank)"
                            >
                                TMBB - (Trust Me Bro Bank)
                            </SelectItem>

                            <SelectItem
                                className="text-lg md:text-xl"
                                value="FFB - (Fake Federal Bank)"
                            >
                                FFB - (Fake Federal Bank)
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                    </Select>
                    </div>

                    <Label className="text-lg md:text-xl font-medium">
                        Bank IFSC
                    </Label>
                    <Input
                        className="text-lg md:text-xl h-12 md:h-14"
                        id="bank_ifsc"
                        type="text"
                        placeholder="Bank IFSC"
                        required
                        defaultValue={data.bank_ifsc}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                            setData((prev)=>({
                                ...prev,
                                bank_ifsc: e.target.value
                            }))
                        }}
                        
                    />

                    <Label>Account Number</Label>
                    <Input
                        className="text-lg md:text-xl h-12 md:h-14"
                        id="acc_no"
                        type="text"
                        placeholder="Account Number"
                        required
                        defaultValue={data.account_number}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                            setData((prev)=>({
                                ...prev,
                                account_number: e.target.value
                            }))
                        }}
                        
                    />
                    
                    <Label className="text-xl">Amount</Label>
                    <div className="flex  items-center gap-">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center">                        
                        <svg className="w-8 h-8 md:w-12 md:h-12 font-black"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="#a6e3a1" d="M136 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-114.9 0c-24.9 0-45.1 20.2-45.1 45.1 0 22.5 16.5 41.5 38.7 44.7l91.6 13.1c53.8 7.7 93.7 53.7 93.7 108 0 60.3-48.9 109.1-109.1 109.1l-10.9 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-72 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l130.9 0c24.9 0 45.1-20.2 45.1-45.1 0-22.5-16.5-41.5-38.7-44.7l-91.6-13.1C55.9 273.5 16 227.4 16 173.1 16 112.9 64.9 64 125.1 64l10.9 0 0-40z"/>
                        </svg>
                    </div>
                    <Input
                        className="text-2xl md:text-3xl h-12 md:h-14 font-extrabold text-chart-3   "
                        id="amount"
                        type="number"
                        required
                        value={data.amount}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                            setData((prev)=>({
                                ...prev,
                                amount: parseInt(e.target.value)
                            }))
                        }}
                        
                    />
                    </div>
                    </div>
                    <Button 
                        onClick={onSubmit}
                        disabled={disabledBtn}
                        className={`bg-chart-3 text-2xl font-extrabold py-6`} >
                        ADD
                    </Button>

                </CardHeader>
            </Card>

        </>
    )
}