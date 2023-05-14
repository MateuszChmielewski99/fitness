param (
    [string] $Base,
    [string] $Head
)

$nxAffected = pnpm nx print-affected --base=$Base --head=$Head --select=projects --plain
$projects = $nxAffected -split ","
foreach ($project in $projects) {
    Write-Host "Affected project: $project"
    gh workflow run deploy.yaml -f name=$project
}