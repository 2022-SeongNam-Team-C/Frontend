<template>
  <div class="wrapper">
    <Header></Header>
    <div class="input__wrapper">
      <div class="input__extend__wrapper">
        <Input placeholder="이메일" width="200px" :onChange="changeEmail" />
        @

        <Input
          width="200px"
          :onChange="changeEmailDomain"
          placeholder="직접입력"
          v-if="emailDomainSelectValue == '직접입력' ? true : false"
        />
        <Input width="200px" :valueParent="emailDomain" v-else disabled />
      </div>
      <select
        class="select"
        @change="(value: any) => changeEmailDomainSelectValue(value.target.value)"
      >
        <option value="직접입력">직접입력</option>
        <option value="naver.com">naver.com</option>
        <option value="daum.net">daum.net</option>
        <option value="google.com">google.com</option>
        <option value="hanmail.com">hanmail.com</option>
        <option value="nate.com">nate.com</option>
      </select>

      <Input
        type="password"
        margin="2px auto"
        placeholder="비밀번호"
        width="423px"
        :onChange="changePassword"
      />
      <Input
        type="password"
        margin="2px auto"
        placeholder="비밀번호 확인"
        width="423px"
        :onChange="changePasswordCheck"
      />
      <Input
        margin="2px auto"
        placeholder="이름"
        width="423px"
        :onChange="changeUsernameCheck"
      />
    </div>
    <div class="button__wrapper">
      <div class="button">회원가입</div>
    </div>
    <div class="signup__text">예쁜 추억으로 향하는 사다리 탈 준비 완료!</div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header_Title.vue";
import Input from "@/components/common/Input.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref<string>("");
const emailDomain = ref<string>("직접입력");
const emailDomainSelectValue = ref<string>("직접입력");
const password = ref<string>("");
const passwordCheck = ref<string>("");
const username = ref<string>("");

function changeEmail(value: string) {
  email.value = value;
  console.log("email", value);
}

function changeEmailDomain(value: string) {
  emailDomain.value = value;
  console.log("eamilDomain", value);
}
function changeEmailDomainSelectValue(value: string) {
  emailDomain.value = value;
  emailDomainSelectValue.value = value;
  console.log("eamilDomain", value);
}

function changePassword(value: string) {
  password.value = value;
  console.log("password", value);
}

function changePasswordCheck(value: string) {
  passwordCheck.value = value;
}

function changeUsernameCheck(value: string) {
  username.value = value;
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: calc(100vh - 30px);
}
.input__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1.4em;
  margin-bottom: 1em;

  width: 100%;
}

.button__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
}
.button {
  background-color: #9885b8;
  color: #ffffff;

  width: 423px;
  height: 50px;
  border-radius: 8px;

  margin: 0px 0px 2px 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}
.input__extend__wrapper {
  width: 423px;
  margin: 2px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.select {
  width: 423px;
  height: 50px;

  border-radius: 8px;
  border: 1px solid #c9c4c4;
  color: black;

  margin: 2px auto;
  padding: 0.5em 0.7em;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;

  font-size: 13.8px;
  color: #757575;

  cursor: pointer;
}

.signup__text {
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  /* identical to box height */

  color: #9885b8;
  margin-top: 10px;
}
@media screen and (max-width: 768px) {
  .button,
  .select {
    width: 100% !important;
  }
  .input__extend__wrapper {
    width: 100%;
    flex-direction: column;
  }
}
</style>
