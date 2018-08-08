
let cacheName = 'v1';
let cacheArray = [         // files to cache
    'index.html',
    'restaurant.html',
    'css/styles.css',
    'data/restaurants.json',
    'js/main.js',
    'js/restaurant_info.js',
    'js/dbhelper.js',    
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
];

/* 02. Call install event */
self.addEventListener('install', (event) => {
    console.log('SW Installed');

    event.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                cache.addAll(cacheArray);  
            })
            .then(() => self.skipWaiting())
    );
  });

/* 03. Call activate event */
self.addEventListener('activate', event => {
    console.log('SW Activated' );
});

/* 04. Call fetch event */
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request  )))
    }
);
