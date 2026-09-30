import {app} from './app.js'
import { PORT } from './config/env.js'
async function startserver(){
    app.listen(PORT,async()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}
startserver().catch((err)=>{
    console.error('Error starting the server:', err);
    process.exit(1);
})