<template>
  <Header></Header>
  <div class="wrapper">
    <div class="history__title">염태민's History</div>
    <div class="history__image__wrapper"></div>
    <div class="history__image__wrapper"></div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
  margin-bottom: 6em;
  flex-direction: column;
}
.history__title {
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}
.history__image__wrapper {
  width: 643px;
  height: 405px;

  border-radius: 15px;
  background-color: #ddddf7;

  margin: 2.4em auto 0px auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-sizing: border-box;
}
</style>
