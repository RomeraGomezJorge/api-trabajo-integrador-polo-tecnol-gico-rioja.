import dotenv from "dotenv";
import express from "express";
import { connectMongoDB } from "./db/mongo";
import cors from "cors";
import { router } from "./routes";

dotenv.config();
connectMongoDB()
const app = express();
const port = process.env.PORT;
const corsOptions ={
    origin: process.env.URL_APP,
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/location", router);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}/`);
});