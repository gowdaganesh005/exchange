import { ParseStatus, z }  from 'zod'

export const signupSchema = z.object({
    name: z.string(),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    pin: z.string().length(4, "PIN must be exactly 4 digits"),

});
export * from "zod";

export const signinSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string(),
    pin: z.string()
})