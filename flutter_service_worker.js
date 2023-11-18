'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "88ed21f24f83390b119e9546d549cbb8",
"index.html": "1f98df0ab51252fb8c3fe8f412c52235",
"/": "1f98df0ab51252fb8c3fe8f412c52235",
"main.dart.js": "9d3c96942c09af015e2050ea1cf1406f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6c089f634f9ab2f26d40acccb7bf7846",
"assets/AssetManifest.json": "682d82a5864a58ff0555a402d1a91ad1",
"assets/NOTICES": "557844f43c0059d6761900c8a87b4233",
"assets/FontManifest.json": "3074f9cbd00215953cf4627186abfff6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "def35f63bf878bb9f7be0a81a8e15716",
"assets/fonts/MaterialIcons-Regular.otf": "1d8872b2c4eef5f3d131047675da5f85",
"assets/assets/share%2520to%2520glass%2520alt.png": "ffbf33a639d6586325d41f6c7a371e24",
"assets/assets/bgTopAlt.png": "dd4530262e72ee5f2b6f00c1d308d243",
"assets/assets/~$thesis.docx": "d34496ce7cbd262122eba7ba2c123006",
"assets/assets/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/thesis.pdf": "2ed454f2fed04ada25be3504b849093c",
"assets/assets/untitled_alt.png": "3d8582134fb79d74f92e63acd6afd5b7",
"assets/assets/flutter_webinar_logo.png": "484bb1e2fdb5f44763dbee931c6eb443",
"assets/assets/nature.jpeg": "4bd321ee18ea949e03d9417f197a7096",
"assets/assets/folder_alt.png": "98bc37235d988763d0f6572d84640f5b",
"assets/assets/Linkedin-logo.png": "0af7abc6bfa537fdd08ed300a8915063",
"assets/assets/FloppyDisk.png": "a1bf44714c7a1e63daf4a504ed614c61",
"assets/assets/background.jpg": "bf6fc1fbeb41343eff6aed93e8e64413",
"assets/assets/backgroun2.png": "eb769215bbade2c5913b57fe41bc22bc",
"assets/assets/folder.png": "acc1c18290f550978e1ca7b2ac875346",
"assets/assets/Logo.json": "ebba057db1ac3b8ed3b2999f47bcbee6",
"assets/assets/share%2520to%2520front.png": "cca89b8050c6e7e15b9e1984fc777c2c",
"assets/assets/untitled-min.png": "72492dd32f6bba5c1ac10c869c35d077",
"assets/assets/portfolio.png": "3af008065e78627d456a21f551327c7f",
"assets/assets/crown_alt.svg": "49459e8630e45b614b9524ce9bbe6f97",
"assets/assets/share%2520to%2520glass.png": "41321a31e8350bd1caa01aa26a162c34",
"assets/assets/bgTop.png": "0bd63a9ce7265085a7f45c0831176d39",
"assets/assets/mp3/Mice%2520On%2520Venus.m4a": "98fbe758dd7a090f630a11430c536294",
"assets/assets/mp3/FirstFlightSoundtrack.mp3": "267d30e7d28279c72b0829d7c9735f39",
"assets/assets/mp3/FirstFlightSoundtrack.m4a": "cf188306d9e788c8d3e99b56977737ef",
"assets/assets/icons/web_design.png": "2c8627066d0f98752c6e8c4be6ca3301",
"assets/assets/icons/letter.png": "980dbac3b02a560875c833b902dfc7de",
"assets/assets/icons/3d_design.png": "bbe00706ee22f3f122938de7befacf8b",
"assets/assets/icons/Group%252030%25201.png": "b408a3824d43352974d27dce1c67fccf",
"assets/assets/icons/ui_design.png": "f49ea66002ee5fb462918a6a4a476254",
"assets/assets/icons/graphic_design.png": "fd9b94f0100051d5187d2035ef49a6bb",
"assets/assets/handshake.png": "91a71ee4a9aa3456138474b208440fe1",
"assets/assets/share%2520to%2520glass%2520alt-min.png": "07b39fe22a5ec57b18fb1301094b5cf9",
"assets/assets/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/folder_alt-min.png": "3f3e712c0e8cfc4d21c7c74b5248e0d1",
"assets/assets/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/untitled.png": "582728b7579c092079fa95d3a21c110c",
"assets/assets/placholder.png": "7dcc8f09a3352261126710c2953c5af0",
"assets/assets/bgTopAlt2.png": "0057ea8c87fca6e450ed20c4dcba7de2",
"assets/assets/fonts/Spotify-Font/GothamMedium.ttf": "77171d8f5b5283f9d47a3434704bf944",
"assets/assets/crown.png": "c9f5e4518039043d511f43fe7a606fa8",
"assets/assets/Discord-Emblem.png": "fbb013bbc6ea7df03110e802c4a8f89f",
"assets/assets/bg.png": "471ab04a517a061e6c7c545d23fe9faf",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
