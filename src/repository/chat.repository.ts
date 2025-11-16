import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { chat } from "@/entities/chat";
import { chatResponseSchema, type ChatResponseDto } from "@/schemas/chat.schema";

const chatRepository = {
  findChat: async (userId: number): Promise<ChatResponseDto | null> => {
    const rows = await db
      .select()
      .from(chat)
      .where(eq(chat.userId, BigInt(userId)))
      .limit(1);

    const row = rows[0];
    if (!row) return null;

    return chatResponseSchema.parse(row);
  },

  createChat: async (userId: number, message: string): Promise<boolean> => {
    const [result] = await db.insert(chat).values({
      userId: BigInt(userId),
      message,
    });
    return result.affectedRows === 1;
  },
};

export default chatRepository;
