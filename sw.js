self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("webapp-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "style.css",
        "manifest.json",
        "assets/icons/icon-192.png",
        "assets/icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
