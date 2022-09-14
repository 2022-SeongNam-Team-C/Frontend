import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueSocialSharing from "vue-social-sharing";
import VueKakaoSdk from "vue-kakao-sdk";

const apiKey = process.env.VUE_APP_KAKAO_API_KEY
  ? process.env.VUE_APP_KAKAO_API_KEY
  : "";
createApp(App)
  .use(store)
  .use(router)
  .use(VueSocialSharing)
  .use(VueKakaoSdk, { apiKey })
  .mount("#app");
