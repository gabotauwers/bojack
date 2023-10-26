const boveda = 'Boveda1';
self.addEventListener('install', e => {
    const recursos = caches.open(boveda).then(cache => {
        cache.add('/'),
        cache.add('index.html'),
        cache.add('personajes.html'),
        cache.add('bojack.html'),
        cache.add('todd.html'),
        cache.add('princess.html'),
        cache.add('wanda.html'),
        cache.add('mr.html'),
        cache.add('diane.html'),
        cache.add('herb.html'),
        cache.add('charlotte.html'),
        cache.add('secretariat.html'),
        cache.add('sarah.html'),
        cache.add('js/app.js'),
        cache.add('css/style.css'),
        cache.add('css/bojack.css'),
        cache.add('css/bootstrap.css'),
        cache.add('css/personajes.css'),
        cache.add('sw.js'),
        cache.add('manifest.json'),
        cache.add('icons/32x32.png'),
        cache.add('icons/48x48.png'),
        cache.add('icons/64x64.png'),
        cache.add('icons/72x72.png'),
        cache.add('icons/96x96.png'),
        cache.add('icons/128x128.png'),
        cache.add('icons/256x256.png'),
        cache.add('icons/512x512.png'),
        cache.add('img/bo.png'),
        cache.add('img/bojack.ico'),
        cache.add('img/bojack.jpg'),
        cache.add('img/bojack1.png'),
        cache.add('img/charlotte.jpg'),
        cache.add('img/diane.png'),
        cache.add('img/herb.jpg'),
        cache.add('img/mr.png'),
        cache.add('img/princess.jpg'),
        cache.add('img/sarah.webp'),
        cache.add('img/secretariat.jpg'),
        cache.add('img/todd.jpg'),
        cache.add('img/wanda.webp')
    })
    e.waitUntil(recursos);
})

// self.addEventListener('fetch', e => {
//   //estrategia 1, acceso solo al cache
//   const respuesta = caches.match(e.request)
//       .then(res => {
//           if (res) return res;
//           console.log('No existe el recurso de caché ->', e.request.url);
//           return fetch(e.request).then(newResp => {
//               caches.open(boveda)
//                   .then(cache => {
//                       cache.put(e.request, newResp)
//                   });
//           });
//       });
//   e.respondWith(respuesta);
// })

//estrategia 3 first network then cache
self.addEventListener('fetch', e => {
    const respuesta = fetch(e.request).then((newResp) => {
        caches.open(boveda)
            .then((cache) => {
                cache.put(e.request, newResp)
            });
        return newResp.clone();
    }).catch(err => {
        return caches.match(e.request);
    })
    e.respondWith(respuesta);
});

//descargar iconos de 24x24, 48x48, 128x128, 256x256 para el manifest
