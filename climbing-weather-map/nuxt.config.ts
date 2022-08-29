import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiKey: process.env.FB_apiKey,
    authDomain: process.env.FB_authDomain,
    projectId: process.env.FB_projectId,
    storageBucket: process.env.FB_storageBucket,
    messagingSenderId: process.env.FB_messagingSenderId,
    appId: process.env.FB_appId,
    measurementId: process.env.FB_measurementId,
    // Keys within public, will be also exposed to the client-side
    public: {
      apiKey: process.env.FB_apiKey,
      authDomain: process.env.FB_authDomain,
      projectId: process.env.FB_projectId,
      storageBucket: process.env.FB_storageBucket,
      messagingSenderId: process.env.FB_messagingSenderId,
      appId: process.env.FB_appId,
      measurementId: process.env.FB_measurementId,
    },
  },
});
