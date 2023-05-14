param (
    [string] $Base,
    [string] $Head
)
Write-Host "base: $Base"
Write-Host "head: $Head"

$nxAffected = pnpm nx print-affected --base=$Base --head=$Head --select=projects --plain
$projects = $nxAffected -split ","
foreach ($project in $projects) {
    Write-Host "Affected project: $project"
}