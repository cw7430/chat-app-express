import { createServer } from "http";
import { Server } from "socket.io";

import app from "./app";
import { config } from "./config";
import connectClient from "./utils/io";

const PORT = config.PORT;
const FRONTEND_URL = config.FRONTEND_URL;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: FRONTEND_URL },
});
connectClient(io);

httpServer.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
