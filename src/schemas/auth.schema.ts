import { z } from "zod";

import { zBigIntToString } from "@/utils/zod_helper";

export const loginRequestSchema = z.object({
  nickName: z.string().nonempty(),
});

export const userResponseSchema = z.object({
  id: zBigIntToString,
  nickName: z.string(),
  token: z.string(),
  isOnline: z.boolean(),
});

export type LoginRequestDto = z.infer<typeof loginRequestSchema>;
export type UserResponseDto = z.infer<typeof userResponseSchema>;
