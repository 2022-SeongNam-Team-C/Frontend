import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vue from 'vue'
import VueKakaoSdk from 'vue-kakao-sdk'
import VueSocialSharing from 'vue-social-sharing'

const apiKey = 'fa8ce94ce0a7e036766e1646ef83884c'

createApp(App).use(store).use(router).use(VueKakaoSdk, {apiKey}).use(VueSocialSharing).mount('#app') 
