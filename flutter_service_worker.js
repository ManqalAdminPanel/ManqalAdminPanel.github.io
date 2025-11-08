'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "73248c3db4862788125fab49843e9c0c",
".git/config": "e85fbcd1a7303bf8708563171a6ce0a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7a3ecd9929d7dd82af7ed1c906b0707f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3be5242d26cba16908f9b50171ef6556",
".git/logs/refs/heads/main": "c76b7b3715007f9e5abed1fe75e6a8aa",
".git/logs/refs/remotes/origin/main": "eb867c85f0e2e9e7a1008727f0a5fe56",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/08/39ac42c5b24269a4d4194fe202008446e6c89d": "2f43c2d7f967b44b81efa3dc71c1e078",
".git/objects/15/817fda9eaa9e7c9b3a4852e41db8eb201c0a70": "7cd7d6fee64508ee0c964e97e26a0b83",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/c13b32ebb39e0b3da830eac1ad09017cba5654": "3e4d9e11620d49da7995eaec6cf774ac",
".git/objects/28/1564b6e12677303057afc628550a03227e067e": "598acc79d8ed959c9fdca9190eca0098",
".git/objects/28/5f9231eaeef157c7552a147cc7c777267d5b06": "066d5c6d8628bd073fcea713d5001702",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/44/9019882330dacfbe04822e4aa74022ee624aa9": "fb22b495582872aa18d712cb1acbc5a6",
".git/objects/47/ef80fb3b9e7c7199acfea3f5acad35ea3fd6fa": "453c88bf381c40447ccc7d6a26d4d7b2",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/53/6e4a0f43efb5011ca0d01e94b93ed18a64b086": "d5dde8fb4618b2e823cb74a25d4cb40e",
".git/objects/60/d70d85f2dbda2ba8ffd99929c1028ecc59d805": "c96681410263b823956a9f73a44fa3a7",
".git/objects/6a/220e0cad7bddfff4e3e90ae5b4522451eea486": "8ef846dd432cdf270b8bbe9c21444170",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/cbe2f7b476fdc9079db9cf6eb98f5275438301": "c84ff2d04afd7d57e8130c1b4b1d239e",
".git/objects/73/86812ca4744d732e6049cad47ff3f40504bbf4": "6e95e57445647fef162645eabfe59e1f",
".git/objects/73/d109ca85004f9a3e58f1845c6081b6cb862fd7": "85c1e787bfeb477476a839e0e5a723f8",
".git/objects/76/fc4899c38c3603107050bd464e960c017e8307": "636ebc47747c641af19df2160b08aa1c",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7e/3bb2f8ce7ae5b69e9f32c1481a06f16ebcfe71": "4ac6c0fcf7071bf9fc9c013172f9996f",
".git/objects/87/6afed1ff06aa95301dbe92bd6d22474ba385ef": "de0a35c9ffe8d0fd00f64034716af02e",
".git/objects/88/0be680e6f4395d531bb8cb98ce1b3da9c72c9b": "cc2ebad4edc82568975b0f089084dd56",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/08c5d04c17ee02e6ed7e420f55595755b8d36b": "bfc5c665fd4d2414d04778c0b54bcd9e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/6d160314af6fd7c9f3f020b886189b38decab5": "039bf65bb01309dd30ac446bc8bcb1b4",
".git/objects/90/74a62a8625b15399b6d5d269fbd4a9c4a516be": "e1a9f7ed1523f8c7e22295c6c19420d6",
".git/objects/90/e3452fff7b4562225da053c65dd61fba64fb5c": "9db69068334c737681a56a9b911cc397",
".git/objects/94/10a7a3c6ef2a24fbe7407d2126aeb95dc6d9fd": "f339ba663f4c0e9386858a8467ad259d",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a3/c690437c7289ecf178854b8b1df5668662915a": "26e56cd1225ab4d5a5a00e651f0ba19f",
".git/objects/a5/59f7b98ac0cffe2eca93e8730909235ddc7591": "eaf6caaebeb7e42203460d4ebedd7b67",
".git/objects/a9/38304ac6b3dcaa984f53fcaff5b7c0f98c6709": "92409c46119afdae331927554f4f0697",
".git/objects/ab/ef4e95953238cd97ae7f7ead7d346d3ff0be52": "f7196dffa10d7250e876cddf69b1de49",
".git/objects/b1/ae66f0ab242db19a6d5d90979bab0be16d32fe": "99f57faa632ac61325483351e99aca09",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/07228166246842d8f346ba699b7001813a5743": "119da44c28c4299f364e5f6f564644d7",
".git/objects/c0/5c4458f8dd1b5a579510e03cf7a8cfc2b57d77": "15335e55ce7a36af94586f2fbc27ead4",
".git/objects/c0/a36164d51dd515ed0b811599a899f3d3dd63f9": "b2db5385291de71909f8d6c35f022b46",
".git/objects/c1/fa03c1d1b8b4e580432e75f74f040d9769e310": "0f205eacf26698b7ba766ea0725e52eb",
".git/objects/c3/40ef88c2b19d62924d309bc72e9c207d54e49b": "201207a7dc535bd894ab5781b37fd388",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/9a9d807bec79964ebb5c09598ee412a8110101": "625773d48f4c5647f99bb04a3c8fe024",
".git/objects/c7/497270eab97fd4c5d390afdc34587af8207437": "563985d959069b19ece464b5cc5c9027",
".git/objects/c7/dbf2f97c95253298964be24ffdb13edb91ff30": "b5f0c12179c66403470ed5149617ed3e",
".git/objects/c9/b1a467fc4c321c27d200edf9ba0177cd49347e": "61d59d49c5ce789589cab0a792f7da37",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/ea3b7bec0ecf49d899673666494a17e7b8ff26": "5631b992d7f1b8ebf14cdc20d62be1ef",
".git/objects/cd/79d2a9af4734793c157b2b16615a454920a7e3": "a0627c03b8346a239a51ccee605fb60b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/be4a4d10d48a335d0aa432be0ccd7d05b7d96a": "6ba57ca34fbcb5e75b396ab5cf4873b5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/915c939f7148d9743742817bbb96f11f7841f5": "53dc728b69f1b8b4c7b3091a62157193",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/5aaabdc7dfed8a790a73aafd80f1a4b043ce83": "76d32ad51a079aaa0cde7cf6c729f355",
".git/objects/e6/e2336014f5cecfb3dc9ae1112883cdf8ff46a1": "bbf3e0d4fe91a08b4578eca8b2cd0b40",
".git/objects/e7/77ad4ffca8b2ca05d6a37c213d1084fc799af2": "78e2eb93754d316178a73de251df7d6e",
".git/objects/e8/87da68e985b0b39eeb2d9570c7fe4edd91c9ee": "5e8ce7ec185d753fa6dc8079b2261c07",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/088605704311504f2f1c4baf1464559a57d829": "4cec71119cf5fc71ace1b25a39f3297b",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f1/bd6f735e061ce731e4f4d9d48ace069150c81c": "e877c4a7344a66332263a3d878a89106",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/100b06b263713097108d7896ec88d11470bb90": "71711b1ea5d7675e9cdfffa6c9bb2bca",
".git/objects/f5/5f22f4e777754fd34aa5166c756de0fba260bb": "b1c975e17cff4158fa5e394b5a963473",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/9bea293941b2cecc636677f0432942d1b4cfc9": "a66ae223b07868d3e9607127f1926344",
".git/objects/fd/d6dd6f589b72dc159ae367afcc54a3582e78c9": "da93ae869e9833752b6dd0ce550c1f2c",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "2890a162cc007c7cbd967250cbaec36a",
".git/refs/remotes/origin/main": "2890a162cc007c7cbd967250cbaec36a",
"assets/AssetManifest.bin": "7d85353d44e91af732f778ad51497a94",
"assets/AssetManifest.bin.json": "40be071a2dfee4cf9683f426f271c8be",
"assets/AssetManifest.json": "034d4ad6b15df0cac92df38bee7d97ef",
"assets/assets/food/menu1.jpg": "01b3979fe5cae219a9fe405e0fbd8f56",
"assets/assets/food/menu2.jpg": "bf3c74cd9bb05ccdbf9c6a5c7e9a062e",
"assets/assets/food/menu3.jpg": "4721d0ef77f794cfb8035cb50f79967c",
"assets/assets/food/menu4.jpg": "aadc68421671121ec9efb2b6449d797d",
"assets/assets/food/menu5.jpg": "f1dfd9c02dbe65e448f7443171080020",
"assets/assets/food/menu6.png": "f09cee2ee0729fe357bf89bd19de37f6",
"assets/assets/food/menu7.png": "3afb827ca90018ba358001f0f2b36b62",
"assets/assets/logo/logo.png": "1a0e222a8b39f7dc13804bc1b339a563",
"assets/assets/sounds/delete.mp3": "386725dd55412a7d59cb97d5a5cae711",
"assets/assets/sounds/notifiSound.mp3": "09b682ef31b2b7e66628e21923233176",
"assets/FontManifest.json": "f6f1ed5fdc00c5c3afa749c356464568",
"assets/fonts/MaterialIcons-Regular.otf": "6587062aac31603c393f8447dba2c907",
"assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/NOTICES": "b143fe5168026bedd0300389b0c3aa3a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "a47b21fa942ecb216ecef6af068475a3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6c23ab369a349c0be74f6eac2aebe334",
"/": "6c23ab369a349c0be74f6eac2aebe334",
"main.dart.js": "48cbd2f23b6e1ce0fc298e626f27b07e",
"manifest.json": "34f4bd367f5bf7a13207a7014b03c385",
"README.md": "9bb729810bb33f3e0ab6fab2da833b94",
"version.json": "12481ed665e76f12267e9aff8cb08c2c"};
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
