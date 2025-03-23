# Update all Git submodules
Write-Host "Updating Git submodules..."
git submodule update --init --recursive

# Find all submodules and get their paths
$submodules = git submodule status | ForEach-Object {
    # Extract the submodule directory (the third word)
    $_.Split(' ')[2]
}

# Loop through each submodule and run pnpm install
if ($submodules.Count -gt 0) {
    Write-Host "Installing dependencies in submodules..."
    foreach ($submodule in $submodules) {
        $packageJsonPath = "$submodule/package.json" # Construct the full path
        if (Test-Path $packageJsonPath) { # Check if package.json exists
            Write-Host "Installing dependencies in submodule: $submodule"
            Push-Location $submodule # Change directory to the submodule
            if (Get-Command pnpm -ErrorAction SilentlyContinue) {
                pnpm install
            } else {
                Write-Host "pnpm is not installed. Skipping $submodule"
            }
            Pop-Location # Go back to the original directory
        } else {
            Write-Host "No package.json found in $submodule. Skipping."
        }
    }
} else {
    Write-Host "No submodules found."
}

Write-Host "Done!"