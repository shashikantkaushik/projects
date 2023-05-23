'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4aa78f0c7b0a33a604db17d5f6893baa",
"index.html": "c1d9a26269d4c7b3e1f356999c21e7c5",
"/": "c1d9a26269d4c7b3e1f356999c21e7c5",
"main.dart.js": "76562b4b21af03ee6eea16289dcb248d",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "6d776197ea4b3855b19d8853f7da06b9",
"icons/Icon-192.png": "6d776197ea4b3855b19d8853f7da06b9",
"icons/Icon-512.png": "6d776197ea4b3855b19d8853f7da06b9",
"manifest.json": "b8d1f180185c438d473dc57b6b861dc1",
"assets/AssetManifest.json": "5ab6905ab804938a56e7d151265de8b5",
"assets/NOTICES": "fba105f107efb57bd37f4dd7d630f683",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/pic114.png": "5856e7ff3ce5506ff089d993097fd2a4",
"assets/assets/images/pic101.png": "e2bed538041a197d6c44537b30d1a26d",
"assets/assets/images/pic115.png": "6676dc2d592bb3d263759d8e7604d724",
"assets/assets/images/pic103.png": "a0d5184f8ba106025f0e3a2a168db839",
"assets/assets/images/pic117.png": "42c66f8ae91bb136643ffb59eee6ddea",
"assets/assets/images/pic506.png": "51947d83378b193aa5e84855879b753d",
"assets/assets/images/pic1.jpeg": "f7e0c7d62056cc3137bc0cc17f6bc57c",
"assets/assets/images/pic106.png": "c2b2c7bd15ba676b42b146cf0257a8e9",
"assets/assets/images/pic105.png": "32cd0afb610a5cf99fb6052819f00cff",
"assets/assets/images/pic501.png": "e01db473ff9fe3f0192758f385c3ed6a",
"assets/assets/images/pic104.png": "fed0d69678a987180c5f88908bc0d978",
"assets/assets/images/pic109.jfif": "0631080de0efd9d3fc49852662e783cc",
"assets/assets/images/pic9.jpg": "3afc29061b7096887276615bde19a7b0",
"assets/assets/images/pic8.jpg": "29041bd87a06ac88a870978d0ff531ae",
"assets/assets/images/projects/tindog.png": "39e8ad79020fa8cf5f9e5547ab1ee9e6",
"assets/assets/images/projects/homzy22.png": "d4fe2333b3ee25b5b9fc1cfb30425c8e",
"assets/assets/images/projects/bmi.png": "4953b53576b51579e1772301b7f56124",
"assets/assets/images/projects/diceeee.png": "c23591746c8c9ad2e3c9add07cc14766",
"assets/assets/images/projects/destini.png": "f08f34274657cc5d1d25464287cf4167",
"assets/assets/images/projects/todoey_icon.png": "f4bad5b3a0d8811f9bcef118aba6b8f8",
"assets/assets/images/projects/cal.jpeg": "4826863021b69490bf4bc37580fd6018",
"assets/assets/images/projects/homzy33.jpg": "5b5915d5453375eb3035bc665088754e",
"assets/assets/images/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/images/projects/micard.jpg": "2a3b4c4616a055fd450a1a0edbc17c36",
"assets/assets/images/projects/piano.webp": "9e881cbf0abae99520c866e5097ff325",
"assets/assets/images/projects/homzy.jpg": "a5814efce195ead8d924aa594e16c4f0",
"assets/assets/images/projects/homzy.png": "fad6820cde5f071eda298dd77e8288b9",
"assets/assets/images/projects/bmi_new.png": "addc9779046fd6c50887dbe39756d640",
"assets/assets/images/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/images/projects/homzypro.jpg": "e5707f26f0b0d9e206d33e488f2942f5",
"assets/assets/images/projects/scrapping.jpeg": "51e5711a62a595632bd0e039bb5f765b",
"assets/assets/images/projects/bmi_icon.png": "fc762f7cd5633ca58e5a7c8df1b56802",
"assets/assets/images/projects/ss.png": "4ffd0c344658a9207d07a1a9863187c3",
"assets/assets/images/projects/bitcoin.jpeg": "910c5455a2d147af143f64608a6a4a58",
"assets/assets/images/projects/favicon.png": "6d776197ea4b3855b19d8853f7da06b9",
"assets/assets/images/projects/clima_weather_screens.jpg": "78300716cada07a3fea6097b1148c604",
"assets/assets/images/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/images/projects/drum.png": "0fe85cf3961bb9a831a7ab4b194c7e4b",
"assets/assets/images/projects/quizler.jpeg": "1a03d2f5d156eabef9c81e79b3562d11",
"assets/assets/images/projects/homzy_icon.png": "3922d929e3ceea5f50bf7edf87b98971",
"assets/assets/images/projects/flashchat_icon.png": "b0c75d404e18435e3c7c58c5ae0c6df8",
"assets/assets/images/projects/flashchat.jpeg": "65e97a9909cf4ccb627ddc4ea19ffa1c",
"assets/assets/images/projects/homzy_pro_edit.jpg": "d3f91b364e483fe676a2e5a6ee199688",
"assets/assets/images/projects/cv.png": "2e5143d6d7f79e804a1328bee0d7509d",
"assets/assets/images/projects/todoey.png": "dc3631f7d172d39a57a6e743e517e22c",
"assets/assets/images/pic10.jpg": "018ba627ba61a1f9f56bd8bb52a9a387",
"assets/assets/images/pic113.jfif": "2befdab3740fa4cbe2de3dc7a798a49f",
"assets/assets/images/pic11.jpg": "59ba0916147e71c5ad34eacb4e2d7df7",
"assets/assets/images/pic112.jfif": "fdf64ddd6b3459eca1afc9bc5902e270",
"assets/assets/images/pic108.jfif": "ccd28b4c096d1977d027f14708e0e7a7",
"assets/assets/images/pic118.jpeg": "8d44ad2ab33d538cba0efac7852b5f6b",
"assets/assets/images/pic3.png": "a87595fbdf6b4699309e81a76127309f",
"assets/assets/images/pic2.jpg": "93e932fcbb9c1db1e0a5829686bb746c",
"assets/assets/images/pic102.gif": "c0224f6324f10974e0482820b1fe8a9d",
"assets/assets/images/pic107.jfif": "a20876a9adbf141c66610b7852422e8a",
"assets/assets/images/pic6.jpg": "b4c58c2d54b612e2c83596b109a71793",
"assets/assets/images/pic110.jfif": "886435a9874555d371649e0bddf26eff",
"assets/assets/images/pic7.jpg": "67944bdffd3e281e1750a4b89f312fe1",
"assets/assets/images/pic119.jpeg": "6d49ab73d023784d5036c78c45ab3967",
"assets/assets/images/pic111.gif": "88612f94478814faac69b0c63a4780fb",
"assets/assets/images/pic5.jpg": "ecddcb730edf455705e72a6b66130033",
"assets/assets/images/pic4.jpg": "62faf8feb0638161021fb8f822453071",
"assets/assets/images/pic121.png": "a27f63edb0f3cb9544acce2d7108758c",
"assets/assets/images/BIODATA.pdf": "0098a2c4f561807c9f0064ccb22dd185",
"assets/assets/images/pic120.png": "3800847b0bf9c04ca789e9a0a1b7490b",
"assets/assets/images/deedy_resume.pdf": "7abb4d1961631143d23600178b3cb8f5",
"assets/assets/images/pic116.jfif": "fef16bfc930bbb9e3eb2553ed1da8b6c",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
