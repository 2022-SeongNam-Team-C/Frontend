<template>
  <div class="header__title__wrapper">
    <img
      src="@/assets/icons/logo.svg"
      alt="프로필 이미지"
      class="header__profile"
    />
    <h1 class="header__title">Hello, Ladder</h1>
    <p class="header__subtitle">Line And Drawing Draw Especial Recollection</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header__title__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.header__title {
  font-size: 40px;

  margin: -2px 0px 0px 0px;
  font-family: "Noto Serif KR", serif;
  font-weight: bold;
}
.header__subtitle {
  font-size: 20px;

  margin: -4px 0px 0px 0px;
  font-family: "Noto Serif KR", serif;
  font-weight: bold;
}
</style>
