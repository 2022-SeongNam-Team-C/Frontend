<template>
  <Header></Header>
  <div class="upload__wrapper" v-if="state == 'process'">
    <div class="flex__center upload__header__wrapper">
      <div class="upload__text">당신의 추억을 올려주세요!</div>
      <label>
        <div class="upload__button">파일업로드</div>
        <input
          type="file"
          class="upload__input"
          @change="onFileChange($event)"
          ref="fileInput"
        />
      </label>
    </div>
    <template v-if="file && image">
      <div class="upload__image__wrapper">
        <img :src="image" class="upload__image" />
      </div>
      <div class="upload__confirm__button" @click="imageChange()">확인</div>
    </template>
    <div
      v-else
      class="flex__center"
      style="flex-direction: column; margin-top: 24px"
    >
      <div
        :class="isDragged ? 'dragged' : ''"
        class="upload__image__wrapper__shadow"
        @dragenter="onDragenter"
        @dragover="onDragover"
        @dragleave="onDragleave"
        @drop="onDrop"
        @click="onClick"
      >
        <img
          src="@/assets/icons/download-image.png"
          class="upload__image__wrapper__download__image"
        />
        <div class="upload__text">사진을 끌어 업로드 해주세요.</div>
      </div>
      <div v-if="images" class="w-full h-full flex items-center">
        <img :src="images" alt="image" />
      </div>
    </div>
  </div>
  <div class="upload__wrapper" v-if="state == 'confirm'">
    <div class="upload__confirm__wrapper">
      <div class="upload__header__wrapper" style="margin: 0px 3em 0px 0px">
        <div class="upload__text">변환이 완료되었습니다. 확인해보세요!</div>

        <div class="upload__image__wrapper">
          <!-- 추후 수정 -->
          <img :src="image" class="upload__image" />
        </div>
      </div>

      <div class="upload__confirm__share__wrapper">
        <div class="upload__confirm__share__box">
          <div class="upload__confirm__share__title">
            완성된 사진을 친구들에게 사진을 공유해보세요!
          </div>
          <div class="flex mobile__dir">
            <div class="upload__confirm__share__icon">
              <img
                src="@/assets/icons/icon-kakao.png"
                alt="카카오톡 아이콘"
                width="64px"
              />
              <div>카카오톡</div>
            </div>
            <div class="upload__confirm__share__icon">
              <img
                src="@/assets/icons/icon-facebook.png"
                alt="페이스북 아이콘"
                width="64px"
              />
              <div>페이스북</div>
            </div>
            <div class="upload__confirm__share__icon">
              <img
                src="@/assets/icons/share.png"
                alt="카카오톡 아이콘"
                width="64px"
              />
              <div>url 복사</div>
            </div>
          </div>
        </div>

        <div class="upload__confirm__share__box">
          <div class="upload__confirm__share__title">
            사진을 다운로드 하거나, 전송하기 버튼을 누르시면 이메일로 사진을
            보내드려요.
          </div>
          <div class="flex mobile__dir">
            <div class="upload__confirm__share__icon">
              <img
                src="@/assets/icons/download.png"
                alt="카카오톡 아이콘"
                width="64px"
              />
              <div>다운로드</div>
            </div>
            <div class="upload__confirm__share__icon">
              <img
                src="@/assets/icons/send.png"
                alt="카카오톡 아이콘"
                width="64px"
              />
              <div>전송하기</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <u class="upload__confirm__go__main" @click="ProcessEvent"
      >메인화면으로 돌아가기</u
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Header from "@/components/Header.vue";

const state = ref<string>("process");
const images = ref<string>("");
const file = ref<File | null>();
const image = ref<any>();
const fileInput = ref<any>(null);
const isDragged = ref<boolean>(false);
function onFileChange($event: Event) {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    file.value = target.files[0];
    const reader = new FileReader();
    reader.onload = (e?: any) => {
      image.value = e.target.result;
    };
    reader.readAsDataURL(target.files[0]);
  }
}

async function imageChange() {
  if (file.value) {
    try {
      // save file.value
      console.log("파일 존재");
      ConfirmEvent();
    } catch (error) {
      console.error("X", error);
    }
  }
}

function ConfirmEvent() {
  state.value = "confirm";
}
function ProcessEvent() {
  state.value = "process";
  file.value = null;
  image.value = null;
}

function onClick() {
  fileInput.value.click();
}
function onDragenter(event: any) {
  // class 넣기
  isDragged.value = true;
}
function onDragleave(event: any) {
  isDragged.value = false;
}
function onDragover(event: any) {
  // 드롭을 허용하도록 prevetDefault() 호출
  event.preventDefault();
}
function onDrop(event: any) {
  // 기본 액션을 막음 (링크 열기같은 것들)
  event.preventDefault();
  isDragged.value = false;
  const files = event.dataTransfer.files;

  file.value = files[0];
  const reader = new FileReader();
  reader.onload = (e?: any) => {
    image.value = e.target.result;
  };
  reader.readAsDataURL(files[0]);
}
</script>

<style scoped>
.upload__confirm__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 3.2em;
}
.upload__confirm__share__box {
  margin: 3em 0px;
}
.upload__confirm__share__title {
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;

  margin-bottom: 1em;

  word-break: keep-all;
}
.upload__confirm__share__icon {
  display: flex;
  flex-direction: column;

  justify-content: center;

  margin-right: 2em;
  text-align: center;

  cursor: pointer;
}
.upload__confirm__share__icon > div {
  margin-top: 0.4em;

  text-align: center;
}
.upload__wrapper {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.upload__text {
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
}
.upload__button {
  width: fit-content;
  margin: 0px 0px 0px 8px;
  padding: 7px 30px 7px 29px;
  border-radius: 10px;
  background-color: #ddddf7;

  cursor: pointer;
}
.upload__header__wrapper {
  margin-top: 3.2em;
}
.upload__image__wrapper {
  width: fit-content;
  height: fit-content;

  border-radius: 15px;
  background-color: #ddddf7;

  margin: 14px auto 0px auto;
  padding: 1.5em 1.8em;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
}

.upload__image__wrapper__shadow {
  width: 643px;
  height: 405px;

  border-radius: 15px;
  background-color: #ddddf7;

  margin: 0px auto 0px auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-sizing: border-box;
}

@media screen and (max-width: 768px) {
  .upload__image__wrapper {
    padding: 1em 1.2em;
  }
  .upload__image__wrapper__shadow {
    width: 90%;
  }
}
.upload__image {
  max-width: 40vw;
  max-height: 50vh;

  /* height: 405px; */

  object-fit: contain;
}

.upload__input {
  display: none;
}
.upload__confirm__button {
  width: fit-content;
  margin: 20px auto 0px auto;
  padding: 14px 34px 14px 34px;
  border-radius: 10px;
  background-color: #ddddf7;
  font-weight: 300;

  cursor: pointer;
}
.upload__confirm__go__main {
  margin: 2.2em auto 0 auto;
  text-align: center;

  cursor: pointer;
}

.upload__image__wrapper__download__image {
  width: 60px;
  margin-bottom: 4px;
}
.dragged {
  border: 2px dashed gray;
  opacity: 0.5;
}
@media screen and (max-width: 768px) {
  .upload__image {
    max-width: 80vw;
  }
  .upload__confirm__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }
  .upload__confirm__share__title {
    width: 90%;
    text-align: center;
    margin: 0 auto 8px auto;
  }
  .mobile__dir {
    justify-content: center;
    align-items: center;
  }
  .upload__header__wrapper {
    margin: 0 auto !important;
  }
  .upload__confirm__share__icon {
    margin: 0px 10px !important;
  }
  .upload__confirm__go__main {
    margin: 0px 0px 60px 0px !important;
  }
}
</style>
