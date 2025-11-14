import { createServer } from "http";
import dotenv from "dotenv";
import { Server } from "socket.io";

import app from "./app";
import connectClient from "./utils/io";

dotenv.config();

const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: FRONTEND_URL },
});
connectClient(io);

httpServer.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
