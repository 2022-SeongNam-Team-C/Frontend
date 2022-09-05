<template>
  <div class="wrapper">
    <Header></Header>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

<style>
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
}
.wrapper {
  margin: 10px 20px;
}
</style>
