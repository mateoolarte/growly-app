import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { DATABASE_URL } from "@/constants/envs";

const sql = postgres(DATABASE_URL);

export const db = drizzle(sql);
