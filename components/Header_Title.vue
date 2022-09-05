<template>
  <div class="header_title_wrapper">
    <img
      src="@/assets/icons/logo.svg"
      alt="프로필 이미지"
      class="header_profile"
    />
    <h1 class="header_title">Hello, Ladder</h1>
    <p class="header_subtitle">Line And Drawing Draw Especial Recollection</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header_title_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.header_title {
  font-size: 40px;

  margin: 4px 0px 0px 0px;
}
.header_subtitle {
  font-size: 20px;

  margin: 0px;
}
</style>
