import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import { DATABASE_URL } from "@/constants/envs";

const connectionString = DATABASE_URL;
const migrationsFolder = "app/db/migrations";

const sql = postgres(connectionString, { max: 1 });
const db = drizzle(sql);

const main = async () => {
  await migrate(db, { migrationsFolder });
  await sql.end();
};

main();
