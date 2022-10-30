'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7464c8686f80e064138241d4ad993ecd",
"assets/assets/bankLive/1.png": "b614c41b51e9adec0b934907b5a80ba4",
"assets/assets/bankLive/2.png": "f2f99ed7508b47f205785ba62f4ef916",
"assets/assets/bankLive/3.png": "22ab79e7f355cb62f21cec2c6b7303f4",
"assets/assets/bankLive/4.png": "cc8d9eaa060c0134809ca945ac4ea6b1",
"assets/assets/bankLive/5.png": "ad1b4e0515b1c56b3c463d59e722fe21",
"assets/assets/bankLive/logo.png": "94abfeb0e848f01a818d855c1b87f2c8",
"assets/assets/calculator/1.png": "87bf89ba5aa5c0ac7fd5df3d20f1b779",
"assets/assets/calculator/2.png": "741ba08cc1cdad4bbe4d1e7ff7a21994",
"assets/assets/chat/1.png": "e321cd0ecfb95e1f88b13c118ccdb6d1",
"assets/assets/chat/2.png": "817f480090aa43271e5d58d0d9d7baa3",
"assets/assets/chat/3.png": "4acfec1de9e3694de07e66e2cbc38433",
"assets/assets/chat/4.png": "fedbf51605f9f9479e3611f6a0b02488",
"assets/assets/chat/5.png": "cfe0b51a0924f4e8807532f6deb5bbce",
"assets/assets/chat/6.png": "3b20083245ce804476c5753b85378ae7",
"assets/assets/chat/7.png": "872ca88a99678c586bcd8f06e78a247b",
"assets/assets/child/1.png": "f02ca0bd7a341c8859406e39df57ad2f",
"assets/assets/child/2.png": "a8a0e0baf51aa4e62fc6c0e606f227ec",
"assets/assets/child/3.png": "48f5dd08afd63fe3218f19994d35e1de",
"assets/assets/child/logo.jpg": "2ad97847ad1c0f2d914327db771638a5",
"assets/assets/consulttion/1.png": "78be51077fde0f72719390ef3a3b33fd",
"assets/assets/consulttion/2.png": "5a26f12500f4bc4340b194e046218fe1",
"assets/assets/consulttion/3.png": "946a1b7f5fffd11dd50c9c02a15b7b39",
"assets/assets/consulttion/4.png": "33185879761588452c36ea23e028d6c7",
"assets/assets/consulttion/5.png": "8a45e0f3d3d1c0381aca3e3610926033",
"assets/assets/consulttion/6.png": "0780bacee8a5c1b72a279e3caaa98d60",
"assets/assets/consulttion/logo.png": "b197a28163de1343cc21ce3ad8d5cb6d",
"assets/assets/contact/1.png": "ba966cdeea921bd4436f6ed7f87c7bcc",
"assets/assets/contact/2.png": "9249ef8345c630f569410e14a72013ef",
"assets/assets/currency/1.png": "129551a1ed5ad5b49e68879b66ed3777",
"assets/assets/currency/2.png": "07b63603364239ffc01a3ba5adaa3976",
"assets/assets/currency/3.png": "fdaf2e1b2754c6b5e2700e7867936ed2",
"assets/assets/currency/4.png": "ca6aeb6033cf63e278273a16335f8e14",
"assets/assets/currency/5.png": "f76d70faf887e2bab9aa68ccade2f67b",
"assets/assets/def_logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/assets/eslame/dark_mode/1.png": "f95cc85f6ac7f2a473286e55adb991e1",
"assets/assets/eslame/dark_mode/2.png": "876bab2100554275fb71731fbb25d46c",
"assets/assets/eslame/dark_mode/3.png": "537ef04469945b34226816fbd76d538e",
"assets/assets/eslame/dark_mode/4.png": "86a3cfc9fad06c20f77721475d4fb799",
"assets/assets/eslame/dark_mode/5.png": "f6d01468b866a03f571a8b378522d2ab",
"assets/assets/eslame/dark_mode/6.png": "cc31e40987a6a0d3454377b47ced0fcb",
"assets/assets/eslame/dark_mode/7.png": "957c43cb2a8287d8a94d9db4158af2c5",
"assets/assets/eslame/light_mode/1.png": "c606d53dd9eee402a6d1adfde06decf1",
"assets/assets/eslame/light_mode/2.png": "34204d918d601c88c3edeef811e04bcc",
"assets/assets/eslame/light_mode/3.png": "732c842a43ea002cd8bdb4a8aec2a96e",
"assets/assets/eslame/light_mode/4.png": "95645068be001bed5c4c81df7f15ee71",
"assets/assets/eslame/light_mode/5.png": "c2542a5efcdfb232964c3d673552fa02",
"assets/assets/eslame/light_mode/6.png": "ef8792b5ed2ff094b599441dea2acb34",
"assets/assets/eslame/light_mode/7.png": "50126866105b32d468ef76d9c3d6af09",
"assets/assets/eslame/lunch.png": "9cc684456fd1e307203680a302c53236",
"assets/assets/flappy_bird/1.png": "bf3680291c9255a873462ae3364e1311",
"assets/assets/flappy_bird/2.png": "d69492f76d4d45b3c13b9cbfff55071b",
"assets/assets/git.png": "a580c5caa5889937a5f7b6f21562e2c0",
"assets/assets/gold/1.png": "154596822f3676225cbcf6297759d78a",
"assets/assets/gold/2.png": "7e10499eda2fa59f19e51397aeef5588",
"assets/assets/gold/3.png": "4e834f93e4788a36d75c2b47d8ee20fc",
"assets/assets/gold/4.png": "94c10bcf3173963c604ab68f0314eb14",
"assets/assets/gold/logo.png": "49373268569c2ef096c1df3e9cdfa431",
"assets/assets/ilearn/1.png": "58b7664070763f04530e98fe1845f092",
"assets/assets/ilearn/10.png": "8c2739bdccd5299c16410777cc469ead",
"assets/assets/ilearn/11.png": "eb5c045421e326acd91a22d0a9da6e6e",
"assets/assets/ilearn/12.png": "3ecb754e443af6c2d97e9f9b9039d6be",
"assets/assets/ilearn/13.png": "a9ce1eb326ff192c8b2d623629951027",
"assets/assets/ilearn/14.png": "27d8953c0ca975d26a777a04c01bcd4a",
"assets/assets/ilearn/15.png": "626c2bf7dad1919f45493f14daa6643b",
"assets/assets/ilearn/16.png": "857ad303309ba18fc2e3623adbb627ae",
"assets/assets/ilearn/17.png": "c01ad10a15fb6063deb3ab391b459f84",
"assets/assets/ilearn/18.png": "71a56c366f1b32b1ef24911531809dc4",
"assets/assets/ilearn/19.png": "117961980001c420d5cbe7acdd65ffa1",
"assets/assets/ilearn/2.png": "08022c5f5f3ab1fb4727abf2fea2c1b2",
"assets/assets/ilearn/20.png": "a53af04e14efd1f1e863944ac85fa327",
"assets/assets/ilearn/21.png": "d648c499045dfac5c15ae8f4090a508a",
"assets/assets/ilearn/22.png": "2c1bdf57a761065bb8cc0311c3e80179",
"assets/assets/ilearn/23.png": "e433b84416be600e854c93882fad665e",
"assets/assets/ilearn/24.png": "0899a6e92dd3bd58b4e03650ff1f0a73",
"assets/assets/ilearn/25.png": "6dd5ed954801977b444b1f594bbb7ae4",
"assets/assets/ilearn/26.png": "9e6825c21a4d09472914f08ecb7462de",
"assets/assets/ilearn/27.png": "26b243816d9fda288c534e0632db24ee",
"assets/assets/ilearn/28.png": "d96bd8ded0958e70cf17f73322c8f936",
"assets/assets/ilearn/29.png": "2db91331b0d4fadd317230422acc9c93",
"assets/assets/ilearn/3.png": "e45a4ecdfd3d828daf8d043d7a25fcb6",
"assets/assets/ilearn/30.png": "76fccbe9ab80c91792ee0955e8350bc5",
"assets/assets/ilearn/31.png": "e27af518892ff24ce82d36c4f7918fad",
"assets/assets/ilearn/32.png": "e57801b627136d09116695842076f6a7",
"assets/assets/ilearn/33.png": "57b611faa9a7acf91a8e103b33ebab85",
"assets/assets/ilearn/34.png": "80060fc31a30947f66badbb22f35994f",
"assets/assets/ilearn/35.png": "c5492c093a0e9a9b942c876354f22739",
"assets/assets/ilearn/36.png": "4169f433e3b8a8310320dcc195660f54",
"assets/assets/ilearn/4.png": "7e67fa2a6ad927683e514e57e54d2a61",
"assets/assets/ilearn/5.png": "20cf6783d388fa9bd4581ca7744cbbaa",
"assets/assets/ilearn/6.png": "5c45f986950aad8783a128c49555cf02",
"assets/assets/ilearn/7.png": "dceccda75e0f8a70ab391fe328fc5c7c",
"assets/assets/ilearn/8.png": "740e3cf0edfb49f4ec10f49926f79380",
"assets/assets/ilearn/9.png": "dbc34f177d9dd89762a7b779de12739b",
"assets/assets/ilearn/logo.jpeg": "620d81e0721ecce56256703606eaacf2",
"assets/assets/kawader/1.png": "f3c3f90ae29dca895d20b261575bd71f",
"assets/assets/kawader/2.png": "a1a260ce42a72fffb900fc97dcadafa9",
"assets/assets/kawader/3.png": "f680f2baa23a8ead35e0bcebb1460bc3",
"assets/assets/kawader/4.png": "339d3a8d7c4d8b31feb309f0611aa945",
"assets/assets/kawader/logo.png": "b2362bae5f77aee042b5aaaa89fec311",
"assets/assets/map/1.png": "25f3d993fbcf5e2f466693d2abce926b",
"assets/assets/map/2.png": "d4f143c759dabbe05f05726368e38855",
"assets/assets/me.png": "204fd835de0dbfcc812f7e5afba6a425",
"assets/assets/movie/1.png": "14401e89735286193c67ccb59d40367b",
"assets/assets/movie/2.png": "9ccf25757e05b06952eccd7c13788001",
"assets/assets/movie/3.png": "e5352b4648421f6dec42b0038419a095",
"assets/assets/movie/4.png": "caf7626be40b6f3b0c64adb2e665858c",
"assets/assets/movie/5.png": "b020f1ea1ffa9879339f49f104b96064",
"assets/assets/movie/6.png": "f5780a57a4c0ade2436b54ff98ca0dab",
"assets/assets/movie/logo.png": "e3ebb64468059d52e69bae8f9ee91a4d",
"assets/assets/news/1/1.png": "9ae773ab7154d4d747bac579030a5d68",
"assets/assets/news/1/2.png": "4533a3d53f4e574b9ee567c296dc3e6d",
"assets/assets/news/1/3.png": "f2c2994bafecc1a8c2ade350208aff03",
"assets/assets/news/1/4.png": "1a37173f2b9c090428fb6c4613b61ec4",
"assets/assets/news/1/5.png": "09bfd2e3990aca4c19b6b1894c6d5be5",
"assets/assets/news/1.png": "16a6ca672da5d16498e7340c7703cd6f",
"assets/assets/news/2.png": "0b269417b60459f7ca9190f86bc2a896",
"assets/assets/news/3.png": "7f4a51420fe37d43b7616bdbe376dc10",
"assets/assets/news/4.png": "deb7d058dc8ff4afe0cbc61570b6d109",
"assets/assets/news/5.png": "357107be46e0728140a9f4ecca86b991",
"assets/assets/news/logo.png": "b8552fdf0ab3f0cf333dda6a7999816f",
"assets/assets/shop/1.jpg": "f1114e5457f9edd38f48a209ab32a842",
"assets/assets/shop/10.jpg": "5c93a01411ebae94593c871001c1d491",
"assets/assets/shop/2.jpg": "02dd98bcc873caa2d7d232eeaef2d53f",
"assets/assets/shop/3.jpg": "0896eaa502db1bd30061541763dcf60f",
"assets/assets/shop/4.jpg": "b21548e643c7eff64bc5c51b14bbc315",
"assets/assets/shop/5.jpg": "ef5debfa5f6316ae297d96aaef024ba7",
"assets/assets/shop/6.jpg": "7ae30ff60e6bb85679fb7aa9b7bf0df9",
"assets/assets/shop/7.jpg": "86908b8e7530fc4cd7199c3765d0b054",
"assets/assets/shop/8.jpg": "224194ee0b4d6de260d24c5e55ca2d2d",
"assets/assets/shop/9.jpg": "3e7e4fa4ea85220044383b7912e03663",
"assets/assets/social/1.jpg": "d1c5b896190072c2432890ee6ad23a17",
"assets/assets/social/2.jpg": "b68ec20ca325b4892c085b831fd46208",
"assets/assets/social/3.jpg": "b4f86daad914f0773da7dabd56556b06",
"assets/assets/social/4.jpg": "b7cfb12fac6cff7dd5d22346c470a135",
"assets/assets/social/5.jpg": "3f04db5be3615ed2392a1cf5b83d4886",
"assets/assets/social/6.jpg": "3668b0a6ed831a26c598cc7c28ef11ee",
"assets/assets/social/7.jpg": "b49586d64ddac2cd2e50f88bc3fc8e55",
"assets/assets/social/8.jpg": "0a5b57f3ebfcd2254592f56816e25773",
"assets/assets/social/9.jpg": "1efa59501adeb74a97c407b610d7770e",
"assets/assets/todo/1/1.png": "a7c7dc1e3d1663dd919de4dd7f5a1464",
"assets/assets/todo/1/2.png": "9c9e34480f27a5cfb0de82195a016c9c",
"assets/assets/todo/1/3.png": "aedc320787382f6f3f5364575c68fd6b",
"assets/assets/todo/1/4.png": "48da65b1fb0b70249656c8aa0f887e09",
"assets/assets/todo/1/5.png": "ebb70120a7b13ced889e4a43c3ca6814",
"assets/assets/todo/1.jpg": "c3b1b762f95e41498c5c2f3b7e2a9def",
"assets/assets/todo/2.jpg": "bfd8745b8262a28316182d4aaf4a5309",
"assets/assets/todo/3.jpg": "44cbd6d46914038e7c417c9a255ba86c",
"assets/assets/todo/4.jpg": "30d6cb5d3a6d396b5f99f28be1aa6b64",
"assets/assets/todo/5.jpg": "5188b132bfee99f4345e377166c99af8",
"assets/assets/todo/6.jpg": "35e86582c436682878fd231d9bdda87d",
"assets/assets/todo/7.jpg": "dcd543c2fa280e8765000571ffc67073",
"assets/assets/todo/8.jpg": "2c73bf223e8908080f9296aa1a529802",
"assets/assets/todo/9.jpg": "06070c9775e1526711c78053098949f7",
"assets/assets/todo/todo.png": "2e747496c426cdc0f51506e35a7f01f1",
"assets/assets/tokuo/1.jpg": "7376bf09d3cd6428f58f96ef63e295d1",
"assets/assets/tokuo/2.jpg": "5011e9f2db32c8c1ba3cc4cd1c4eaa61",
"assets/assets/tokuo/3.jpg": "8fb8ef9012b95803cd7d76f544bbdf76",
"assets/assets/tokuo/4.jpg": "bddb850bfce9caa3dcecfe1c2bb1dc4a",
"assets/assets/wheather/1.jpg": "85d49f65aff4796c6d1fab560a3cbd05",
"assets/assets/wheather/2.jpg": "13d2d4d1ded7d962b0771bd631ea20f4",
"assets/assets/xo_game/1.jpg": "b7e8609c32f8a77570ecfd906f2bd5be",
"assets/assets/xo_game/2.jpg": "58cc43c3615b1e6238261bdcc9174cdb",
"assets/bankLive/1.png": "b614c41b51e9adec0b934907b5a80ba4",
"assets/bankLive/2.png": "f2f99ed7508b47f205785ba62f4ef916",
"assets/bankLive/3.png": "22ab79e7f355cb62f21cec2c6b7303f4",
"assets/bankLive/4.png": "cc8d9eaa060c0134809ca945ac4ea6b1",
"assets/bankLive/5.png": "ad1b4e0515b1c56b3c463d59e722fe21",
"assets/bankLive/logo.png": "94abfeb0e848f01a818d855c1b87f2c8",
"assets/child/1.png": "f02ca0bd7a341c8859406e39df57ad2f",
"assets/child/2.png": "a8a0e0baf51aa4e62fc6c0e606f227ec",
"assets/child/3.png": "48f5dd08afd63fe3218f19994d35e1de",
"assets/child/logo.jpg": "2ad97847ad1c0f2d914327db771638a5",
"assets/consulttion/1.png": "78be51077fde0f72719390ef3a3b33fd",
"assets/consulttion/2.png": "5a26f12500f4bc4340b194e046218fe1",
"assets/consulttion/3.png": "946a1b7f5fffd11dd50c9c02a15b7b39",
"assets/consulttion/4.png": "33185879761588452c36ea23e028d6c7",
"assets/consulttion/5.png": "8a45e0f3d3d1c0381aca3e3610926033",
"assets/consulttion/6.png": "0780bacee8a5c1b72a279e3caaa98d60",
"assets/consulttion/logo.png": "b197a28163de1343cc21ce3ad8d5cb6d",
"assets/def_logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/eslame/dark_mode/1.png": "f95cc85f6ac7f2a473286e55adb991e1",
"assets/eslame/dark_mode/2.png": "876bab2100554275fb71731fbb25d46c",
"assets/eslame/dark_mode/3.png": "537ef04469945b34226816fbd76d538e",
"assets/eslame/dark_mode/4.png": "86a3cfc9fad06c20f77721475d4fb799",
"assets/eslame/dark_mode/5.png": "f6d01468b866a03f571a8b378522d2ab",
"assets/eslame/dark_mode/6.png": "cc31e40987a6a0d3454377b47ced0fcb",
"assets/eslame/dark_mode/7.png": "957c43cb2a8287d8a94d9db4158af2c5",
"assets/eslame/light_mode/1.png": "c606d53dd9eee402a6d1adfde06decf1",
"assets/eslame/light_mode/2.png": "34204d918d601c88c3edeef811e04bcc",
"assets/eslame/light_mode/3.png": "732c842a43ea002cd8bdb4a8aec2a96e",
"assets/eslame/light_mode/4.png": "95645068be001bed5c4c81df7f15ee71",
"assets/eslame/light_mode/5.png": "c2542a5efcdfb232964c3d673552fa02",
"assets/eslame/light_mode/6.png": "ef8792b5ed2ff094b599441dea2acb34",
"assets/eslame/light_mode/7.png": "50126866105b32d468ef76d9c3d6af09",
"assets/eslame/lunch.png": "9cc684456fd1e307203680a302c53236",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/ilearn/logo.jpeg": "620d81e0721ecce56256703606eaacf2",
"assets/kawader/1.png": "f3c3f90ae29dca895d20b261575bd71f",
"assets/kawader/2.png": "a1a260ce42a72fffb900fc97dcadafa9",
"assets/kawader/3.png": "f680f2baa23a8ead35e0bcebb1460bc3",
"assets/kawader/4.png": "339d3a8d7c4d8b31feb309f0611aa945",
"assets/kawader/logo.png": "b2362bae5f77aee042b5aaaa89fec311",
"assets/news/logo.png": "b8552fdf0ab3f0cf333dda6a7999816f",
"assets/NOTICES": "fbdeab1e05374a1b52475234a1327cd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"assets/todo/todo.png": "2e747496c426cdc0f51506e35a7f01f1",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f25f0807889bbf1c93af21642db7138e",
"/": "f25f0807889bbf1c93af21642db7138e",
"main.dart.js": "f0082ed2e9ec7a4c2996c39b65e63e8e",
"manifest.json": "d6ca57350173b3ccd7074f958253fbee",
"version.json": "c8f979d408e51acd1ee06f6af9b9722c"
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
