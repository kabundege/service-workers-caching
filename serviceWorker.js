const cachName = "V2";

self.addEventListener('install', e => { console.log('service worker installed') })

self.addEventListener('activate',e => { console.log("service worker is activated"); })

self.addEventListener('fetch',e =>{
    e.respondWith(
        fetch(e.request)
        .then(res => {
            const resClone = res.clone();

            caches.open(cachName).then(cache => {
                cache.put(e.request,resClone);
            })

            return res;
        })
        .catch(err=> caches.match(e.request).then(res => res))
    )
})
