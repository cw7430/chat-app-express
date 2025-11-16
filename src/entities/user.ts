import { mysqlTable, bigint, varchar, boolean } from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
  id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
  nickName: varchar("nick_name", { length: 255 }).notNull(),
  token: varchar("token", { length: 255 }).notNull(),
  isOnline: boolean("is_online").default(false).notNull(),
});
