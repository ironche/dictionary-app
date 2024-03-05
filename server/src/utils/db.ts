import postgres from 'postgres'

const sql = postgres({
  // host: 'localhost',
  // port: 3002,
  // username: 'postgres',
  // password: 'example',
  // database: 'postgres',
  host: 'db',
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
})

export default sql
