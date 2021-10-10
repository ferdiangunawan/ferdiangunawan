'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9a4dddba415c9ee5265cd5f5d9963a6a",
"index.html": "3e5f3e40bc30d551706e47d83b90d2d6",
"/": "3e5f3e40bc30d551706e47d83b90d2d6",
"main.dart.js": "3fb3c3cdc8343a0183686a8738a85bf6",
"favicon.png": "09a5ed7ea64e2ebf867e51776a52626a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "16903bfeca52a82e56468f3d1cf29796",
".git/config": "a25dbb5a7bd609b2756eda3964fc87d8",
".git/objects/95/d0fe92d0ba73efa8de6be73fa4b3456faa4e3b": "73aac67c9519740b83184e5237c64efb",
".git/objects/0c/4081edd4133938d5a941a31a8a02cf61e62a5a": "9728a1f24aea717e408ab3cfaa567fa0",
".git/objects/0c/d1c585ae70b9a8b0a5f3bf8da93e0cbd65d5c2": "077b47e22417300d398f6a3a5235dfc4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/3c4ede02784eb55822825cb4075e5ca2aadcfb": "fbeabcc2218073effb37df455f8297ae",
".git/objects/58/ca4b00868c3349ae46ab8f39cb4b4b9cee008e": "1406072f0bdad3bd98da38f44b0b4e24",
".git/objects/93/6529d8444fb20c05004451d5e5af84c40d7e0e": "a24efd4e9d0181bed67577da2bef25ef",
".git/objects/0e/5e43a15583bde63df4833d78d50d324535b3ae": "83528c6e2ea7b6d955afa6541caa4f40",
".git/objects/60/3f6d29d222c05e35730da17453df045be9a994": "2c51cfcdc6bd232d815bb9692cc23b6d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/39ede169d9e1709acd92ed042c5ed27be91caa": "32b198db84db79e6e3ec6775dcba44b2",
".git/objects/cf/6ccb31a6f3213513a1faf2aaf54f0ed56eaecf": "30ff72c699ee6851ce855b5f2de960f5",
".git/objects/fb/47e7fd4ab44e20e594f3eeae8caed3bbbd77e4": "af796e40d037e8a73d245b179fca1277",
".git/objects/c6/e9df7df4361de27d55818c826cce612279d06f": "17140d7d5afd63032855733dadbfaf7b",
".git/objects/ec/084325b2270ff92438647621a4ea70eedaf262": "8cef6a5e0025d8ff977185270b48be92",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/pack/pack-05c815f10d4657ca149765489ca25824fa6b879c.pack": "ceb8b077a1b3daf9e3730d8d09d18194",
".git/objects/pack/pack-05c815f10d4657ca149765489ca25824fa6b879c.idx": "d22f48a5858f1f215d465b9ab67fe35e",
".git/objects/11/a8efef3c9c404f7e0769875ac201641815cc50": "f8fafba35710b4792b155f09d03eef9e",
".git/objects/89/29aa3b1974aa59dd6ac4a9a2f1bdc24d357cee": "9a7fc7469ada23dc0a019439244b2ceb",
".git/objects/45/9487d85d9a5ecd7fc9e743704f9bd3de57b65e": "9491b56c81c3df6a7a25f17b51be9718",
".git/objects/80/37280719d5b82745361ca1249084ebec98ed24": "a0db4e2049d1517b63da152128f7c010",
".git/objects/1a/5d9c2b1eb2d6e123951d41042376bb4fecb4c6": "78f4d462865e71129685e027ae7ea100",
".git/objects/28/5af19978ebdfd1fe390f31aaeb4d591c68052e": "1bf579a1efd229b865a336714e88efa1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/e120db6e57307722cba255081f11a628a6a862": "271680603f4171ab713e47390944775e",
".git/objects/21/6bc89d1d065664e344e3b4250729ff55e5897d": "359f77ef243b0fb0138adbaa738820f8",
".git/objects/75/21dd584bfc121a660d5e8677775d530e655d8d": "7933c77716671c76390e34f54f418925",
".git/objects/81/0002e1085f23632616dd522740e5bd7832fde4": "e3b0d180e43a87cc0d8d861ed6c77d76",
".git/objects/81/c741ad283e28c47207ab8293e8ff169ede4838": "1157706a893592efab42ba38f300ab54",
".git/objects/86/253c09addca9eb96a3fd9b715ecb2532393326": "5910d962ba3388987f6abb6a8b712c89",
".git/objects/72/ed29218681e58898339baffcde78d4bce49179": "30a80c549f558ec2f96f2f25b1180954",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/1c7d307c32b711430ec40fe3945ed7cc61b098": "dcaae1ca4d0391720253761d15df74db",
".git/objects/6e/1452e6bb4d1872433b7f4e797fb6ab32320c71": "63fca158b33bcc0025368b2ab1ebaa06",
".git/objects/5c/5b76cb094ededa3caa21dda7adb19c677a772d": "15977d7b774c7c49d4d1dfd1953ea9d2",
".git/objects/31/01c874311d7c55c374ac49c75c9a37d6d1a669": "f80aa484dca3dfda74c43f73cf3ca54b",
".git/objects/65/861b91fe7af65372dcdeed4c8d71a8301a3760": "934d64c543d9c19ecb51fa44d35a1d4b",
".git/objects/96/8fc909157a7f2c74e1f5cf8d1236d128b8a0be": "631a66453edfb784ce2c79d9da5868dd",
".git/objects/3a/d9e365388f9e1ae2519cb7cae14ef29e7a6e4e": "ee6f7f92be697832d6a61cdbf1ad0813",
".git/objects/53/a294a5c0ec19088fc994327e25c60ec93a1a11": "4a03d1450b93011c977279b025a5dc38",
".git/objects/30/2366ddba2562cba659eca831398230b61b5539": "cc65a385539e13e85d579ad267584b41",
".git/objects/5e/da3bca41e82c8f6d61ed9acadb9f5b56d3066d": "813155e1f378f90cea00052d74bc6cc8",
".git/objects/5e/84475f6a59175414698deddf743badb9405638": "af9314f4e03823a4e1417e30a5fa92e2",
".git/objects/99/70a8409f20d1697710d2c4f8596ac1fbe96c1a": "20aaca7e90d161bf9b824daab286c7ef",
".git/objects/63/b9e414a0bc85106d6b5490847276a579f49d01": "9338b648e6e14963c3a4c40efad05b62",
".git/objects/0a/7a7a6c3dfd7fa2a77646f553ab4c0075cb5f07": "811ec662ffb3c5f582196eec2be2ba69",
".git/objects/bf/ef26a1fde29ad0d1243599d3d2a2681aba1460": "9d5c760ceefa8e0ff6338cd7e7f27120",
".git/objects/d3/546f711d29de49f8330c0d8032cbaf878794a8": "c7fba2affc972ef91473624cd57dbbff",
".git/objects/b6/0c28e2b3cfb2dd53b53182e0b277838db91bf2": "cb9d6770a1b6bedc0c61c513c843f705",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/3ed321d33590bd21e6adf602528f4ebb8bdd08": "18d4c07aeea197e0de4d5c12edf54d27",
".git/objects/79/b096439cfafeeb6a7d6d81ae7d0efc197beeb6": "bcdadb986b2da43b599d6f450a8bfc3a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/1e/2341f4ed2d5d9fe7c30415bd7fbf0e967225ec": "f7006ce7aa28f15d9a273d2378f0ddac",
".git/objects/23/e733823c7e58180b397874392ec90e22fcb642": "a60314c13da82675ae616f9f31d131d4",
".git/objects/1d/732497660bf5be506f14f700ae28b8e27464c0": "b5c48c269a44f518f892990ddae03e96",
".git/objects/76/c778e7b105262127fff73e580a7bb6ce504593": "b87a3db8364eb6dbd42297383bd36744",
".git/objects/40/f35211c803352408149169cdea5f705e5d5b6f": "093e4e2c5bc01d8668b59eeb03354c82",
".git/objects/13/737097e3f9cd2e151aa152c6701f502395d645": "582d81eac6d17990632ea5879b706b0f",
".git/objects/7f/82a9d995b0247386bbf8dd80f313ccd71ff9da": "ff34aca8191e0e00716410bef34c59a1",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "54f261e587fbb8d66033fb0c68bb5af3",
".git/logs/refs/heads/master": "314ebd162132df921c83ffc8cf0e8607",
".git/logs/refs/remotes/origin/gh-pages": "36c7543e39feedc8c032c07b8e0f3964",
".git/logs/refs/remotes/origin/master": "62be32718772d3f7a6c98091f51f2ab3",
".git/logs/refs/remotes/origin/main": "ec8fbf44d3df0f48625166ff796c42fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "20067782f8ff44877505a04ab42c13f0",
".git/refs/remotes/origin/gh-pages": "e4d3b98a9bec6a2e8322c9581a082d29",
".git/refs/remotes/origin/master": "20067782f8ff44877505a04ab42c13f0",
".git/refs/remotes/origin/main": "4a971f9f8f4009855bdaa2aaa19170e2",
".git/index": "0d4d2908bc394586bbeffdf8b2d43a48",
".git/COMMIT_EDITMSG": "d9cca721a735dac4efe709e0f3518373",
".git/FETCH_HEAD": "5f32ee025f839d207fb445abcfa09736",
"assets/images/icon.png": "09a5ed7ea64e2ebf867e51776a52626a",
"assets/images/icon.jpg": "7d592b1688dfb9f3dd9b1d069855e11f",
"assets/images/projects/serviceguidance.jpeg": "e05f676d95d00acee8506541a57bd92c",
"assets/images/projects/ontix.jpeg": "76305cf52017f9f2d0de74e1028dccbc",
"assets/images/projects/kos.png": "e5e577578f91d0175721bf9ab7317154",
"assets/images/projects/foodApp.png": "b121dafa53f316061946348a8662d38f",
"assets/images/projects/mhcm.jpeg": "f050829858ec470e0ff0dc6da99262c2",
"assets/images/cover1.jpeg": "2856764762fc7f3e4b0deaec0b946ac8",
"assets/images/background.jpg": "346c1daab54715d3701cddb8b2ee0999",
"assets/images/fgdev.png": "09a5ed7ea64e2ebf867e51776a52626a",
"assets/images/cover2.jpeg": "4fde956500b07cc378d897ef9e2a49a5",
"assets/images/cover.jpg": "1d39c3dd934e44b95eb2ad8533aa8068",
"assets/images/dart.jpeg": "173d584f104b2a3cd35febe063da014b",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "5942a499b77efb549382e7fdaab603a4",
"assets/FontManifest.json": "56a6be909b7a2d8103740792f4ede9ff",
"assets/icons/email.png": "ecf609bb48c645251a898c5527f7c781",
"assets/icons/happy.png": "3837c30afeb5b40886a787810f553fc3",
"assets/icons/design.png": "c59f68c8be347d0a5231b2b714421b24",
"assets/icons/coffee.png": "19e4f65ea926133b771bf82daa35f5d4",
"assets/icons/double-up-arrow.png": "d758827b82d3262d54d19f7482c36b63",
"assets/icons/pin.png": "c40700870fa15459e94f3ffd6eccfcfd",
"assets/icons/briefcase.png": "12e9358e8dbae5cb406a7abeec84d4f5",
"assets/icons/github.png": "0918d78648457def080137b179fc5608",
"assets/icons/list.png": "4e63ee6122b58866f4a2d2408c02f9ef",
"assets/icons/menu.png": "3ca1d45f78b3acb1d2a89a53271a21db",
"assets/icons/twitter.png": "cadd7c4e3a3a29ddfa395393e652012a",
"assets/icons/linkedin.png": "3c963b14a58df80613b15c7e9e4e9c57",
"assets/icons/call.png": "9e299bb392428812cffbdadaf9272b15",
"assets/icons/pencil.png": "4566fb93d2196b9b2b74be9cfe23d0c8",
"assets/icons/facebook.png": "d03d1cb8afb8da75756264994a9ce4d4",
"assets/icons/coding.png": "c8150fc2000e8674220bcd485b30e68f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
