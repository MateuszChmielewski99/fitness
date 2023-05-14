param ($base, $head)
Write-Host $base
Write-Host $head

$nxAffected = pnpm nx print-affected --base=$base --head=$head --select=projects --plain
$projects = $nxAffected -split ","
foreach ($project in $projects) {
    Write-Host "Affected project: $project"
}