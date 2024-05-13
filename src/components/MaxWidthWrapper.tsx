import { cn } from "@/lib/utils"
import { ReactNode } from "react"
export default function MaxWidthWrapper({className,children}:{
    className?:string,
    children:ReactNode
}){
    return <div className={cn('h-full mx-auto w-full max-w-screen-xl  md:px-10',className)}>{children}</div>
}