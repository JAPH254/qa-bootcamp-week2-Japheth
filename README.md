# QA Bootcamp Week 2 Starter

This is the starting point for Week 2 of the QA bootcamp. During the week you will use it to practise:

- TypeScript
- Playwright (UI testing)
- Postman (API testing)
- The Trello REST API

There are no tests in this repo. You will write them during the week.

## Prerequisites

Install these before you start:

- [Node.js](https://nodejs.org/) (the current LTS version)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

## Setup

Run these steps in order from a terminal.

1. Clone the repo and open the folder:

   ```bash
   git clone <repo-url>
   cd qa-bootcamp-week2-starter
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Install the Chromium browser for Playwright:

   ```bash
   npx playwright install chromium
   ```

4. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

   Then open `.env` and fill in your values: your Trello API key and token, the ID of your Trello board, and the Toolshop URL.

5. Check that your setup works:

   ```bash
   npm run check
   ```

   If everything is set up correctly, the last line says `PASS`.

> **Warning:** never commit `.env`. It holds your Trello key and token. It is listed in `.gitignore` so Git ignores it. Do not remove it from there, and never paste your key or token into code, screenshots or chat.

## Folders

| Folder     | What it is for |
|------------|----------------|
| `src/`     | TypeScript code you will test. It starts with `classifyStatus.ts`, which is not implemented yet. |
| `tests/`   | Your Playwright tests. It is empty for now; you will add tests during the week. |
| `postman/` | A Postman environment template. Import it into Postman and fill in your own values there. |
| `scripts/` | Helper scripts. `check.ts` checks your setup and is run by `npm run check`. |

## Scripts

- `npm run check`: checks your `.env` and your Trello credentials.
- `npm test`: runs the Playwright tests in `tests/`.
