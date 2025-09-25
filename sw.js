const CACHE_NAME = 'webapp-doc-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
  // aggiungi qui eventuali risorse statiche (css, immagini)
];

self.addEventListener('install', (e) =>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (e)=>{
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e)=>{
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
