$currentDir = Get-Location
$subdirectories = Get-ChildItem -Path $currentDir -Directory
foreach ($subdir in $subdirectories) {
    $packageJsonPath = Join-Path -Path $subdir.FullName -ChildPath "package.json"
    if (Test-Path -Path $packageJsonPath) {
        Write-Host "Running yarn in $($subdir.FullName)..." -ForegroundColor Green
        try {
            yarn --cwd "$($subdir.FullName)"
        } catch {
            Write-Error "Failed to run yarn in $($subdir.FullName): $($_.Exception.Message)"
        }
        Set-Location -Path $currentDir
    }
}
Write-Host "Script completed." -ForegroundColor Yellow