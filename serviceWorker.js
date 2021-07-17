const staticCurCon = "Currency Convertor"
const assets = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./country_code.pdf"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCurCon).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })