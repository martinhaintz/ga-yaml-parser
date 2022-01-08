Param(
    [Parameter(Mandatory=$true)] 
    [string]$version
 
 ) #end param
cmd.exe /c npm 'test' '--' '--runInBand' '--watchAll=false'
cmd.exe /c npm run prepare
cmd.exe /c git add .
cmd.exe /c git add dist
cmd.exe /c git commit -m "$($version) release"
cmd.exe /c git tag -a -m "$($version) release" "$($version)"
cmd.exe /c git push