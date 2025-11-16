import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { chat } from "@/entities/chat";
import { user } from "@/entities/auth";
import { chatResponseSchema, type ChatResponseDto } from "@/schemas/chat.schema";

const chatRepository = {
  findChat: async (userId: bigint): Promise<ChatResponseDto | null> => {
    const rows = await db
      .select({ id: chat.id, userId: chat.userId, nickName: user.nickName, message: chat.message })
      .from(chat)
      .where(eq(chat.userId, BigInt(userId)))
      .innerJoin(user, eq(chat.userId, user.id))
      .limit(1);

    const row = rows[0];
    if (!row) return null;

    return chatResponseSchema.parse(row);
  },

  createChat: async (userId: bigint, message: string): Promise<boolean> => {
    const [result] = await db.insert(chat).values({
      userId: BigInt(userId),
      message,
    });
    return result.affectedRows === 1;
  },
};

export default chatRepository;
