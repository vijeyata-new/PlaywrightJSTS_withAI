# AGENTS.md

## Project overview
- This repository is a beginner JavaScript exercise set focused on small, standalone scripts.
- Most work lives under `JS_Basics/` and is written in plain JavaScript.
- There is no framework, build pipeline, package manager setup, or automated test suite in this project.

## Working conventions
- Keep files small and focused on one learning concept.
- Prefer simple, readable JavaScript without extra tooling or abstractions.
- Follow the existing naming pattern of numbered lesson files such as `01_HelloWorld.js` and `02_Math.js`.
- Use direct DOM APIs when working with browser examples and keep the example self-contained.
- Favor clear variable names and minimal, explanatory comments.

## Validation
- Run JavaScript files directly with Node from the project root:
  - `node JS_Basics/01_HelloWorld.js`
  - `node JS_Basics/02_Math.js`
- If a new script is added, validate it with the same pattern before finishing changes.

## Expectations for future coding agents
- Do not introduce frameworks, bundlers, or dependencies unless explicitly requested.
- Preserve the beginner-friendly structure of the exercises.
- Keep examples easy to run and understand for someone learning JavaScript fundamentals.
