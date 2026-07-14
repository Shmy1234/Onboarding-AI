# AstroOnboarder

Galaxy-themed AI onboarding for unfamiliar GitHub repositories. This foundation is an npm workspace with a React/Vite/Tailwind frontend and a TypeScript/Express/PostgreSQL API.

## Requirements

- Node.js 22+
- npm 10+
- Docker Desktop with Docker Compose

## Setup

```bash
cp .env.example .env
npm install
docker compose up -d
npm run dev
```

- Web: `http://localhost:5173`
- API health: `http://localhost:3001/api/v1/health`

## Commands

```bash
npm run dev
npm run dev:web
npm run dev:api
npm run lint
npm run typecheck
npm test
npm run build
docker compose down
```

Do not commit `.env`, API keys, GitHub credentials, repository clones, uploads, or model files.

## Next Configuration

1. Create a Supabase project and replace `DATABASE_URL` with its PostgreSQL connection string.
2. Enable GitHub login in Supabase Auth.
3. Register a read-only GitHub App for selected repository access and webhooks.
4. Add server-only credentials to `.env`; mirror variable names without values in `.env.example`.
5. Build authentication before repository ingestion.
# Onboarding-AI
