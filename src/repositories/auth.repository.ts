import { prisma } from "@/config/prisma";
import { userResponseSchema, type UserResponseDto } from "@/schema/user.schema";

const authRepository = {
  findUser: async (nickName: string): Promise<UserResponseDto | null> => {
    const user = await prisma.user.findFirst({ where: { nickName } });
    if (!user) return null;
    return userResponseSchema.parse(user);
  },
  createUser: async (
    nickName: string,
    token: string,
    isOnline: boolean
  ): Promise<UserResponseDto> => {
    const user = await prisma.user.create({
      data: { nickName, token, isOnline },
    });
    return userResponseSchema.parse(user);
  },
  updateUserStatus: async (userId: bigint, token: string, isOnline: boolean) => {
    await prisma.user.update({
      where: { userId },
      data: { token, isOnline },
    });
  },
  checkUser: async (token: string): Promise<UserResponseDto | null> => {
    const user = await prisma.user.findFirst({ where: { token } });
    if (!user) return null;
    return userResponseSchema.parse(user);
  },
};
export default authRepository;
