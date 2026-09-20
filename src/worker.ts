/// <reference types="@cloudflare/workers-types" />

interface Env {
  ASSETS: Fetcher
}

const publicRoutes = new Set([
  '/about',
  '/conservation',
  '/sustainable-tourism',
  '/tanzania',
  '/news',
  '/contact',
])

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (publicRoutes.has(url.pathname)) {
      const home = new URL('/', url)
      return env.ASSETS.fetch(new Request(home, request))
    }

    return env.ASSETS.fetch(request)
  },
} satisfies ExportedHandler<Env>
