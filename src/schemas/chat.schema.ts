import { z } from "zod";

import { zBigIntToString, zStringToBigInt } from "@/utils/zod_helper";

export const chatRequestSchema = z.object({
  userId: zStringToBigInt,
  message: z.string(),
});

export const chatResponseSchema = z.object({
  chatId: zBigIntToString,
  userId: zBigIntToString,
  nickName: z.string(),
  message: z.string(),
});

export type ChatRequestDto = z.infer<typeof chatRequestSchema>;
export type ChatResponseDto = z.infer<typeof chatResponseSchema>;