export const CONNECT_DB = {
  user: process.env.DB_PG_USER ?? "postgres",
  host: process.env.DB_PG_HOST ?? "localhost",
  database: process.env.DB_PG_DATABASE ?? "build_journal",
  password: process.env.DB_PG_PASS ?? "gW)12rJcc6FpR3",
  port: process.env.DB_PG_PORT ?? 5432,
};
