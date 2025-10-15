import authRepository from "@/repositories/auth.repository";
import type { UserResponseDto, LoginRequestDto } from "@/schema/user.schema";

const authController = {
  saveUser: async (req: LoginRequestDto, token: string): Promise<UserResponseDto> => {
    let user = await authRepository.findUser(req.nickName);
    if (!user) {
      return await authRepository.createUser(req.nickName, token, true);
    }
    await authRepository.updateUserStatus(BigInt(user.userId), token, true);
    return user;
  },
  checkUser: async (token: string): Promise<UserResponseDto | null> => {
    const user = await authRepository.checkUser(token);
    if (!user) throw new Error("User not found");
    return user;
  },
};

export default authController;
