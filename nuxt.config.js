import path from "path";
import fs from "fs";

const serverConf = process.env.NODE_ENV !== "production" ? {
  https: {
    key:  fs.readFileSync(path.resolve(__dirname, "./api/config/dev-ssl-certs/server.key")),
    cert: fs.readFileSync(path.resolve(__dirname, "./api/config/dev-ssl-certs/server.cert"))
  }
} : {}

export default {
  axios: {
    baseURL: "/",
    proxyHeaders: true,
    credentials: true
  },
  build: {
    optimizeCSS: true
  },
  css: [
    "~/node_modules/vue-js-modal/dist/styles.css"
  ],
  env: {
    AUTH_SERVER_ENDPOINT: process.env.AUTH_SERVER_ENDPOINT || "https://localhost:1080"
  },
  head: {
    title: "epitrade",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "snagmark" },
      { hid: "identifier-url", name: "identifier-url", content: "https://snagmark.com" },
      { hid: "title", name: "title", content: "snagmark" },
      { hid: "abstract", name: "abstract", content: "snagmark" },
      { hid: "description", name: "description", content: "snagmark" },
      { hid: "keywords", name: "keywords", content: "snagmark, " },
      { hid: "author", name: "author", content: "vohzd" },
      { hid: "language", name: "language", content: "EN" },
      { hid: "robots", name: "robots", content: "All" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    /*
    script: [
      {
        src: "https://stats.snagmark.com/js/plausible.js", async: true, defer: true, "data-domain": "snagmark.com"
      }
    ]*/
  },
  loading: { color: "#ecb875" },
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap"
  ],
  plugins: [
    "~/plugins/axiosErrorHandler.js",
    "~/plugins/fontawesome.js",
  ],
  sitemap: {
    hostname: "https://snagmark.com",
    gzip: true
  },
  serverMiddleware: [
    { path: "/api", handler: "~/api/index.js" }
  ],
  server: serverConf
}
