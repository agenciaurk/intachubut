const t = [
  "/_app/immutable/assets/_page-ae2c5af8.css",
  "/_app/immutable/assets/_layout-c5837894.css",
  "/_app/immutable/chunks/5-57ce362b.js",
  "/_app/immutable/chunks/2-d88d993f.js",
  "/_app/immutable/components/pages/calculadora/_page.svelte-09187be9.js",
  "/_app/immutable/chunks/_layout-da46b06b.js",
  "/_app/immutable/modules/pages/_layout.js-9cbb603b.js",
  "/_app/immutable/chunks/6-355abb6f.js",
  "/_app/immutable/chunks/index-2f0409c3.js",
  "/_app/immutable/components/error.svelte-1eb43f80.js",
  "/_app/immutable/chunks/1-d7cd17b0.js",
  "/_app/immutable/components/pages/acercade/_page.svelte-a1706b66.js",
  "/_app/immutable/chunks/Feedback-9d797e0c.js",
  "/_app/immutable/start-2214ae07.js",
  "/_app/immutable/chunks/singletons-9a27c69c.js",
  "/_app/immutable/components/pages/versiones/_page.svelte-4a69d952.js",
  "/_app/immutable/chunks/0-f87371b3.js",
  "/_app/immutable/chunks/index-027fd8b4.js",
  "/_app/immutable/chunks/4-64f190ca.js",
  "/_app/immutable/chunks/3-8980dcfe.js",
  "/_app/immutable/components/pages/_page.svelte-51eb5795.js",
  "/_app/immutable/components/pages/_layout.svelte-7e5744e2.js",
  "/_app/immutable/components/pages/calculadora/ovinos/_page.svelte-8e3853c8.js"
], i = [
  "/favicon.png",
  "/fonts/EncodeSans-VariableFont_wdth,wght.ttf",
  "/icons/apple-icon-180.png",
  "/icons/apple-splash-1125-2436.jpg",
  "/icons/apple-splash-1136-640.jpg",
  "/icons/apple-splash-1170-2532.jpg",
  "/icons/apple-splash-1179-2556.jpg",
  "/icons/apple-splash-1242-2208.jpg",
  "/icons/apple-splash-1242-2688.jpg",
  "/icons/apple-splash-1284-2778.jpg",
  "/icons/apple-splash-1290-2796.jpg",
  "/icons/apple-splash-1334-750.jpg",
  "/icons/apple-splash-1536-2048.jpg",
  "/icons/apple-splash-1620-2160.jpg",
  "/icons/apple-splash-1668-2224.jpg",
  "/icons/apple-splash-1668-2388.jpg",
  "/icons/apple-splash-1792-828.jpg",
  "/icons/apple-splash-2048-1536.jpg",
  "/icons/apple-splash-2048-2732.jpg",
  "/icons/apple-splash-2160-1620.jpg",
  "/icons/apple-splash-2208-1242.jpg",
  "/icons/apple-splash-2224-1668.jpg",
  "/icons/apple-splash-2388-1668.jpg",
  "/icons/apple-splash-2436-1125.jpg",
  "/icons/apple-splash-2532-1170.jpg",
  "/icons/apple-splash-2556-1179.jpg",
  "/icons/apple-splash-2688-1242.jpg",
  "/icons/apple-splash-2732-2048.jpg",
  "/icons/apple-splash-2778-1284.jpg",
  "/icons/apple-splash-2796-1290.jpg",
  "/icons/apple-splash-640-1136.jpg",
  "/icons/apple-splash-750-1334.jpg",
  "/icons/apple-splash-828-1792.jpg",
  "/icons/manifest-icon-192.maskable.png",
  "/icons/manifest-icon-512.maskable.png",
  "/img/landing_image.webp",
  "/img/logo_inta.svg",
  "/img/oveja.webp",
  "/img/vaca.webp",
  "/logo_512.png",
  "/manifest.json",
  "/modelos/modeloovino.pdf"
], o = "1673826251541", c = `cache-${o}`, n = [
  ...t,
  // the app itself
  ...i
  // everything in `static`
];
self.addEventListener("install", (s) => {
  async function p() {
    await (await caches.open(c)).addAll(n);
  }
  s.waitUntil(p());
});
self.addEventListener("activate", (s) => {
  async function p() {
    for (const a of await caches.keys())
      a !== c && await caches.delete(a);
  }
  s.waitUntil(p());
});
self.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET")
    return;
  async function p() {
    const a = new URL(s.request.url), e = await caches.open(c);
    if (n.includes(a.pathname))
      return e.match(s.request);
    try {
      const l = await fetch(s.request);
      return l.status === 200 && e.put(s.request, l.clone()), l;
    } catch {
      return e.match(s.request);
    }
  }
  s.respondWith(p());
});
