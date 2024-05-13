import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import { User } from "next-auth";
import UserModel from "@/models/User.model";
import mongoose from "mongoose";

export async function DELETE(request:Request,{params}:{params:{messageid:string}}){
    const messageId= params.messageid
    await dbConnect()
    const session=await getServerSession(authOptions)
    const user:User=session?.user as User
    if(!session || !session.user){
        return Response.json({
            success:false,
            message:'user not Authenticated'
        },{status:404})
    }
    try {
        const updateResult=await UserModel.updateOne(
            {_id:user._id},
            {$pull:{messages:{_id:messageId}}}
        )
        if(updateResult.modifiedCount==0){
            return Response.json({
                success:false,
                message:"Message not found or already deleted"
            },{status:404})
        }
        return Response.json({
            success:true,
            message:"Message Deleted"
        },{status:200})
    } catch (error:any) {
        return Response.json({
            success:false,
            message:`Error while deleting message ${error}`,
        },{status:500})
    }
    
}