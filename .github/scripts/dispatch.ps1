$nxAffected = pnpm nx print-affected --base=main --head=HEAD --select=projects --plain
$projects = $nxAffected -split ","
foreach ($project in $projects) {
    Write-Host "Affected project: $project"
}