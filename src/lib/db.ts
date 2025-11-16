import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import { config } from "@/config";

const pool = mysql.createPool({
  host: config.DB.HOST,
  port: config.DB.PORT,
  user: config.DB.USER,
  password: config.DB.PASSWORD,
  database: config.DB.NAME,
  charset: config.DB.CHARSET,
  waitForConnections: true,
  timezone: config.DB.TIMEZONE,
  dateStrings: false,
});

export const db = drizzle(pool);
