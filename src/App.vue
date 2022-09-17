<template>
  <div class="wrapper">
    <router-view />
  </div>
  <Loading :status="store.state.loading__status" />
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import Loading from "./components/Loading.vue";

const store = useStore();
</script>

<style>
@import url(https://cdn.rawgit.com/kattergil/NotoSerifKR-Web/76eb9ebf/stylesheet/NotoSerif-Web.css);

@font-face {
  font-family: "GmarketSansTTFBold";
  src: url("./assets/font/GmarketSansTTFBold.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "GmarketSansTTFLight";
  src: url("./assets/font/GmarketSansTTFLight.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "GmarketSansTTFMedium";
  src: url("./assets/font/GmarketSansTTFMedium.ttf") format("truetype");
  font-display: swap;
}

html,
body {
  margin: 0px;
  padding: 0px;
}
html {
  background-color: #f1f1ff;
}
* {
  box-sizing: border-box;
  font-family: "GmarketSansTTFLight";
}
.wrapper {
  margin: 10px 20px;
}
@media screen and (max-width: 768px) {
  .wrapper {
    margin: 5px 10px;
  }
}
.flex {
  display: flex;
}
.flex__center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
