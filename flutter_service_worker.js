'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bc59bdd46f0330aa940544d05c5e96d9",
"assets/AssetManifest.bin.json": "df3bf5591ae68a6f6a386587cc8cedfe",
"assets/AssetManifest.json": "5e82810b97dd57a5dbd6ea58e476d37d",
"assets/assets/images/00_madrid/madrid.jpg": "043b7261dd8fa08451489c0c6958f7cc",
"assets/assets/images/01_italia/00_italia.jpeg": "62509ef8337db7424efe49b85829c401",
"assets/assets/images/01_italia/01_italia.jpeg": "19f8759b4ff74fcb8db65cf262ae10d0",
"assets/assets/images/02_pineda/00_pineda.jpeg": "2de768550d070e5af1de84cb7cba342d",
"assets/assets/images/02_pineda/01_pineda.jpeg": "7ec1091ea94525db21a6b11d36b7bd98",
"assets/assets/images/02_pineda/02_pineda.jpeg": "d1df02a769ba22463c2cae91692ee57e",
"assets/assets/images/02_pineda/03_pineda.jpeg": "4594c10a64e279c8a7d0c2e4e6736d58",
"assets/assets/images/02_pineda/04_pineda.jpeg": "a4935086a8363e8b7a41a74d4672d8fd",
"assets/assets/images/02_pineda/05_pineda.jpeg": "e0c536d5fe47fceeeddd647b605f3479",
"assets/assets/images/02_pineda/06_pineda.jpeg": "532ef5d26ba3afba633f07729e916e6b",
"assets/assets/images/02_pineda/07_pineda.jpeg": "933d57dd1915b8d9b4478a59845e600d",
"assets/assets/images/03_francia/00_francia.jpeg": "f327de843e94ac5cfc46337cbc3ccf8e",
"assets/assets/images/03_francia/01_francia.jpeg": "30ee0015b0b3ab8879ac565d241ee442",
"assets/assets/images/03_francia/02_francia.jpeg": "6fc564e4e97ebaa24ff9af4cede7668e",
"assets/assets/images/03_francia/03_francia.jpeg": "47cf05506bb1010e928b9e05dbf44f80",
"assets/assets/images/04_cope/00_cope.jpeg": "fdce332cde5c27851a78058fec11b383",
"assets/assets/images/04_cope/01_cope.jpeg": "d3b7fc39cbb4ac7d823970b30eb70cca",
"assets/assets/images/05_cope_duss/00_cope_duss.jpeg": "b7e5305c1d8969c35b2cb597b9d68786",
"assets/assets/images/05_cope_duss/01_cope_duss.jpeg": "2ffa24921a90cc585c42c584437ecf4f",
"assets/assets/images/06_duss/00_duss.jpeg": "eccf95a0e0eca08f91aca17ff245c62f",
"assets/assets/images/06_duss/01_duss.jpeg": "1ae2c6616dc5c1542c6c4ea0b744bb79",
"assets/assets/images/06_duss/02_duss.jpeg": "7a8d1f73f79cdbad28e63a77607c361e",
"assets/assets/images/06_duss/03_duss.jpeg": "82550e29081c5563d97bdb06f31988a3",
"assets/assets/images/06_duss/04_duss.jpeg": "011c35ac44eb4dd7003c83a830ce5454",
"assets/assets/images/06_duss/05_duss.jpeg": "47382528daa70c7632027c0354c2b00b",
"assets/assets/images/07_ams/00_ams.jpeg": "7a4486ae5c06c35a5b4219ff21af5520",
"assets/assets/images/07_ams/01_ams.jpeg": "56b82caebd89b138a2f24c6e4524880e",
"assets/assets/images/08_colonia/00_colonia.jpeg": "61c192cb727f7131f9462eeeee8fd4cc",
"assets/assets/images/08_colonia/01_colonia.jpeg": "a25e57a1c821c2ed9756bf7224555295",
"assets/assets/images/08_colonia/02_colonia.jpeg": "bc1732fdf4b2d675df4171abf9708c12",
"assets/assets/images/09_londres/00_londres.jpeg": "ed58e96d06e50dbd44a7d1df89ebaaa3",
"assets/assets/images/09_londres/01_londres.jpeg": "693b1f06f34b107199ba8561fe79e30b",
"assets/assets/images/09_londres/02_londres.jpeg": "52177ac541a65e041c25c7447534ad51",
"assets/assets/video/intro_video.mp4": "a1a0d4ccadaebc3b5b7ba595216a6a2a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "ad2a146dc64aaff6d962542af91259f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "ae8949ab2f18e57f5f40510456b79102",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ae8949ab2f18e57f5f40510456b79102",
"icons/Icon-512.png": "ae8949ab2f18e57f5f40510456b79102",
"icons/Icon-maskable-192.png": "ae8949ab2f18e57f5f40510456b79102",
"icons/Icon-maskable-512.png": "ae8949ab2f18e57f5f40510456b79102",
"index.html": "8124d3cb2e08b03795e949069dc0fbe4",
"/": "8124d3cb2e08b03795e949069dc0fbe4",
"main.dart.js": "5a37c67b63c2e4101d5758dbceb6c413",
"manifest.json": "3d74ea15581bf69e0dd53baf7a7724c0",
"version.json": "ebd08a3609254fb9ec044dd01b420dcc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
