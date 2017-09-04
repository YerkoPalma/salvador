importScripts('workbox-sw.prod.v2.0.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/font/fontawesome-selected.eot",
    "revision": "bb26eb78512bb741adb8548a20fbd318"
  },
  {
    "url": "assets/font/fontawesome-selected.svg",
    "revision": "8bd26a312bb9f16df10847367f388493"
  },
  {
    "url": "assets/font/fontawesome-selected.ttf",
    "revision": "4f57e26706f2320023c4818918b6934d"
  },
  {
    "url": "assets/font/fontawesome-selected.woff",
    "revision": "9a273578cbdf41d3310788a0d6394281"
  },
  {
    "url": "assets/font/fontello.eot",
    "revision": "9d5e15dc1101d89214eec0c700872638"
  },
  {
    "url": "assets/font/fontello.svg",
    "revision": "6b6b3fe818590e5d57505f153b98b91b"
  },
  {
    "url": "assets/font/fontello.ttf",
    "revision": "f008675e6010733eb91552f3cd93d831"
  },
  {
    "url": "assets/font/fontello.woff",
    "revision": "a7e83f30e7ef73577d54f5e6344cf979"
  },
  {
    "url": "assets/font/fontello.woff2",
    "revision": "3bff351539b04617035a0698a15a5d55"
  },
  {
    "url": "assets/icons/icon-128x128.png",
    "revision": "64da7807bf4229a8c4bf99f3b4465165"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "09718e61eb7ddd88714c6774fdc5287d"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "a89577d5eef76d4dd2ec33e9c4e237d5"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "03688d6874464269aeaa5de61f4a4b81"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "785658fc187403d96231ee23851909c6"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "785658fc187403d96231ee23851909c6"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "6ba1be5a23f69211038cbb82503cd745"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "b5707bbfcb4872475b7461a2fb476c51"
  },
  {
    "url": "assets/images/11-jul.jpg",
    "revision": "be75966bc9987b3998e56fc8bcaa38f3"
  },
  {
    "url": "assets/images/11-jul160.jpg",
    "revision": "809c517b648bddf8e7543d75513d4ede"
  },
  {
    "url": "assets/images/12-sep.jpg",
    "revision": "886d9175c664a64138a45104085f3c45"
  },
  {
    "url": "assets/images/21-jun.jpg",
    "revision": "9650963353cf6a73d4482f60324f83fe"
  },
  {
    "url": "assets/images/24-ago.jpg",
    "revision": "a08882208bcc08c8839972cb9d816179"
  },
  {
    "url": "assets/images/24-jul.jpg",
    "revision": "063d82f5f913d55ae0e2a16255219d9f"
  },
  {
    "url": "assets/images/25-dic.jpg",
    "revision": "fa72db391996306afca88e70d4d6b80b"
  },
  {
    "url": "assets/images/27-jun.jpg",
    "revision": "4910422e56892fc610a48a102613b82f"
  },
  {
    "url": "assets/images/27-jun160.jpg",
    "revision": "f66b261cc2471ff509707d11d0580623"
  },
  {
    "url": "assets/images/29-ago.jpg",
    "revision": "79385a62967fdfe81b25a80eef60efc7"
  },
  {
    "url": "assets/images/29-ago160.jpg",
    "revision": "fbc54590b43b2a0c39af9e702dc1af60"
  },
  {
    "url": "assets/images/3-sep.jpg",
    "revision": "a62dbb4c04a124eb9f673e67dc917f8a"
  },
  {
    "url": "assets/images/4-nov.jpg",
    "revision": "19270e01709c7583bd1cb380d745ac88"
  },
  {
    "url": "assets/images/5-dic.jpg",
    "revision": "c043c4899d70ec3bbb836900cfda2d54"
  },
  {
    "url": "assets/images/6-oct.jpg",
    "revision": "3443ad612882c713a5246348c4d8bc60"
  },
  {
    "url": "assets/images/7-abr.jpg",
    "revision": "3b982c9c4019fa1a11ac524423ffcfe0"
  },
  {
    "url": "assets/images/7-abr160.jpg",
    "revision": "84ef362066358f71ccd495a595af5888"
  },
  {
    "url": "assets/images/abuelas.jpg",
    "revision": "adda47dc9c908933f2802b9078591292"
  },
  {
    "url": "assets/images/inicio.jpg",
    "revision": "5e6a526f81ed63462890b3c27413cdeb"
  },
  {
    "url": "assets/images/mama.jpg",
    "revision": "f00f5aaf3542ff89797f983fd6652c06"
  },
  {
    "url": "assets/images/mama160.jpg",
    "revision": "37e587b951c833001ce8b7fe3b72cf3f"
  },
  {
    "url": "assets/images/mati.jpg",
    "revision": "101c66639c8c7b515a5cb536908051f2"
  },
  {
    "url": "assets/images/mati160.jpg",
    "revision": "e049604d9f440a7bd91063186b8586d1"
  },
  {
    "url": "assets/images/papa.jpg",
    "revision": "44b0f0a23796f758e54ae56e5350e033"
  },
  {
    "url": "assets/images/papa160.jpg",
    "revision": "c301f7d1a618314be7cd134f12b985ea"
  },
  {
    "url": "assets/images/second/17-feb-100x100.png",
    "revision": "ada82f6bc5e013ab87ce0361191dca95"
  },
  {
    "url": "assets/images/second/17-feb-thumb.png",
    "revision": "d5cd16ba6d066afe1fe104e32988e196"
  },
  {
    "url": "assets/images/second/17-feb.mp4",
    "revision": "a9191872b56e2548c5273979f7f465c8"
  },
  {
    "url": "assets/images/second/17-nov-100x100.jpg",
    "revision": "4afb05d0dd248fbca31d8f782d98b949"
  },
  {
    "url": "assets/images/second/17-nov.jpg",
    "revision": "9483215c6556d035e5380b4c59e788c8"
  },
  {
    "url": "assets/images/second/17-oct-100x100.jpg",
    "revision": "ae47b38f5fa0942c994782a01d5fd923"
  },
  {
    "url": "assets/images/second/17-oct.jpg",
    "revision": "d9f15b1a5a029726b69d6f6eda816a84"
  },
  {
    "url": "assets/images/second/18-oct-100x100.jpg",
    "revision": "533d029bef52249b1d3a88b2bc5d2723"
  },
  {
    "url": "assets/images/second/18-oct.jpg",
    "revision": "9c3138ce1212ccf2b54ac16609a21dfd"
  },
  {
    "url": "assets/images/second/22-dic-100x100.jpg",
    "revision": "de3a57a5e1657a80b7a980aac405b4c8"
  },
  {
    "url": "assets/images/second/22-dic.jpg",
    "revision": "a6ceb5fd9b483ac1a02caa3fab2c3b8e"
  },
  {
    "url": "assets/images/second/25-jul-100x100.jpg",
    "revision": "a0b9cbe5e18b07ba7c3ce7d1732333c7"
  },
  {
    "url": "assets/images/second/25-jul.jpg",
    "revision": "ee70f39f30cc7c23fcbbb6d3f43f2fbc"
  },
  {
    "url": "assets/images/second/25-sep-100x100.png",
    "revision": "447b0546889f537a9a713116c3e04817"
  },
  {
    "url": "assets/images/second/25-sep-thumb.png",
    "revision": "f64cf168228ca516c15c10c11f3560b2"
  },
  {
    "url": "assets/images/second/25-sep.mp4",
    "revision": "0f341a63b3191cefc0b0d246bfadf274"
  },
  {
    "url": "assets/images/second/5-mar-100x100.jpg",
    "revision": "c4184a20f14106215725fb1b539db123"
  },
  {
    "url": "assets/images/second/5-mar.jpg",
    "revision": "7f06634137c087dd4fd56def7c5d23e9"
  },
  {
    "url": "assets/images/second/7-ago-100x100.jpg",
    "revision": "d1d6c7622c6541e67b4b967f286db5d0"
  },
  {
    "url": "assets/images/second/7-ago.jpg",
    "revision": "689678d43b69f86f708d49e7b4ffb152"
  },
  {
    "url": "assets/images/second/9-jun-100x100.png",
    "revision": "493940ad96a86930677763c00378c46e"
  },
  {
    "url": "assets/images/second/9-jun-thumb.png",
    "revision": "29232a692f80f3c7e2c3cf00f035b912"
  },
  {
    "url": "assets/images/second/9-jun.mp4",
    "revision": "97dfac613119f05f25886bdda75b3bed"
  },
  {
    "url": "assets/images/third/1-ene-100x100.jpg",
    "revision": "5cfce2319c74a6da9cdbfb0d634badeb"
  },
  {
    "url": "assets/images/third/1-ene-2.jpg",
    "revision": "690d2a23b1d9ca71e5224e01a6c306bd"
  },
  {
    "url": "assets/images/third/12-feb.jpg",
    "revision": "89382442211891c4c27489bc2dd853e0"
  },
  {
    "url": "assets/images/third/12-jul.jpg",
    "revision": "d95c8de996250cb5acc665b94dc2284a"
  },
  {
    "url": "assets/images/third/13-jul-100x100.jpg",
    "revision": "5233d96451b9c617902adc1fe8fad879"
  },
  {
    "url": "assets/images/third/13-jul.jpg",
    "revision": "cf64988ccfcd1f62ba21d56760ed8b39"
  },
  {
    "url": "assets/images/third/17-jul-100x100.jpg",
    "revision": "4ae4fa34efa3a6508c4acdc2483e8217"
  },
  {
    "url": "assets/images/third/17-jul-thumb.png",
    "revision": "cbf13500987e7bd58f3dec79ac101ed6"
  },
  {
    "url": "assets/images/third/17-jul.mp4",
    "revision": "3535510d331367450cbcf54a44a4d67e"
  },
  {
    "url": "assets/images/third/2-sep-100x100.jpg",
    "revision": "9ae2a7589170a23d98464e37ef82d625"
  },
  {
    "url": "assets/images/third/2-sep.jpg",
    "revision": "8c204371cbf0345f32a12c5a9d1e85a3"
  },
  {
    "url": "assets/images/third/23-feb-100x100.jpg",
    "revision": "d807e8ac0c7a6c5651089d53e8b2b638"
  },
  {
    "url": "assets/images/third/23-feb.jpg",
    "revision": "ac0e7ab3fbabc1e832e9df182235cd7e"
  },
  {
    "url": "assets/images/third/27-mar-100x100.jpg",
    "revision": "96e37c3716971ec9c583c4e0b9c4ecfd"
  },
  {
    "url": "assets/images/third/27-mar-thumb.png",
    "revision": "44c337609c71fe18b42357118690ca9b"
  },
  {
    "url": "assets/images/third/28-ene-100x100.jpg",
    "revision": "1a1250a5499be3ad7176d51bc2674aba"
  },
  {
    "url": "assets/images/third/28-ene-2.jpg",
    "revision": "cd8caeda6d40419b00408328ef6ba648"
  },
  {
    "url": "assets/images/third/3-jun-100x100.jpg",
    "revision": "5fef5fb49ce37877d4f81030383dc509"
  },
  {
    "url": "assets/images/third/3-jun-2.jpg",
    "revision": "e24ec80494d05484f4edd0e0dc47536a"
  },
  {
    "url": "assets/images/third/9-abr-100x100.jpg",
    "revision": "22b9624699e0ba1b496e40079e21f68d"
  },
  {
    "url": "assets/images/third/9-abr.jpg",
    "revision": "e301f1c4f26cc2ff9871a23eee8884c0"
  },
  {
    "url": "bundle.css",
    "revision": "8cde38f884964170ab97232beeb5d667"
  },
  {
    "url": "bundle.js",
    "revision": "3439d2bceb77030c46afc3432c5a8822"
  },
  {
    "url": "index.html",
    "revision": "b4e55f4979d8ec344a935325129e07e3"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/.eot|svg|ttf|woff|woff2|png|jpg|mp4$/, workboxSW.strategies.cacheFirst({
  "cacheName": "media-cache"
}), 'GET');
workboxSW.router.registerRoute(/.js|html|css$/, workboxSW.strategies.staleWhileRevalidate({
  "cacheName": "data-cache"
}), 'GET');
workboxSW.router.registerRoute(/\.(?!(eot|svg|ttf|woff|woff2|png|jpg|mp4|js|html|css)).*$/, workboxSW.strategies.networkFirst({
  "cacheName": "other-cache",
  "networkTimeoutSeconds": 3
}), 'GET');
