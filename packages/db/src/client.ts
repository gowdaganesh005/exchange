import prisma from "prisma"
import { PrismaClient } from "../generated/prisma"

const client = new PrismaClient()

export default client