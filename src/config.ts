import dotenv from "dotenv";

// 1) 공통 .env 로드
dotenv.config();

// 2) 환경별 로컬 파일 명시적으로 로드 (.env.local 있음)
dotenv.config({ path: `.env.${process.env.NODE_ENV || "local"}` });

export const config = {
  NODE_ENV: process.env.NODE_ENV ?? "local",
  PORT: Number(process.env.PORT ?? 5000),
  FRONTEND_URL: process.env.FRONTEND_URL ?? "http://localhost:5173",

  // === DB 환경변수 추가 ===
  DB: {
    HOST: process.env.DB_HOST ?? "127.0.0.1",
    PORT: Number(process.env.DB_PORT ?? 3306),
    USER: process.env.DB_USER ?? "root",
    PASSWORD: process.env.DB_PASSWORD ?? "",
    NAME: process.env.DB_NAME ?? "chat_app",
    CHARSET: process.env.DB_CHARSET ?? "utf8mb4",
    TIMEZONE: process.env.DB_TIMEZONE ?? "Z",
  },
};
