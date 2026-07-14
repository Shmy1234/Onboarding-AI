import { describe, expect, it } from 'vitest'

import { getHealthStatus } from '../src/app.js'

describe('GET /api/v1/health', () => {
  it('reports that the API is healthy', () => {
    expect(getHealthStatus()).toEqual({
      data: {
        service: 'astro-onboarder-api',
        status: 'ok',
      },
    })
  })
})
