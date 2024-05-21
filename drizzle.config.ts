import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.postgres_url,
  },
  tablesFilter: ["t3ftw_*"],
} satisfies Config;
