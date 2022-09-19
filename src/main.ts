import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueSocialSharing from "vue-social-sharing";
import VueKakaoSdk from "vue-kakao-sdk";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const apiKey = process.env.VUE_APP_KAKAO_API_KEY
  ? process.env.VUE_APP_KAKAO_API_KEY
  : "";
  
createApp(App)
  .use(store)
  .use(router)
  .use(VueSocialSharing)
  .use(Toast)
  .use(VueKakaoSdk, { apiKey })
  .mount("#app");

export default App;
