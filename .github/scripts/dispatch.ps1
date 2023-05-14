param (
    [string] $Base,
    [string] $Head
)

$nxAffected = pnpm nx print-affected --base=$Base --head=$Head --select=projects --plain

if([string]::IsNullOrEmpty($nxAffected)){
    Write-Host "No projets"
    exit 0;
}

$projects = $nxAffected -split ","

foreach ($project in $projects) {
    Write-Host "Affected project: $project"
    # gh workflow run deploy.yaml -F name="$project"
}
