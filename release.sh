echo "enter version (E.g. v0.4.2):"
read version

echo "clearing project from current tenant"

npm 'test' '--' '--runInBand' '--watchAll=false'
npm run prepare
git add .
git add dist
git commit -m "${version} release"
git tag -a -m "${version} release" "${version}"
git push

echo "new version ${version} released"
