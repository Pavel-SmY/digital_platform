# Copilot / AI Agent Instructions

Purpose
- Give an AI coding agent the minimal, concrete context needed to be productive in this repository.

Big picture
- This is a small static website repository (no build system). Main pages live at the repository root: `index.html` and `moex.html`. See the human-facing overview in `README.md`.
- No server-side code, package.json, or test suite detected — changes should keep the site static and simple.

Key files
- `index.html` — site landing page and main navigation.
- `moex.html` — secondary content page (specific domain content).
- `README.md` — project description and any manual instructions.

Developer workflows (what works here)
- Local preview: use a simple static server from the repo root. Example:

```
python -m http.server 8000
# or
php -S localhost:8000
```

- Edits: change the HTML files directly. Use relative links and keep UTF-8 encoding.
- Commit convention: small, focused commits are appropriate for static content. Provide a one-line summary and a short body when needed.

Project-specific patterns & conventions
- No frontend build tools — avoid introducing bundlers or transpilers unless you add a clear README documenting the reason.
- Keep markup self-contained: scripts/styles should be added as separate files only when they are shared across pages.
- Use relative links (e.g., `./moex.html`) to preserve portability when previewing locally.

Integration points & external dependencies
- None discovered in repository files. If adding third-party assets, include them under an `assets/` directory and document in `README.md`.

Examples of common AI tasks (how to make safe edits)
- Add a new static page: create `newpage.html`, add a nav link to `index.html`, and verify locally with `python -m http.server`.
- Fix a broken link: update the `href` in the relevant HTML file and run the local server to validate.
- Insert a small script: prefer adding `scripts/main.js` and reference it from pages rather than inlining large blocks.

Merge guidance for this file
- If a pre-existing `.github/copilot-instructions.md` exists, preserve any customized sections that explain non-obvious workflows or historical decisions. Merge this content under an "Agent-supplement" heading.

If anything is unclear
- Ask: "Which page is the canonical source for navigation/content?" or "Do you want to introduce a build step (npm/webpack) or keep static?"

Quick checklist for PRs modifying content
- Run local server and visually verify pages.
- Include screenshots in the PR if the change affects UI/text layout.
- Keep changes small and explain intent in PR description.

End of instructions.
