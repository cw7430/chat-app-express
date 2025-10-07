import { PrismaClient } from "@/generated/prisma";

export const prisma = new PrismaClient();

// 종료 시 연결 해제
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
