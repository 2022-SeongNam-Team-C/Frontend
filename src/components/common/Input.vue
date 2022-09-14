<template>
  <input
    class="input"
    :style="{
      width: width ? width : '420px',
      margin: margin ? margin : '0px 0px 2px 0px',
    }"
    alt="Input"
    :placeholder="placeholder"
    v-model="valueParent"
    @input="onChange && onChange(value)"
    :disabled="disabled ? disabled : false"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const { width, margin, placeholder, onChange, valueParent, disabled } =
  defineProps({
    width: String,
    margin: String,
    placeholder: String,
    onChange: Function,
    valueParent: String,
    disabled: Boolean,
  });
const value = ref<string>(valueParent ? valueParent : "");
</script>

<style lang="scss" scoped>
.input {
  height: 50px;

  border-radius: 8px;
  border: 1px solid #c9c4c4;
  color: black;

  padding: 0.6em 1em;
}
@media screen and (max-width: 768px) {
  .input {
    width: 100% !important;
  }
}
</style>
