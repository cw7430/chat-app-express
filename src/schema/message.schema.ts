import { z } from "zod";
import { zBigIntToString, zStringToBigInt } from "./zod_helper";

export const messageRequestSchema = z.object({
  userId: zStringToBigInt,
  chat: z.string(),
});

export const messageResponseSchema = z.object({
  messageId: zBigIntToString,
  userId: zBigIntToString,
  nickName: z.string(),
  chat: z.string(),
});

export const messageListResponseSchema = z.array(messageResponseSchema);

export type MessageRequestDto = z.infer<typeof messageRequestSchema>;
export type MessageListResponseDto = z.infer<typeof messageListResponseSchema>;
