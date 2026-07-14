import { createApp } from './app.js'
import { env } from './config.js'

const server = createApp().listen(env.API_PORT, () => {
  console.info(`AstroOnboarder API listening on http://localhost:${env.API_PORT}`)
})

function shutdown(signal: string) {
  console.info(`${signal} received; closing API server`)
  server.close((error) => {
    if (error) {
      console.error('Failed to close API server', error)
      process.exitCode = 1
      return
    }

    process.exitCode = 0
  })
}

process.on('SIGINT', () => shutdown('SIGINT'))
process.on('SIGTERM', () => shutdown('SIGTERM'))
