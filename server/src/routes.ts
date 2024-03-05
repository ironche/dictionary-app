import { Router } from 'express'
import sql from './utils/db'

export default function () {
  return Router()
    .get('/', (req, res) => {
      return res.json({ message: 'Hello, world!' })
    })
    .get('/entries', async (req, res) => {
      const entries = await sql`SELECT melingoid FROM "entries" LIMIT 10`
      return res.json({ message: 'Hello, world!', entries })
    })
}
