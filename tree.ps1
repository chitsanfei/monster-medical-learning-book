$rootPath = "."
$depth = 1

function Get-Tree {
    param([string]$path, [int]$level)
    if ($level -le 0) { return }
    Get-ChildItem -Path $path | ForEach-Object {
        if ($_.PSIsContainer) {
            Write-Host "+--" $_.Name
            Get-Tree $_.FullName ($level - 1)
        } else {
            Write-Host "|  " $_.Name
        }
    }
}

Get-Tree $rootPath $depth
