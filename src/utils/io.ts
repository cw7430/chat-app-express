import type { Server, Socket } from "socket.io";

import type { LoginRequestDto } from "@/schemas/auth.schema";
import authController from "@/controllers/auth.controller";

const connectClient = (io: Server) => {
  io.on("connection", async (socket: Socket) => {
    console.log("client is connected", socket.id);

    socket.on("login", async (req: LoginRequestDto, cb) => {
      try {
        const user = await authController.findOrCreateUser(req, socket.id);
        cb({ ok: true, data: user });
      } catch (error: any) {
        cb({ ok: false, error: error.message });
      }
    });
  });
};

export default connectClient;
