import { createServer } from "http";
import app from "@/app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});