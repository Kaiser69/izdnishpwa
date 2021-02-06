
// storage.googleapis.com/workbox section
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination === "image",
    new workbox.strategies.NetworkFirst()
);

const CACHE_NAME = "versionV1";
const urlsToCache = [ "index.html", "offline.html" ];
// install sw
  self.addEventListener("install", (event) => {
      event.waitUntill(
          caches.open(CACHE_NAME)
              .then((cache) => {
                  console.log("opened cache");

                  return cache.addAll(urlsToCache);
              })
      )

  })

// listen for request

 self.addEventListener("fetch", (event) => {
     event.match(event.request)
        .then(()=> {
            return fetch(event.request)
                .catch(() => caches.match("offline.html"))
        })
      
  })
// activate the sw
self.addEventListener("activate", (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil (
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheNames) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
      
})

let cacheData ="versionV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll ([
                
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/static/js/bundle.js",
                "/static/media/logo.1c996a3e.png",
                "/bootstrap/4.5.2/js/bootstrap.min.js",
                "/bootstrap/4.5.0/css/bootstrap.min.css",
                "/manifest.json",
                "/manifest-icon-192.png",
                "/logo.png",
                "/libs/jquery/3.5.1/jquery.min.js",
                "/libs/popper.js/1.16.0/umd/popper.min.js",
                "/jquery-3.2.1.slim.min.js",
                "/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><path stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>",
                "/static/media/itbanner.3f4eeec2.png",
                "/image/izdinish12.png",
                "/image/izdinish11.png",
                "/image/izdinish10.png",
                "/image/izdinish09.png",
                "/image/izdinish08.png",
                "/image/izdinish06.png",
                "/image/izdinish05.png",
                "/image/izdinish04.png",
                "/image/izdinish03.png",
                "/image/izdinish02.png",
                "/image/izdinish01.png",
                "/NavigationBar.js",
                "/index.html",
                "/data.json",
                "/About",
                "/Home",
                "/"


               

            ])
        })
    )
});

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine) 
    {
        event.respondWith(
            caches.match(event.request).then((resp)=>{
                if(resp)
                {
                    return resp
                }
                let requestUrl= event.request.clone();
                fetch(requestUrl)
            })
        )
    }
   
});
