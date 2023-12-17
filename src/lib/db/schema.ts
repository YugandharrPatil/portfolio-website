import { int, mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core";

export const messages = mysqlTable("messages", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 256 }),
	email: varchar("email", { length: 256 }),
	message: text("message"),
});
