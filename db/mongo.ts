import mongoose from "mongoose";
export function connectMongoDB (){
    try {
        mongoose.connect(process.env.MONGO_CONNECTION as string)
        console.log(`[server]: Connected to MongoDB`);
    } catch (error:any) {
        console.error(`[server]: Error connecting to MongoDB: ${error.message}`);
    }
}