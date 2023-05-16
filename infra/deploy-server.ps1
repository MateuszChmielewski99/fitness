$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$appPath = Join-Path $scriptPath "..\apps\server\dist"
Set-Location $appPath

Write-Host "Deploying server"

az webapp up --sku FREE --runtime "NODE:16-lts" -n fitness-server --resource-group fitness

Set-Location $scriptPath