import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { user } from "@/entities/auth";
import { userResponseSchema, type UserResponseDto } from "@/schemas/auth.schema";

const authRepository = {
  findUser: async (nickName: string): Promise<UserResponseDto | null> => {
    const rows = await db.select().from(user).where(eq(user.nickName, nickName)).limit(1);

    const row = rows[0];
    if (!row) return null;

    return userResponseSchema.parse(row);
  },

  createUser: async (nickName: string, token: string, isOnline: boolean): Promise<boolean> => {
    const [result] = await db.insert(user).values({
      nickName,
      token,
      isOnline,
    });

    return result.affectedRows === 1;
  },

  updateUserStatus: async (userId: bigint, token: string, isOnline: boolean) => {
    await db
      .update(user)
      .set({
        token,
        isOnline,
      })
      .where(eq(user.id, userId));
  },

  checkUser: async (token: string): Promise<UserResponseDto | null> => {
    const rows = await db.select().from(user).where(eq(user.token, token)).limit(1);

    const row = rows[0];
    if (!row) return null;

    return userResponseSchema.parse(row);
  },
};

export default authRepository;
