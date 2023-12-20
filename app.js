import dotenv from 'dotenv';
import express from 'express';
import { router } from './routes.js';
import {connectMongoDB} from "./db/mongo.js";
import cors from "cors";

dotenv.config();
connectMongoDB()
const app = express();
const port = process.env.PORT;
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/location', router);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}/`);
});