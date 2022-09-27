<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header" class="modal-text">
              하단에 이메일을 입력하시면, 입력하신 이메일로 사진을 보내드려요!
            </slot>
          </div>
          <input
            class="message"
            placeholder="test@test.com"
            v-model="email"
            v-on:keyup.enter="$emit('close', email)"
          />
          <div class="modal-footer">
            <div class="modal-default-button" @click="$emit('close', email)">
              전송
            </div>
          </div>
        </div>
        <div class="modal-background" @click="$emit('close')"></div>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { ref } from "vue";
const { email } = ref<any>("");
const { show } = defineProps({
  show: Boolean,
});
</script>

<style>
@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "GmarketSansLight";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;
  z-index: 1000;
}
.modal-background {
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;

  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-text {
  word-break: keep-all;
}
.modal-container {
  width: fit-content;
  height: fit-content;
  margin: 3em auto 3em auto;
  padding: 5em 4em 5em 4em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  background-color: rgb(255, 255, 255);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  z-index: 101;
}

.modal-header {
  width: 100%;
  height: 15%;
  margin: center;
  font-family: "GmarketSansLight";
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  margin-bottom: 16px;
}

.modal-body {
  width: 600px;
  height: 42px;
  margin: 31px 40px 41px 0;
  padding: 15px 40px 0 13px;
  border-radius: 20.6px;
  border: solid 0.4px #000;
  background-color: #fff;
}

.message {
  width: 100%;
  height: 42px;
  margin: 0 auto;
  padding: 1px 47px 0 13px;
  border-radius: 20.6px;
  border: solid 0.4px #000;
  background-color: #fff;
}

.modal-default-button {
  width: 91px;
  height: 39px;
  margin: 20px 100%;
  border-radius: 10px;
  background-color: #ddddf7;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  cursor: pointer;
}

.modal-footer {
  font-family: GmarketSansTTF;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;

  margin-top: 36px;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
@media screen and (max-width: 768px) {
  .modal-container {
    width: 90% !important;
    margin: 0 auto !important;
    padding: 2em 1.4em;
  }
  .modal-header {
    margin-bottom: 0px;
  }
  .modal-header > h3 {
    word-break: keep-all;
    text-align: center;
  }
  .modal-footer {
    margin-top: 24px;
  }
}
</style>
