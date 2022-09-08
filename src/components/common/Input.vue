<template>
  <input
    class="input"
    :style="{ width: width ? width : '420px' }"
    alt="Input"
    :placeholder="placeholder"
    v-model="value"
    @input="onChange && onChange(value)"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref<string>("");

const { width, placeholder, onChange } = defineProps({
  width: String,
  placeholder: String,
  onChange: Function,
});
</script>

<style lang="scss" scoped>
.input {
  height: 50px;

  border-radius: 8px;
  border: 1px solid #c9c4c4;
  color: #c9c4c4;

  padding: 0.6em 1em;
  margin: 0px 0px 2px 0px;
}
@media screen and (max-width: 768px) {
  .input {
    width: 100% !important;
  }
}
</style>
