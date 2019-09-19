<#
  This powershell script contains all functions
  used in the infra as code for our environment
#>
$firstRandomWordsList = "pizza boat chicken steak tofu hotdog".Split(" ")
$secondRandomWordsList = "water soda beer juice".Split(" ")

function generateDeploymentName() {
  $f = $firstRandomWordsList[ (Get-Random $firstRandomWordsList.count) ]
  $m = [char] (65 + (Get-Random $secondRandomWordsList.count))
  $l = $secondRandomWordsList[ (Get-Random $secondRandomWordsList.count) ]
  $generatedName = $f + " " + $m + " " + $l
  return $generatedName
}