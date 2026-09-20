/// <reference types="@cloudflare/workers-types" />

interface Env {
  ASSETS: Fetcher
}

const seoPages: Record<string,{title:string;description:string}> = {
  '/about': {title:'Kuhusu Wildlife Adventure Family (WAF) Tanzania',description:'Fahamu Wildlife Adventure Family (WAF), NGO ya Tanzania inayokuza uhifadhi wa wanyamapori, mazingira, jamii na utalii endelevu.'},
  '/conservation': {title:'Uhifadhi wa Wanyamapori na Mazingira | WAF Tanzania',description:'Wildlife Adventure Family inakuza uhifadhi wa wanyamapori, bioanuwai, makazi ya asili na mazingira nchini Tanzania.'},
  '/sustainable-tourism': {title:'Utalii Endelevu Tanzania | Wildlife Adventure Family',description:'WAF inakuza utalii endelevu na unaowajibika unaothamini mazingira, wanyamapori, urithi na jamii Tanzania.'},
  '/tanzania': {title:'Tanzania Yetu | Mazingira, Utamaduni na Urithi | WAF',description:'Gundua Tanzania kupitia maudhui ya WAF kuhusu mazingira, wanyamapori, jamii, utamaduni na urithi.'},
  '/news': {title:'Habari na Simulizi | Wildlife Adventure Family Tanzania',description:'Habari rasmi, elimu ya mazingira na simulizi za uhifadhi kutoka Wildlife Adventure Family Tanzania.'},
  '/contact': {title:'Wasiliana na Wildlife Adventure Family (WAF) Tanzania',description:'Mawasiliano rasmi ya Wildlife Adventure Family (WAF), Buswelu, Ilemela, Mwanza, Tanzania.'}
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
      const response = await env.ASSETS.fetch(new Request(home, request))
      if (request.method !== 'GET' || !response.headers.get('content-type')?.includes('text/html')) return response
      let html = await response.text()
      const seo = seoPages[url.pathname]
      const canonical = `https://nebrinonlineonesignal.com${url.pathname}`
      html = html
        .replace(/<title>[^<]*<\/title>/i, `<title>${seo.title}</title>`)
        .replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${seo.description}">`)
        .replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}">`)
        .replace(/<meta property="og:title"[^>]*>/i, `<meta property="og:title" content="${seo.title}">`)
        .replace(/<meta property="og:description"[^>]*>/i, `<meta property="og:description" content="${seo.description}">`)
        .replace(/<meta property="og:url"[^>]*>/i, `<meta property="og:url" content="${canonical}">`)
      return new Response(html,{status:response.status,headers:response.headers})
    }

    return env.ASSETS.fetch(request)
  },
} satisfies ExportedHandler<Env>
