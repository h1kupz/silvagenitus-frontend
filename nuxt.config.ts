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
    link: [],
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
});
