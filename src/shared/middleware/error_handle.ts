import type{Response,Request,NextFunction} from "express"
import { ApiError } from "../util/error.js" 

export function errorhandler(err:Error,req:Request,res:Response,next:NextFunction){
    if(err instanceof ApiError){
        const body:Record<string,unknown>={
            success:false,
            message:err.message
        }
        if(err.details)body.detail=err.details
        res.status(err.statusCode).json(body)
        return
    }
    console.error("error:",err)
    const body:Record<string,unknown>={
            success:false,
            message:"something went wrong"
        }
    res.status(500).json(body)
}