<template>
  <input
    class="input"
    :style="{ width: width ? width : '200px' }"
    alt="Input"
  />
  
</template>

<script setup lang="ts">
const props = defineProps({
  width: String,
});
</script>

<style lang="scss" scoped>
.input {
  height: 50px;

  border-radius: 8px;
  border: 1px solid #c9c4c4;
  color: #c9c4c4;

  padding: 0.6em 1em;
}
</style>
