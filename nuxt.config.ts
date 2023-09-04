// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devtools: {
    enabled: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  //   app: {
  //     head: {
  //       script: [
  //         {
  //           src: "https://code.jquery.com/jquery-3.6.4.min.js",
  //           type: "text/javascript",
  //         },
  //       ],
  //     },
  //   },
});
