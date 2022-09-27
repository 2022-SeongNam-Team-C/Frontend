<template>
  <div class="header__title__wrapper">
    <img
      src="@/assets/icons/logo.svg"
      alt="프로필 이미지"
      class="header__profile"
      @click="logo"
    />
    <h1 class="header__title" @click="logo">Hello, Ladder</h1>
    <p class="header__subtitle" @click="logo">
      Line And Drawing Draw Especial Recollection
    </p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
function logo() {
  router.push("/");
}
</script>

<style scoped>
.header__title__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;
}
.header__title {
  font-size: 40px;

  margin: -2px 0px 0px 0px;
  font-family: "Noto Serif KR", serif;
  font-weight: bold;

  cursor: pointer;
}
.header__subtitle {
  font-size: 20px;

  margin: -4px 0px 0px 0px;
  font-family: "Noto Serif KR", serif;
  font-weight: bold;
  cursor: pointer;

  text-align: center;
}
.header__profile {
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  .header__title {
    font-size: 32px;
  }
  .header__subtitle {
    font-size: 16px;
    text-align: center;
  }
}
</style>
