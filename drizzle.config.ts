import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
	schema: "./src/lib/db/schema.ts",
	out: "./src/lib/db/migrations",
	driver: "mysql2",
	dbCredentials: {
		host: process.env.DATABASE_HOST as string,
		user: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		uri: process.env.DATABASE_URL as string,
		// connectionString: process.env.DATABASE_URL!,
	},
	breakpoints: true,
} satisfies Config;
