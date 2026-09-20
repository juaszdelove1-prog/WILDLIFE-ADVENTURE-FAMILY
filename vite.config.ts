import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

function buildVersionPlugin() {
  return {
    name: 'waf-build-version',
    closeBundle() {
      writeFileSync(
        resolve(process.cwd(), 'dist/build-version.json'),
        JSON.stringify({ version: Date.now().toString() }),
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), buildVersionPlugin()],
})
