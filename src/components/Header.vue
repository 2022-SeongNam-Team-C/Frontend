<template>
  <div class="header">
    <div class="flex__center header__sub__wrapper">
      <img
        width="28"
        height="28"
        src="@/assets/icons/history.png"
        alt="히스토리 둘러보기"
        class="header__history__search__icon"
      />
      <p>염태민님의 History 둘러보기</p>
    </div>

    <Header_Title />
    <div class="flex__center header__sub__wrapper">
      <img
        src="@/assets/icons/user.png"
        alt="프로필 이미지"
        class="header__profile"
      />
      <div class="header_menu">
        <div>염태민님, 환영합니다.</div>
        <div class="flex_center">
          <span class="header__menu__button">마이페이지</span>
          <span class="header__menu__line">|</span>
          <span class="header__menu__button">로그아웃</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header_Title from "@/components/Header_Title.vue";
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
.header__menu__button {
  cursor: pointer;
}
.header__sub__wrapper {
  width: 250px;
}
</style>
