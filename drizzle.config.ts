import type { Config } from "drizzle-kit";
import "dotenv/config";

import { DATABASE_URL } from "@/constants/envs";

export default {
  schema: "./app/db/schema.ts",
  out: "./app/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: DATABASE_URL,
  },
} satisfies Config;
