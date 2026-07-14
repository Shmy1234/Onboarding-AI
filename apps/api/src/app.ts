import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import { env } from './config.js'

export function getHealthStatus() {
  return {
    data: {
      service: 'astro-onboarder-api',
      status: 'ok',
    },
  } as const
}

export function createApp() {
  const app = express()

  app.disable('x-powered-by')
  app.use(helmet())
  app.use(cors({ origin: env.WEB_ORIGIN }))
  app.use(express.json({ limit: '1mb' }))

  app.get('/api/v1/health', (_request, response) => {
    response.status(200).json(getHealthStatus())
  })

  return app
}
