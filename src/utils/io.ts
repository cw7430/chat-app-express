import type { Server, Socket } from "socket.io";

const connectClient = (io: Server) => {
  io.on("connection", async (socket: Socket) => {
    console.log("client is connected", socket.id);
  });
};

export default connectClient;
