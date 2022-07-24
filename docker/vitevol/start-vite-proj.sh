#! /usr/bin/env bash
cd /app/frontend
npm install
echo "Port before default assignment: $PORT"
echo "PORT is ${PORT}"

/app/vitebin/node_modules/.bin/vite --host 0.0.0.0 --port $PORT
