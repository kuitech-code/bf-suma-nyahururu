import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const dist = resolve(root, 'dist')
const origin = 'https://sumahealth.co.ke'
const appHtmlPath = resolve(dist, 'index.html')
const appHtml = await readFile(appHtmlPath, 'utf8')

async function readIds(relativePath) {
  const source = await readFile(resolve(root, relativePath), 'utf8')
  const ids = [...source.matchAll(/\bid:\s*'([^']+)'/g)].map((match) => match[1])

  if (ids.length === 0) {
    throw new Error(`No route IDs found in ${relativePath}`)
  }

  return ids
}

const productIds = await readIds('src/data/product.js')
const healthTopicIds = await readIds('src/data/healthTopics.js')
const routes = [
  '/',
  '/products/',
  ...productIds.map((id) => `/products/${id}/`),
  '/health-topics/',
  ...healthTopicIds.map((id) => `/health-topics/${id}/`),
]

for (const route of routes.slice(1)) {
  const routeHtmlPath = resolve(dist, ...route.split('/').filter(Boolean), 'index.html')
  const canonicalUrl = `${origin}${route}`
  const routeHtml = appHtml
    .replace(
      /<link rel="canonical" href="[^"]+" \/>/,
      `<link rel="canonical" href="${canonicalUrl}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]+" \/>/,
      `<meta property="og:url" content="${canonicalUrl}" />`,
    )

  await mkdir(dirname(routeHtmlPath), { recursive: true })
  await writeFile(routeHtmlPath, routeHtml)
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => `  <url><loc>${origin}${route}</loc></url>`),
  '</urlset>',
  '',
].join('\n')

await writeFile(resolve(dist, 'sitemap.xml'), sitemap)
