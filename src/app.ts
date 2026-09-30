import express from "express"
import cors from "cors"
import helmet from "helmet"
import { errorhandler} from "./shared/middleware/error_handle.js"

const app=express();
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/health',(req,res)=>{
    res.json({status:'ok',time:new Date().toISOString()})
})
app.use(errorhandler)
export {app}