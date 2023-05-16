$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$appPath = Join-Path $scriptPath "..\apps\client"
Set-Location $appPath

$key = az staticwebapp secrets list --name client --query "properties.apiKey"

Write-Host "Deploying new instance client app..."
swa deploy -O "./dist" -R "fitness" -n "client" -nu --env production --deployment-token $key

Set-Location $scriptPath
