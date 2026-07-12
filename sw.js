const CACHE='chatboot-9.2-mobile-real';
const CORE=['./','./index.html','./admin.html','./admin-app.js','./api-config.js','./api-integration.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./image-removebg-preview (22).png','./WHATS-removebg-preview.png','./CONSULTA-removebg-preview.png','./SALDOS-removebg-preview.png','./videos-01.png',
  './ai-assistant.js',
  './experience-upgrades.js'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(
    fetch(e.request).then(r=>{
      if(r && r.ok){
        const copy=r.clone();
        caches.open(CACHE).then(c=>c.put(e.request,copy));
      }
      return r;
    }).catch(async()=>{
      const cached=await caches.match(e.request);
      if(cached) return cached;
      if(e.request.mode==='navigate') return caches.match('./index.html');
      return Response.error();
    })
  );
});
