<template>
  <Header></Header>
  <div class="wrapper">
    <div class="history__title">염태민's History</div>
    <div class="history__wrapper">
      <div class="history__image__wrapper"></div>
      <div class="history__image__wrapper"></div>
      <div class="history__image__wrapper"></div>
      <div class="history__image__wrapper"></div>
      <div class="history__image__wrapper"></div>
      <div class="history__image__wrapper"></div>
    </div>
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
.history__wrapper {
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2em;
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
  min-width: 330px;
  height: 330px;

  border-radius: 15px;
  background-color: #ddddf7;

  margin: 0.3em 0.3em 0.3em 0.3em;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-sizing: border-box;
}
@media screen and (max-width: 768px) {
  .history__image__wrapper,
  .history__wrapper {
    max-width: 330px;
    min-width: 95%;
  }
}
</style>
