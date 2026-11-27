import { z } from 'zod'

export const registerSchema = z.object({
    name: z.string().min(3, "Name must contain 3 characters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(9, "Password must contain 6 characters"),
    age: z.coerce.number().min(15, "Age must be at least 10"),
    role: z.string().min(1, "Please select a role"),
    sport: z.string().min(1, "Please select a sport")

})