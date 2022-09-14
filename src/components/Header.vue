<template>
  <div class="header">
    <div
      class="flex__center header__sub__wrapper mobile__display__none cursor__pointer"
      v-if="authStatus"
      @click="routerHistory"
    >
      <img
        width="28"
        height="28"
        src="@/assets/icons/history.png"
        alt="히스토리 둘러보기"
        class="header__history__search__icon"
      />
      <p>염태민님의 History 둘러보기</p>
    </div>
    <div class="header__sub__wrapper mobile__display__none" v-else></div>

    <Header_Title />
    <div
      v-if="authStatus"
      style="margin: 20px 0px"
      class="mobile__display__block"
    >
      <div
        class="flex__center header__sub__wrapper cursor__pointer"
        @click="routerHistory"
      >
        <img
          width="28"
          height="28"
          src="@/assets/icons/history.png"
          alt="히스토리 둘러보기"
          class="header__history__search__icon"
        />
        <p>염태민님의 History 둘러보기</p>
      </div>
      <div class="flex__center">
        <img
          src="@/assets/icons/user.png"
          alt="프로필 이미지"
          class="header__profile"
        />
        <div class="header_menu">
          <div>염태민님, 환영합니다.</div>
          <div class="flex_center">
            <!-- <span class="header__menu__button">마이페이지</span>
            <span class="header__menu__line">|</span> -->
            <span class="header__menu__button">로그아웃</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex__center header__sub__wrapper mobile__display__flex"
      style="margin: 20px 0px"
      v-else
    >
      <div class="header__auth__wrapper flex__center" @click="routerSignIn()">
        <img
          src="@/assets/icons/signin.png"
          alt="로그인 이미지"
          class="header__profile"
        />
        <div>로그인</div>
      </div>
      <div class="header__auth__wrapper flex__center" @click="routerSignUp()">
        <img
          src="@/assets/icons/signup.png"
          alt="회원가입 이미지"
          class="header__profile"
        />
        <div>회원가입</div>
      </div>
    </div>

    <div
      class="flex__center header__sub__wrapper mobile__display__none"
      v-if="authStatus"
    >
      <img
        src="@/assets/icons/user.png"
        alt="프로필 이미지"
        class="header__profile"
      />
      <div class="header_menu">
        <div>염태민님, 환영합니다.</div>
        <div class="flex_center">
          <!-- <span class="header__menu__button">마이페이지</span>
          <span class="header__menu__line">|</span> -->
          <span class="header__menu__button">로그아웃</span>
        </div>
      </div>
    </div>
    <div class="flex__center header__sub__wrapper mobile__display__none" v-else>
      <div class="header__auth__wrapper flex__center" @click="routerSignIn()">
        <img
          src="@/assets/icons/signin.png"
          alt="로그인 이미지"
          class="header__profile"
        />
        <div>로그인</div>
      </div>
      <div class="header__auth__wrapper flex__center" @click="routerSignUp()">
        <img
          src="@/assets/icons/signup.png"
          alt="회원가입 이미지"
          class="header__profile"
        />
        <div>회원가입</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header_Title from "@/components/Header_Title.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const authStatus = ref<boolean>(
  localStorage.getItem("access-token") ? true : false
);

function routerSignIn() {
  router.push("/signin");
}

function routerSignUp() {
  router.push("/signup");
}
function routerHistory() {
  router.push("/history");
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin: 2.2em 0.5em 1.1em 0.5em;
}
.header__menu {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.header__profile {
  margin-right: 10px;
}
.header__menu__line {
  margin: 0px 4px;
}
.header__history__search__icon {
  margin-right: 8px;
}
.cursor__pointer {
  cursor: pointer;
}
.header__menu__button {
  cursor: pointer;
}
.header__sub__wrapper {
  width: 250px;
}
.header__auth__wrapper {
  margin: 0px 10px;

  cursor: pointer;
}
.mobile__display__block,
.mobile__display__flex {
  display: none;
}
@media screen and (max-width: 768px) {
  .mobile__display__none {
    display: none;
  }
  .mobile__display__block {
    display: block;
  }
  .mobile__display__flex {
    display: flex;
  }
  .header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
