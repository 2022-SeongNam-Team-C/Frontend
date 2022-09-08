<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

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
.flex {
  display: flex;
}
.flex__center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
