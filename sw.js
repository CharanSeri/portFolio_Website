self.addEventListener("install", (event) => {
  const cacheKey = "LoadingResource_v2";

  event.waitUntil(
    caches.open(cacheKey).then((cache) => {
      return cache.addAll(["./images/*", "./main.css"]);
    })
  );
});
