import express from "express";
import userRoutes from './routes/userRoutes.js'
import cors from 'cors';

const app = express();

export default app;
app.use(express.json());
app.use("/", userRoutes)


