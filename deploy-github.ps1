# GitHub Pages Deployment Script
Write-Host "=== GitHub Pages Deployment ===" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Build the project
Write-Host "Building project..." -ForegroundColor Yellow
npm run build

# Create gh-pages branch deployment
Write-Host ""
Write-Host "Setting up GitHub Pages..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Green
Write-Host "1. Create a new repository on GitHub (e.g., 'aura25-fest-website')" -ForegroundColor White
Write-Host "2. Run these commands:" -ForegroundColor White
Write-Host ""
Write-Host "   git add ." -ForegroundColor Cyan
Write-Host "   git commit -m 'Initial commit'" -ForegroundColor Cyan
Write-Host "   git branch -M main" -ForegroundColor Cyan
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/aura25-fest-website.git" -ForegroundColor Cyan
Write-Host "   git push -u origin main" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. Install gh-pages: npm install --save-dev gh-pages" -ForegroundColor White
Write-Host "4. Add to package.json scripts: 'deploy': 'gh-pages -d build'" -ForegroundColor White
Write-Host "5. Run: npm run deploy" -ForegroundColor White
Write-Host ""
Write-Host "Your site will be at: https://YOUR_USERNAME.github.io/aura25-fest-website" -ForegroundColor Green

