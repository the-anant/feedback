import {z} from 'zod'

export const usernameValidation=z
    .string()
    .min(2,"UserName must be atLeast 2 characters")
    .max(10,"Username must be no more then 10 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not cotain spacial character")


export const contactFormSchema=z.object({
    firstname:usernameValidation,
    lastname:usernameValidation,
    email:z.string().email({message:'Invalid email address'}),
    mobile:z.string(),
    topic:z.string().min(5,"topic should be at least 5 characters").max(15,"Topic must be no more then 20 characters").regex(/^[a-zA-Z0-9 ]+$/, "Username must not cotain spacial character"),
    description:z.string().min(20,"topic should be at least 5 characters").max(50,"Topic must be no more then 20 characters").regex(/^[a-zA-Z0-9 ]+$/, "Username must not cotain spacial character")

    
})