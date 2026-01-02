'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "875a90babc31b8441cdd964a91b68b12",
"assets/AssetManifest.bin.json": "d656f72ae93c2097e6d223bb53054e62",
"assets/AssetManifest.json": "df1ed414d9c41c217822fe5353b28fe4",
"assets/assets/Backgrounds/automated_savings.png": "461f12b5c2d88a84ac62a7ead554121e",
"assets/assets/Backgrounds/background5.webp": "2b84f4c613e7b82e832fd1149b59483a",
"assets/assets/Backgrounds/bills.png": "67cfcc8b310f1c1008c6aa0fd756ce2b",
"assets/assets/Backgrounds/cashaccount.webp": "d8a7de246fccd89fee66e47fa3f2a2c5",
"assets/assets/Backgrounds/chart.jpg": "2ea2fcd6b2159fecbf569bac5f8adfcc",
"assets/assets/Backgrounds/debit_cards.png": "5e4c25c756d05c5efe21e7e3047842ab",
"assets/assets/Backgrounds/image1.png": "0ae5354d970a2efa2a7a104a45229514",
"assets/assets/Backgrounds/imager.jpeg": "faf7abb9f23f323e499af80963123cde",
"assets/assets/Backgrounds/imager1.jpeg": "d83b6c5bc677c722b1488f95575754c9",
"assets/assets/Backgrounds/imager2.jpeg": "75bcbff2b0a983f18cd71f393ce6178e",
"assets/assets/Backgrounds/imagerr3.jpeg": "1a9d7250ebca58850148d47904e190db",
"assets/assets/Backgrounds/investment_transfers.png": "1a68701764ae96abd22491f2eea00a56",
"assets/assets/Backgrounds/rainy_day_fund.webp": "3e153e40e63d13f08dd67bfc51cbb5a2",
"assets/assets/Backgrounds/rr.jpeg": "7ca17d4edcd7b9c4e7b2dc8b54141435",
"assets/assets/Backgrounds/wire_transfers.png": "c511e455440eb4869c80bdcf954db16b",
"assets/assets/icons/Bitcoin.png": "b7d58a9f48a5460a277544ea3361bc1d",
"assets/assets/icons/BitcoinCash.png": "053a28e72f3223ed086ca73ce9caecd2",
"assets/assets/icons/box.webp": "3266f09fef58478ac7ac1ff62164082a",
"assets/assets/icons/cash.webp": "6702754f1df871c5fcd21d797d01e97d",
"assets/assets/icons/chart.jpg": "2ea2fcd6b2159fecbf569bac5f8adfcc",
"assets/assets/icons/coins.png": "62e1e163db019f81f05244db1d07c89f",
"assets/assets/icons/cvclogo.jpg": "19087b7e4133017633debfe64bc246c5",
"assets/assets/icons/DOGE.png": "e596c8c071005a2579b3b602e6af5d5c",
"assets/assets/icons/dots_background.png": "64f32337844aaa2d4491f4e6ca0937dc",
"assets/assets/icons/Ethereum.png": "0879552e044ddd1866a4e974efa5ff54",
"assets/assets/icons/OBO.png": "498cb3b3b81bba33da12d9bef0861851",
"assets/assets/icons/rr.jpeg": "7ca17d4edcd7b9c4e7b2dc8b54141435",
"assets/assets/icons/SOL.png": "0d8e9a185773da474955639b5fc82808",
"assets/assets/icons/STELLAR.png": "aaf5f5ac89abd4dbc6c0d8d657071ac8",
"assets/assets/icons/USDT.png": "a440d4b512f4d2b9b63d3ab8818fc9e3",
"assets/assets/icons/verified.png": "e04f337891c8d48162867023a27dc10d",
"assets/assets/icons/XRP.png": "b848ca58f9c34bf2044c327122ec7477",
"assets/assets/icons/ZELLE.png": "f3f58670cc4890350c786e7c0838b216",
"assets/assets/svg/apy.jpeg": "f074caac75ba0c574d0f49228f635d19",
"assets/assets/svg/bankrate.svg": "23223d5fe7ac291b56850fc6f8a1fa61",
"assets/assets/svg/Finance-amico.svg": "1fc4ab32c41b28e12734a3f7abcd60d8",
"assets/assets/svg/financial-trajectory.svg": "18e732a8cb63814b11b0819572d12259",
"assets/assets/svg/gifsplash.gif": "80f7590624d16934ff2c1e65f04437aa",
"assets/assets/svg/investopedia.svg": "fd106403255ee775a857dda164b06b83",
"assets/assets/svg/j-curve.svg": "bf3b4a27504d0ae548fb94552be3df26",
"assets/assets/svg/reviews.svg": "edad74842a41b9f43b490966821e9fa3",
"assets/assets/svg/risk-linechart.svg": "dfb41d4bb399ed17c5a334d1b760afe4",
"assets/assets/svg/world.svg": "604d3391d8d237c606299e9359a9e000",
"assets/assets/svg/world_map.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "14ba182c3966c152d7c434685710185e",
"assets/NOTICES": "4319245b60e42276f767cac83c7e9cee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "70137128dc4eecc1d882987155e1c38a",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "949b5845e2f93e868f427b59974085cd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "65809fabde9f43b75f6249b766600a02",
"/": "65809fabde9f43b75f6249b766600a02",
"main.dart.js": "71471016024928565bd36ce1a4120513",
"manifest.json": "602332ec0dae0d87f30fa5c50b1d45e7",
"version.json": "8b90ddb3deff5c3652e23549a6788231"};
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
