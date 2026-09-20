import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const BUILD_CHECK_INTERVAL = 60_000
const BUILD_VERSION_URL = '/build-version.json'

async function checkForNewBuild() {
  if (document.visibilityState !== 'visible') return

  try {
    const response = await fetch(`${BUILD_VERSION_URL}?t=${Date.now()}`, {
      cache: 'no-store',
    })
    if (!response.ok) return

    const latest = await response.json() as { version?: string }
    const currentVersion = document.documentElement.dataset.buildVersion

    if (!currentVersion && latest.version) {
      document.documentElement.dataset.buildVersion = latest.version
      return
    }

    if (latest.version && currentVersion && latest.version !== currentVersion) {
      window.location.reload()
    }
  } catch {
    // Keep the current page usable when the version check is temporarily unavailable.
  }
}

void checkForNewBuild()
window.setInterval(() => void checkForNewBuild(), BUILD_CHECK_INTERVAL)
document.addEventListener('visibilitychange', () => void checkForNewBuild())

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
