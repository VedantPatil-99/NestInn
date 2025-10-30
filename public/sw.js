const CACHE_NAME = "nestinn-v1";
// This is the "App Shell" - the core files your app needs to run.
const URLS_TO_CACHE = [
	"/",
	"/hostels",
	"/manifest.json",
	"/css/style.css",
	"/css/components/footer.css",
	"/css/components/map.css",
	"/css/components/rating.css",
	"/css/reviews.css",
	"/css/showDetails.css",
	"/icons/NestInn_logo.jpg",
	"/icons/Airbnb_icon.png",
	// We will NOT cache dynamic pages like /hostels/:id or /reservations
];

// 1. Install the Service Worker
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("Opened cache");
			return cache.addAll(URLS_TO_CACHE);
		}),
	);
});

// 2. Serve cached content
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches
			.match(event.request)
			.then((response) => {
				// If the request is in the cache, return it
				if (response) {
					return response;
				}
				// Otherwise, fetch it from the network
				return fetch(event.request);
			}),
	);
});

// 3. Clean up old caches
self.addEventListener("activate", (event) => {
	const cacheWhitelist = [CACHE_NAME];
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (
						cacheWhitelist.indexOf(cacheName) ===
						-1
					) {
						return caches.delete(cacheName);
					}
				}),
			);
		}),
	);
});
