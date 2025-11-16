import authRepository from "@/repository/auth.repository";
import type { UserResponseDto, LoginRequestDto } from "@/schemas/auth.schema";

const authController = {
  findOrCreateUser: async (req: LoginRequestDto, token: string): Promise<UserResponseDto> => {
    let user = await authRepository.findUser(req.nickName);

    if (!user) {
      const isCreated = await authRepository.createUser(req.nickName, token, true);
      if (!isCreated) throw new Error("Failed to create user");
      user = await authRepository.findUser(req.nickName);
    }

    if (!user) {
      throw new Error("User creation failed unexpectedly");
    }

    await authRepository.updateUserStatus(BigInt(user.userId), token, true);

    return user;
  },
};

export default authController;
