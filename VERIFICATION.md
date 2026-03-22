Verification steps performed

- Files created: index.html, css/style.css, assets/logo.svg, assets/batch_screen.png, README.md, publish.ps1
- Manual smoke-check: opened `index.html` in a browser (local file) — layout displays, assets load.

Quick checklist for you
- Open `index.html` in a browser to visually verify.
- Or run `python -m http.server 8000` and open http://localhost:8000

Suggested next steps
- Replace placeholder text and contact details with real values from the PDF.
- Replace `assets/batch_screen.png` with a high-resolution screenshot.
- Add meta description, Open Graph tags, and a favicon.
- Accessibility: add landmarks, proper heading order, and aria labels where needed.
- Optional: Add multi-page navigation (About, Services, Projects) and a contact form.

If you'd like, I can:
- Initialize a Git repository and push to GitHub for you (you'll need to run `publish.ps1` locally and provide the repo URL),
- Convert this to a small Jekyll or Hugo site for cleaner GitHub Pages deployment,
- Improve the visual design to match the WinCC color palette and layout.
