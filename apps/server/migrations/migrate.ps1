$directory  = Get-Location;
$migrationsDir = "migrations"
$migrations = Join-Path -Path $directory -ChildPath $migrationsDir

$files = Get-ChildItem -Path $migrations -File -Filter "*.ts"

foreach ($file in $files) {
    Write-Host "Processing file: $($file.FullName)"
    npx ts-node $file.FullName
}