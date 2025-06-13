import { PrismaClient } from "../generated/prisma/index.js";


const client = new PrismaClient(); 
const connect = async ()=>{
    await client.$connect()
}

connect();

export {client}