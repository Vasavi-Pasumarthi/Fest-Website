# Automated Deployment Script
Write-Host "=== AURA'25 Website Deployment ===" -ForegroundColor Cyan
Write-Host ""

$buildPath = Join-Path $PSScriptRoot "build"

if (-not (Test-Path $buildPath)) {
    Write-Host "Building website..." -ForegroundColor Yellow
    npm run build
}

Write-Host ""
Write-Host "Deployment Options:" -ForegroundColor Green
Write-Host ""
Write-Host "OPTION 1 - Netlify Drop (FASTEST - 30 seconds):" -ForegroundColor Yellow
Write-Host "1. Open: https://app.netlify.com/drop" -ForegroundColor White
Write-Host "2. Drag folder: $buildPath" -ForegroundColor White
Write-Host "3. Get instant URL!" -ForegroundColor White
Write-Host ""
Write-Host "OPTION 2 - Surge.sh (2 minutes):" -ForegroundColor Yellow
Write-Host "cd build" -ForegroundColor White
Write-Host "surge" -ForegroundColor White
Write-Host ""
Write-Host "Opening Netlify Drop in browser..." -ForegroundColor Cyan
Start-Process "https://app.netlify.com/drop"

