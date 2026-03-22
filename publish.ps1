<#
  publish.ps1
  Enhanced helper to publish the static `website` folder to GitHub.

  Usage: run in PowerShell inside the website folder.
  The script will ask for your repo HTTPS URL and whether to publish using the
  repository `main` branch (you then enable Pages from repo Settings) or push
  the site to an orphan `gh-pages` branch (GitHub Pages can serve from that
  branch automatically in many setups).

  Note: This script performs git operations locally. You must have a working
  Git configuration and permission to push to the target repository. The
  script cannot create a GitHub repository or set repository Settings for you.
#>

$repoUrl = Read-Host "Enter your GitHub repo HTTPS URL (e.g. https://github.com/you/ndn-site.git)"
if ([string]::IsNullOrWhiteSpace($repoUrl)){
  Write-Error "Repository URL is required."
  exit 1
}

$mode = Read-Host "Publish mode? Type 'main' to push to main branch (enable Pages via Settings) or 'gh-pages' to publish to gh-pages branch (recommended for static sites) [main/gh-pages]"
if ($mode -ne 'gh-pages') { $mode = 'main' }

function Ensure-GitInitialized {
  if (-not (Test-Path .git)) {
    git init
    git add .
    git commit -m "Initial commit - NDN website"
    git branch -M main
    git remote add origin $repoUrl
  }
}

Ensure-GitInitialized

if ($mode -eq 'main') {
  git add .
  git commit -m "Update site files" -a 2>$null
  git push -u origin main
  Write-Host "Pushed to 'main'. If this was the first push, go to your GitHub repository -> Settings -> Pages and enable Pages from the 'main' branch (root)."
} else {
  # Create a temporary orphan branch and push its contents to gh-pages
  $currentBranch = (git rev-parse --abbrev-ref HEAD).Trim()
  Write-Host "Creating temporary orphan branch 'gh-pages' and publishing site..."
  git checkout --orphan gh-pages
  git reset --hard
  git add .
  git commit -m "Publish site to gh-pages" -a 2>$null
  # Force push to gh-pages
  git push origin gh-pages --force
  Write-Host "Published to 'gh-pages' branch (force-pushed)."
  # Return to the original branch and clean up index if needed
  git checkout $currentBranch
  Write-Host "Returned to branch $currentBranch. On GitHub, Pages will serve from the 'gh-pages' branch (if configured)."
}

Write-Host "Done. Visit your repository's Pages settings or the URL https://<your-username>.github.io/<repo>/ once GitHub has processed the publish (may take a minute)."