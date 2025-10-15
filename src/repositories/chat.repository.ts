import { prisma } from "@/config/prisma";
import { chatResponseSchema, type ChatResponseDto } from "@/schema/chat.schema";

const chatRepository = {
  saveChat: async (userId: number, message: string): Promise<ChatResponseDto> => {
    const chat = await prisma.chat.create({
      data: {
        userId,
        message,
      },
    });
    const res = await prisma.user.findUnique({
      where: { userId },
      select: { nickName: true },
    });
    return chatResponseSchema.parse({ ...chat, ...res });
  },
};

export default chatRepository;
