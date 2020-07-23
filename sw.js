var APP_PREFIX = 'ITU_MERIT_CALCULATOR';
var VERSION = 'Version_2.1';
var CACHE_NAME = APP_PREFIX + '-' + VERSION;
var URLS = [
  '/itu-merit-calculator/index.html',

  '/itu-merit-calculator/css/styles.min.css',
  '/itu-merit-calculator/css/heading.css',
  '/itu-merit-calculator/css/body.min.css',

  '/itu-merit-calculator/js/jquery/3.4.1/jquery.min.js',
  '/itu-merit-calculator/js/bootstrap/4.4.1/bootstrap.bundle.min.js',
  '/itu-merit-calculator/js/jquery-easing/1.4.1/jquery.easing.min.js',

  '/itu-merit-calculator/js/scripts.js',
  '/itu-merit-calculator/js/aggregate.js',

  '/itu-merit-calculator/manifest.json',
];

// Respond with cached resources
self.addEventListener('fetch', function (e) {
  console.log('fetch request: ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        // if cache is available, respond with cache
        console.log('responding with cache: ' + e.request.url);
        return request;
      } else {
        // if there are no cache, try fetching request
        console.log('file is not cached, fetching: ' + e.request.url);
        return fetch(e.request);
      }
    })
  );
});

// Cache resources
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache: ' + CACHE_NAME);
      return cache.addAll(URLS);
    })
  );
});

// Delete outdated caches
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      // `keyList` contains all cache names under hamza-56.github.io
      // filter out ones that has this app prefix to create white list
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });
      // add current cache name to white list
      cacheWhitelist.push(CACHE_NAME);

      return Promise.all(
        keyList.map(function (key, i) {
          if (cacheWhitelist.indexOf(key) === -1) {
            console.log('deleting cache: ' + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});
