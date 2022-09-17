<template>
  <div class="container" v-if="status">
    <div class="spinner"></div>
    <div class="background"></div>
  </div>
</template>

<script setup lang="ts">
const { status } = defineProps({
  status: Boolean,
});
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: 70px;
  height: 70px;
  border: 7px solid rgba(163, 151, 198, 0.2);
  border-top: 7px solid rgba(163, 151, 198, 1);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  z-index: 100;
}
.background {
  position: fixed;
  top: 0px;
  left: 0px;

  background-color: rgb(198, 198, 198);
  opacity: 0.4;
  width: 100vw;
  height: 100vh;
}
</style>
