param ($base)
Write-Output "Hejo"
$nxAffected = pnpm nx print-affected --base=$base --select=projects --plain
$projects = $nxAffected -split ","
foreach ($project in $projects) {
    Write-Host "Affected project: $project"
}