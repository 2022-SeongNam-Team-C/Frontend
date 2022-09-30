<template>
  <div class="wrapper">
    <Header></Header>

    <div class="input__wrapper">
      <Input
        value=""
        placeholder="이메일"
        width="423px"
        :onChange="changeEmail"
      />
      <Input
        type="password"
        value=""
        placeholder="비밀번호"
        width="423px"
        :onChange="changePassword"
        v-on:keyup.enter="signIn"
      />
    </div>
    <div class="button__wrapper">
      <div class="button" @click="signIn">로그인</div>
      <div class="button__reverse" @click="routerSignUp">회원가입</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header_Title.vue";
import Input from "@/components/common/Input.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
import Api from "@/services/api";

import RegEx, { returnType } from "@/lib/regExp";
import { useToast } from "vue-toastification";
const toast = useToast();

const router = useRouter();
const email = ref<string>("");
const password = ref<string>("");

function changeEmail(value: string) {
  email.value = value;
  console.log("email", value);
}

function changePassword(value: string) {
  password.value = value;
  console.log("password", value);
}

function routerSignUp() {
  router.push("/signup");
}
async function signIn() {
  try {
    console.log(email.value, password.value);
    const regex = await RegEx.SignInRegEx(email.value, password.value);
    if (regex.status) {
      const response: any = await Api.signIn({
        email: email.value,
        password: password.value,
      });
      console.log(response);

      // 성공시
      if ((response.statusText = "OK")) {
        toast.success("로그인을 성공하였습니다.", {
          timeout: 5000,
        });
        router.push("/");
      }
      // 성공 시 토큰 저장 및 응답 값 처리
    } else {
      toast.error("이메일 또는 패스워드를 다시 확인해주세요.", {
        timeout: 5000,
      });
    }
  } catch (e) {
    console.error(e);
  }
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
.button__reverse {
  border: 1px solid #9885b8;
  color: #9885b8;

  width: 423px;
  height: 50px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .button,
  .button__reverse {
    width: 100% !important;
  }
}
</style>
