import chatRepository from "@/repository/chat.repository";
import type { ChatRequestDto, ChatResponseDto } from "@/schemas/chat.schema";

const chatController = {
  saveChat: async (req: ChatRequestDto): Promise<ChatResponseDto> => {
    const isCreated = await chatRepository.createChat(req.userId, req.message);
    if (!isCreated) {
      throw new Error("Failed to save chat message");
    }
    const chat = await chatRepository.findChat(req.userId);
    if (!chat) {
      throw new Error("Chat message not found after creation");
    }
    return chat;
  },
};

export default chatController;
