# Ensure dist directory exists
New-Item -ItemType Directory -Force -Path dist

# Compile TypeScript
npx tsc

# Copy manifest and HTML files to dist
Copy-Item -Path "manifest.json" -Destination "dist\manifest.json"
Copy-Item -Path "popup.html" -Destination "dist\popup.html"
