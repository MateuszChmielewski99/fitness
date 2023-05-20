param (
    [string] $Base,
    [string] $Head
)

$nxAffected = pnpm nx print-affected --base=$Base --head=$Head --select=projects --plain

if ([string]::IsNullOrEmpty($nxAffected)) {
    Write-Host "No projets"
    exit 0;
}

$projects = $nxAffected -split ","

foreach ($project in $projects) {
    Write-Host "Affected project: $project"
    if ($project -eq "@fitness/client") {
        gh workflow run fitness-client.yaml -f name="$project"
    }
    if($project -eq "@fitness/server"){
        gh workflow run fitness-server.yml
    }
}
