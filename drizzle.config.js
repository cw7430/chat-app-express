import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

// 1) 공통 .env 로드
dotenv.config();

// 2) 환경별 로컬 파일 명시적으로 로드 (.env.local 있음)
dotenv.config({ path: `.env.${process.env.NODE_ENV || "local"}` });

export default defineConfig({
  schema: ["./src/entities/auth.ts", "./src/entities/chat.ts"],
  out: "./drizzle",
  dialect: "mysql",

  dbCredentials: {
    host: process.env.DB_HOST ?? "127.0.0.1",
    port: parseInt(process.env.DB_PORT) ?? 3306,
    user: process.env.DB_USER ?? "root",
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DB_NAME ?? "chat_app",
  },
});
