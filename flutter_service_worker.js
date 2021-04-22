'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "56a6be909b7a2d8103740792f4ede9ff",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/icons/briefcase.png": "12e9358e8dbae5cb406a7abeec84d4f5",
"assets/icons/call.png": "9e299bb392428812cffbdadaf9272b15",
"assets/icons/coding.png": "c8150fc2000e8674220bcd485b30e68f",
"assets/icons/coffee.png": "19e4f65ea926133b771bf82daa35f5d4",
"assets/icons/design.png": "c59f68c8be347d0a5231b2b714421b24",
"assets/icons/double-up-arrow.png": "d758827b82d3262d54d19f7482c36b63",
"assets/icons/email.png": "ecf609bb48c645251a898c5527f7c781",
"assets/icons/facebook.png": "d03d1cb8afb8da75756264994a9ce4d4",
"assets/icons/github.png": "0918d78648457def080137b179fc5608",
"assets/icons/happy.png": "3837c30afeb5b40886a787810f553fc3",
"assets/icons/linkedin.png": "3c963b14a58df80613b15c7e9e4e9c57",
"assets/icons/list.png": "4e63ee6122b58866f4a2d2408c02f9ef",
"assets/icons/menu.png": "3ca1d45f78b3acb1d2a89a53271a21db",
"assets/icons/pencil.png": "4566fb93d2196b9b2b74be9cfe23d0c8",
"assets/icons/pin.png": "c40700870fa15459e94f3ffd6eccfcfd",
"assets/icons/twitter.png": "cadd7c4e3a3a29ddfa395393e652012a",
"assets/images/background.jpg": "346c1daab54715d3701cddb8b2ee0999",
"assets/images/cover.jpg": "1d39c3dd934e44b95eb2ad8533aa8068",
"assets/images/cover1.jpeg": "2856764762fc7f3e4b0deaec0b946ac8",
"assets/images/cover2.jpeg": "4fde956500b07cc378d897ef9e2a49a5",
"assets/images/dart.jpeg": "173d584f104b2a3cd35febe063da014b",
"assets/images/fgdev.png": "09a5ed7ea64e2ebf867e51776a52626a",
"assets/images/icon.jpg": "7d592b1688dfb9f3dd9b1d069855e11f",
"assets/images/icon.png": "09a5ed7ea64e2ebf867e51776a52626a",
"assets/images/projects/foodApp.png": "b121dafa53f316061946348a8662d38f",
"assets/images/projects/kos.png": "e5e577578f91d0175721bf9ab7317154",
"assets/images/projects/mhcm.jpeg": "f050829858ec470e0ff0dc6da99262c2",
"assets/images/projects/ontix.jpeg": "76305cf52017f9f2d0de74e1028dccbc",
"assets/images/projects/serviceguidance.jpeg": "e05f676d95d00acee8506541a57bd92c",
"assets/NOTICES": "9dcb6b8ad7282774862631137a92b5a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a8879440dca1a6024dd97e92603d63da",
"/": "a8879440dca1a6024dd97e92603d63da",
"main.dart.js": "02d56b6affe15f0ca34ca930ad3f9fa2",
"manifest.json": "16903bfeca52a82e56468f3d1cf29796",
"version.json": "9a4dddba415c9ee5265cd5f5d9963a6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
