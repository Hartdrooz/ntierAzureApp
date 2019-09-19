.\function.ps1

<#
 This script deploy all the infrastructure of the FakeInsurance Azure Architecture
#>
Clear-Host

$primaryLocations = "eastus","eastus2","westus2"
$resourceGroupName = Read-Host "Enter the resource group name to create"
$idx = 1;

Clear-Host

Write-Host "Location"
Write-Host "------------"

# Prompt location so user can select one
foreach($location in $primaryLocations) {
  Write-Host "[$idx] - $location"
  $idx = $idx + 1
}

$locationIdx = Read-Host "`n Please select a location"
$locationIdx = [convert]::ToInt32($locationIdx)

Clear-Host

# Validate the location
if ($locationIdx -gt 3 -or $locationIdx -lt 1) {
   Write-Error "The location entered is invalid it needs to be an integer betweeen 1 and 3"
   exit
}