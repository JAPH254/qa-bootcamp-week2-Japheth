# QA Bootcamp – Week 2

This repository contains my Week 2 QA Bootcamp work, focusing on TypeScript, Playwright automation, API testing, Page Object Model (POM), and test debugging.

## Technologies

- TypeScript
- Playwright
- Node.js
- Toolshop REST API
- Git and GitHub

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

## Setup

Follow these three steps to set up the project from a fresh clone.

1. **Clone the repository and enter the project folder:**

   ```bash
   git clone https://github.com/JAPH254/qa-bootcamp-week2-Japheth.git
   cd qa-bootcamp-week2-Japheth
   ```

2. **Install dependencies and the Playwright Chromium browser:**

   ```bash
   npm install
   npx playwright install chromium
   ```

3. **Configure environment variables:**

   ```bash
   cp .env.example .env
   ```

   The `.env` file contains the Toolshop website and API URLs. Only change these values if instructed by your trainer.

## Running the Tests

Run the complete Playwright test suite:

```bash
npm test
```

The suite automatically discovers and runs all tests inside the `tests/` directory.

Run an individual test file:

```bash
npx playwright test tests/homepage.spec.ts
```

Run tests with the HTML report:

```bash
npx playwright test --reporter=html
npx playwright show-report
```

## Test Coverage

The project currently contains six automated tests:

| Test file | Test coverage | Type |
|---|---|---|
| `homepage.spec.ts` | Homepage loads successfully | UI |
| `login.spec.ts` | Invalid login is rejected | UI |
| `search.spec.ts` | Search returns matching products | UI / POM |
| `products-api.spec.ts` | Products API returns products successfully | API |
| `carts-api.spec.ts` | Create cart and add product successfully | API |
| `carts-api.spec.ts` | Requesting a nonexistent cart returns 404 | API |

## Project Structure

| Folder / File | Purpose |
|---|---|
| `tests/` | Playwright UI and API tests |
| `page-objects/` | Page Object Model classes and reusable page interactions |
| `src/` | TypeScript practice and learning exercises |
| `scripts/` | Helper scripts, including environment checks |
| `features/` | Feature-related practice files |
| `playwright.config.ts` | Playwright test configuration |
| `package.json` | Dependencies and npm scripts |

## Available Scripts

| Command | Purpose |
|---|---|
| `npm run check` | Checks environment configuration and API connectivity |
| `npm test` | Runs the complete Playwright test suite |

## TypeScript Practice

The repository also includes TypeScript exercises covering:

- Basic types and tuples
- Functions and objects
- Type aliases and union types
- Optional chaining
- Type-safe user profiles
- Safe handling of optional properties

## Test Execution Results

The complete suite has successfully executed:

- **Total tests:** 6
- **Passed:** 6
- **Failed:** 0
- **Browser:** Chromium

## Security

Never commit your `.env` file. It may contain private configuration and secrets. Keep it excluded through `.gitignore`.

