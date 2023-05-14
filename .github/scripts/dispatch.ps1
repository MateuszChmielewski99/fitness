param (
    [string] $base,
    [string] $head
)
Write-Host "base: $base"
Write-Host "head: $head"

$nxAffected = pnpm nx print-affected --base=$base --head=$head --select=projects --plain
$projects = $nxAffected -split ","
foreach ($project in $projects) {
    Write-Host "Affected project: $project"
}