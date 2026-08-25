## Run tests

```bash
npm test
npx playwright show-report
```

`npm test` runs the core suite: **api**, **ui**, and **ai**.

```bash
npm run test:all              # every Playwright project
npm run test:ui               # one type
npx playwright test tests/ai/llm
npm run report
```

Load is not Playwright:

```bash
npm run test:load             # k6 (add k6/smoke.js when ready)
```

## Layout

```text
tests/
  api/
  ui/
  mobile/
  ai/
    llm/
    mcp/
    rag/
    agents/
  data/
  performance/
  load/                 # reserved; real load lives in k6/
  accessibility/
  visual/
  security/
  database/
fixtures/               # auth, API client, seed helpers
pages/                  # UI page objects
schemas/                # API JSON schemas
config/env.ts           # BASE_URL / UI_BASE_URL / API_BASE_URL
k6/                     # load tests
```

Add a type: create `tests/<type>/` and a matching project in `playwright.config.ts`.  
Remove a type: delete the folder and the project.

Mobile specs are phone-specific flows only. Do not copy `tests/ui` into `tests/mobile`.

Visual regression lives in `tests/visual` (Playwright screenshots). Commit baseline snapshots; run `npm run test:visual` to compare.
