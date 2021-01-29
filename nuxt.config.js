import path from "path";
import fs from "fs";

export default {
  axios: {
    baseURL: "/",
    proxyHeaders: true,
    credentials: true
  },
  build: {
    optimizeCSS: true
  },
  env: {
    AUTH_SERVER_ENDPOINT: process.env.AUTH_SERVER_ENDPOINT || "https://localhost:1080",
  },
  head: {
    title: "snagmark",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "snagmark" },
      { hid: "identifier-url", name: "identifier-url", content: "https://snagmark.io" },
      { hid: "title", name: "title", content: "snagmark" },
      { hid: "abstract", name: "abstract", content: "snagmark" },
      { hid: "description", name: "description", content: "snagmark" },
      { hid: "keywords", name: "keywords", content: "snagmark, vohzd, " },
      { hid: "author", name: "author", content: "vohzd" },
      { hid: "language", name: "language", content: "EN" },
      { hid: "robots", name: "robots", content: "All" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  loading: { color: '#b56d82' },
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap"
  ],
  plugins: [
    "~/plugins/fontawesome.js"
  ],
  sitemap: {
    hostname: "https://snagmark.io",
    gzip: true
  },
  serverMiddleware: [
    { path: "/api", handler: "~/api/index.js" }
  ],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "./api/config/keys/ssl/server.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "./api/config/keys/ssl/server.cert"))
    }
  }
}
