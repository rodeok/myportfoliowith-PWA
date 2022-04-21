self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./","./assets/css/styles.min.css","./assets/bootstrap/css/bootstrap.min.css", "./images/logo124.png"])
        })
    )
})
self.addEventListener("fetch", e =>{
    console.log(`intercepting fetch request for: ${e.request.url}`)
})