import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { prisma } from "@/config/prisma";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
