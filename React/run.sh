#!/usr/bin/env bash
# Run the Citadel site locally.
# Usage: ./run.sh [dev|build|test|lint]   (default: dev)
set -euo pipefail

cd "$(dirname "$0")"

cmd="${1:-dev}"

# Prefer bun (the project has a bun.lock), fall back to npm.
if command -v bun >/dev/null 2>&1; then
  pm=bun
elif command -v npm >/dev/null 2>&1; then
  pm=npm
else
  echo "Error: neither bun nor npm is installed. Install Node.js (https://nodejs.org) or Bun (https://bun.sh)." >&2
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "Installing dependencies with $pm..."
  "$pm" install
fi

case "$cmd" in
  dev | build | test | lint)
    "$pm" run "$cmd"
    ;;
  *)
    echo "Usage: $0 [dev|build|test|lint]" >&2
    exit 1
    ;;
esac
