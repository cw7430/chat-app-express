import { z } from "zod";
import { zBigIntToString } from "./zod_helper";

export const userRequestSchema = z.object({
  name: z.string().nonempty(),
});

export const userResponseSchema = z.object({
  userId: zBigIntToString,
  nickName: z.string(),
});

export type UserRequestDto = z.infer<typeof userRequestSchema>;

export type UserResponseDto = z.infer<typeof userResponseSchema>;
