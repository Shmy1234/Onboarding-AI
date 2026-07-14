import pg from 'pg'

import { env } from './config.js'

export const database = new pg.Pool({ connectionString: env.DATABASE_URL })
