import { Router } from 'express'
import { client } from '@repo/db/client';
import { z,signupSchema, signinSchema } from "@repo/zod/auth"
import argon2 from "argon2"





export const authHandler = Router();


authHandler.post("/signup",async (req:any,res:any)=>{
    
    let user;
    try{
        const { email ,name, password, pin } = signupSchema.parse(req.body)
        console.log(name)
        const hashedPassword = await argon2.hash(password)
        user = await client.user.create({
            data:{
                email:email,
                password: hashedPassword,
                name,
                pin: pin,
                balance:{
                    create:{
                        asset:"USDT"
                    }
                }
            },
            select:{
                userId:true,
                email: true,
            }
        })
        
        req.session.user = {
            userId: user.userId,
            email: user.email
        }
        
    }catch(error:any){
        console.log(error)
        
        if(error instanceof z.ZodError) return res.status(400).json({message:`Input error \n `,errors:error.errors})
        if(error.code=="P2002") return res.status(409).json({message:"Email already exists"})
        else if(error.name=="PrismaClientValidationError") return res.status(400).json({message:"Missing or incorrect Fields Error"})
        console.log(error)
        return res.status(400).json({message:"something is wrong",error:error.name})
    }

    return res.json(user)

})


authHandler.post("/signin",async (req:any,res:any)=>{
    try{
        const {email,password,pin} = signinSchema.parse(req.body)
        const user = await client.user.findFirst({where:{
            email
        },
            select:{
                userId: true,
                email: true,
                password: true,
                pin:true,
                balance: { select: {freeBalance:true,lockedBalance:true}}
            }})
        if(user){
            const isValid = await argon2.verify(user?.password,password)
            
            if(isValid && pin == user.pin){
                req.session.user = {
                    userId: user.userId,
                    email: user.email,
                    walletBalance: user.balance[0]?.freeBalance.toString()?? 0
                }
                console.log(req.session)
                return res.status(200).send("Login Successful")
            }else{
                return res.status(401).json({message:"Invalid Credentials"})
                
            }
        }else{
            return res.status(404).json({message:"The email is not registered"})
        }
        
    }catch(error:any){
        console.log(error)
        if(error instanceof z.ZodError) return res.status(400).json({message:`Input error \n `,errors:error.errors})
        else if(error.name=="PrismaClientValidationError") return res.status(400).json({message:"Missing or incorrect Fields Error"})
    }
})


authHandler.post("/logout",(req:any,res:any)=>{
    req.session.destroy((err:any) =>{
        if(err) return res.status(500).json({message:"Logout failed"})
        res.clearCookie("connect.sid")
        res.json({message:"Logged out successfully"})
    })
})

authHandler.get("/me", (req:any, res:any) => {
    console.log(req.session)
    if (req.session.user) {
        return res.json({ loggedIn: true, user: req.session.user });
    }
    return res.status(200).json({ loggedIn: false });
});