module.exports = {
  head: {
    title: "chantry",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "chantry" },
      { hid: "identifier-url", name: "identifier-url", content: "https://chantry.io" },
      { hid: "title", name: "title", content: "chantry" },
      { hid: "abstract", name: "abstract", content: "chantry" },
      { hid: "description", name: "description", content: "chantry" },
      { hid: "keywords", name: "keywords", content: "chantry, vohzd, " },
      { hid: "author", name: "author", content: "vohzd" },
      { hid: "language", name: "language", content: "EN" },
      { hid: "robots", name: "robots", content: "All" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  loading: { color: '#b56d82' },
  env: {
    //SERVER_ENDPOINT: process.env.SERVER_ENDPOINT ? process.env.SERVER_ENDPOINT : "http://localhost:1337"
  },
  axios: {
    baseURL: "/",
    proxyHeaders: false,
    credentials: true
  },
  sitemap: {
    hostname: "https://chantry.io",
    gzip: true
  },
  build: {
    optimizeCSS: true
  },
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    ["nuxt-matomo", { matomoUrl: "https://stats.apps.epitrade.io/", siteId: 2 }]
  ],
  plugins: [
    "~/plugins/fontawesome.js"
  ]
}
