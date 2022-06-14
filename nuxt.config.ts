import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      // add Postcss options
      postcssOptions: require("./postcss.config.js"),
    },
  },
  meta: {
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap",
        rel: "stylesheet",
      },
    ],
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
});
