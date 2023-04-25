# Pathings

A simple game made with React.js

# Deploy on GitHub Pages

$env:NODE_OPTIONS = "--openssl-legacy-provider"
npm run deploy

function getCellRow(cellId) {
return parseInt(cellId / columns);
}

function getCellColumn(cellId) {
return cellId % columns;
}
