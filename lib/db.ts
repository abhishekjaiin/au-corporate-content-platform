import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from '@/db/schema'

let database: ReturnType<typeof drizzle<typeof schema>> | null = null

export function getDb() {
  if (database) return database
  const url = process.env.DATABASE_URL
  if (!url) return null
  database = drizzle(neon(url), { schema })
  return database
}
