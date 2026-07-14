import 'dotenv/config'

import { z } from 'zod'

const environmentSchema = z.object({
  API_PORT: z.coerce.number().int().positive().default(3001),
  DATABASE_URL: z
    .string()
    .default('postgresql://postgres:postgres@localhost:5432/astro_onboarder'),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  WEB_ORIGIN: z.url().default('http://localhost:5173'),
})

export const env = environmentSchema.parse(process.env)
