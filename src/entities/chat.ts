import { mysqlTable, bigint, text } from "drizzle-orm/mysql-core";

import { user } from "./auth";

export const chat = mysqlTable("chat", {
  id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
  userId: bigint("user_id", { mode: "bigint" })
    .notNull()
    .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
  message: text("message"),
});
