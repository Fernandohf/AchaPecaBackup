'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bda5249f147f7d52d9f26c12fe0fee81",
"assets/AssetManifest.bin.json": "c5dbb87980f1902ec46243e2161e1a30",
"assets/AssetManifest.json": "09dce69ba73f6c3b2ae00448ec6952ca",
"assets/assets/arrow_outward.png": "726882bbfd0e6a17c806e2906ae8b86f",
"assets/assets/boxes.png": "a79829aa35e1186062de22c99dd3e635",
"assets/assets/boxes.svg": "2f268d9cb9718ddd70f1e15c38d8c7f8",
"assets/assets/box_empty.png": "d865225504ce7b70da198e5c41d22443",
"assets/assets/box_empty.svg": "77c51977bb58d020da24950e9ff44e5e",
"assets/assets/default.png": "b71b6d89580c78c7fb08ad3ee6a6aae2",
"assets/assets/invoice/header.bmp": "b070fc465c6fbfb75e063018ac6a726a",
"assets/FontManifest.json": "717f20f0911d1aea5f966a022619bf72",
"assets/fonts/AlfaSlabOne-Regular.ttf": "7676beb2b1f19eec709feed096327d21",
"assets/fonts/Anton-Regular.ttf": "7777f7f3f519eaedd41b8b9a8cd2666e",
"assets/fonts/MaterialIcons-Regular.otf": "b33e9dde37e131967ffcaedf7210354a",
"assets/fonts/NotoColorEmoji.ttf": "e0e141083ec8960372e6fa96940d0721",
"assets/fonts/NotoSans-Bold.ttf": "98f0cacc6bb63b64b98aac7cac082d27",
"assets/fonts/NotoSans-BoldItalic.ttf": "a1375023bb3f9d55dfc6d58685cd6e69",
"assets/fonts/NotoSans-Italic.ttf": "afe1714f485b424f221147e1be6cf8ad",
"assets/fonts/NotoSans-Regular.ttf": "5a87cce84010f7cea085ae218d44a64b",
"assets/fonts/NotoSansJP-Black.otf": "9cfe0f26d56e3dc78dae1b8d3c6ff130",
"assets/fonts/NotoSansJP-Bold.otf": "0ff89c4f64cd8f24f68a3034fbfefec1",
"assets/fonts/NotoSansJP-Light.otf": "78d6753b4b8aaef38ad581eb248606ef",
"assets/fonts/NotoSansJP-Medium.otf": "f7c9eac3d1ee38132ec7fafe34cb6378",
"assets/fonts/NotoSansJP-Regular.otf": "2bbd3068a53daa60b61f29c3ee9531e7",
"assets/fonts/NotoSansJP-Thin.otf": "c7ab53b034c756f7628423e23c62efca",
"assets/NOTICES": "240de98056c5dfb9e2e1a26bf9f6e079",
"assets/packages/geekyants_flutter_gauges/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e8b0ba05a6f95ca748de311f5fac9b63",
"icons/android-icon-144x144.png": "fb10f83ce92642461e7ba9befb3521fb",
"icons/android-icon-192x192.png": "429156f291246656d01e5832379f70a3",
"icons/android-icon-36x36.png": "b055b4f48888e50753f8da51309f059b",
"icons/android-icon-48x48.png": "db80a6d39659ff7a274c06758cca0e51",
"icons/android-icon-72x72.png": "7c0d2f4ffa5aba5180fb9b5bb4767bc7",
"icons/android-icon-96x96.png": "aa597e3cf15743f8da369fed19bffd1a",
"icons/apple-icon-114x114.png": "5e8f7b1185c3facff73fd828ea8ff8b6",
"icons/apple-icon-120x120.png": "3d82b962020b3b13401ef4358b71b61f",
"icons/apple-icon-144x144.png": "1382acb4c45e36ad7577d38e6650d782",
"icons/apple-icon-152x152.png": "cd1b4d174a18edc804b17c2a564ef379",
"icons/apple-icon-180x180.png": "868d550c0623cf5b43c3e093ce52727a",
"icons/apple-icon-57x57.png": "47d8b64a1e9e90ea5d08f05954d42d2e",
"icons/apple-icon-60x60.png": "cf4e06803b41eec91428cb6ca06fcf31",
"icons/apple-icon-72x72.png": "7c0d2f4ffa5aba5180fb9b5bb4767bc7",
"icons/apple-icon-76x76.png": "2197d7876790e20901c5d050deb2f0b0",
"icons/apple-icon-precomposed.png": "17cc8a2505ab51c1c362c9e2c8780c23",
"icons/apple-icon.png": "17cc8a2505ab51c1c362c9e2c8780c23",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "f97d3d90e10a58c08e394cec66093770",
"icons/favicon-32x32.png": "d1e8b21379712502c8130e38476288bf",
"icons/favicon-96x96.png": "696e87170959ccf2f79e112e86fa60c4",
"icons/favicon.ico": "d56c55bed3ea0062e4e9855326aeb721",
"icons/favicon.zip": "27cc1c9c438e3a55d4f73e9d5b939fe1",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "1382acb4c45e36ad7577d38e6650d782",
"icons/ms-icon-150x150.png": "26d4c9ee08bfca29876c1dba9e610e98",
"icons/ms-icon-310x310.png": "119df882c871aed0f74a1098c3d90c97",
"icons/ms-icon-70x70.png": "98584af87d19a1b9adb01252aa76df46",
"index.html": "e74c6c5b840c9cc6282c8abcda2b2d58",
"/": "e74c6c5b840c9cc6282c8abcda2b2d58",
"main.dart.js": "1d45c70c2d948f574930b4ecd72798d5",
"manifest.json": "52463598f818cd9fd203ad9a21a29d75",
"version.json": "889f7cee6167c13cffaa12a90e545b6e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
