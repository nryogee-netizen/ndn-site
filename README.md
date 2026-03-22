# NDN - Company Profile (Static Website)

This folder contains a simple static website that presents the Company Profile for NDN.

Files
- `index.html` — main page
- `css/style.css` — site styles
- `assets/logo.svg` — company logo
- `assets/batch_screen.png` — sample screen image
 - Contact (from PDF): NDN Controls & Automation
	 - Postal Address: #742, 14th Cross, Behind Widia Poornapragna School, Bangalore - 560073
	- Mobile: [ +91 99727 00220 ](tel:+919972700220), [ +91 94825 95796 ](tel:+919482595796)
	- Email: [ndncontrols@gmail.com](mailto:ndncontrols@gmail.com)
	- Company Profile PDF: `COMPANY PROFILE NDN 2025.pdf` (also available as extracted text `company_profile.txt`)

Local preview (PowerShell)
1. Open PowerShell and change directory to this folder:

```powershell
cd "C:\Users\DELL\Desktop\Java hands on\web_page creation\website"
```

2. Start a local HTTP server (PowerShell 3+ / Python installed):

If you have Python 3:

```powershell
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

If you don't have Python, you can use PowerShell's built-in SimpleHTTP server alternative (PowerShell 6+):

```powershell
# For PowerShell 6+, use: pwsh -c "dotnet serve -d . -p 8000"  # if dotnet-serve installed
```

Publish to GitHub Pages (quick steps)
1. Create a new repository on GitHub.
2. Commit the contents of this folder to the repository (push to the `main` branch).
3. In the repository Settings → Pages, set source to `main` branch and `/ (root)`.
4. Wait a few minutes; your site will be available at `https://<username>.github.io/<repo>/`.

Notes and next steps
- Replace the placeholder contact details and logo with real assets.
- Add accessibility improvements, meta tags for SEO, and structured data if needed.
- For a production site, add HTTPS and set up a custom domain in GitHub Pages settings.

If you want, I can also:
- Create a Git repo and commit these files for you (you'll need to provide GitHub credentials or run the final push locally)
- Improve the design, add more pages (About, Services, Projects), or convert into a small React/Vue site.

Publish helper (one-command)
If you prefer a one-step helper, run `publish.ps1` from PowerShell inside this folder. It will ask for your repo URL and whether to publish to `main` or `gh-pages`.

Example (PowerShell):

```powershell
cd "C:\Users\DELL\Desktop\Java hands on\web_page creation\website"
.\publish.ps1
```
