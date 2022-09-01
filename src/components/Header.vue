<template>
  <div class="header">
    <div></div>
    <div class="header_title_wrapper">
      <img
        src="https://via.placeholder.com/96x106"
        alt="프로필 이미지"
        class="header_profile"
      />
      <h1 class="header_title">Ladder</h1>
      <p class="header_subtitle">Line And Drawing Draw Especial Recollection</p>
    </div>
    <div>
      <div class="flex_center">
        <img
          src="https://via.placeholder.com/56x56"
          alt="프로필 이미지"
          class="header_profile"
        />
        <div class="header_menu">
          <div>염태민님, 환영합니다.</div>
          <div class="flex_center">
            <span class="header_menu_button">마이페이지</span>
            <span class="header_menu_line">|</span>
            <span class="header_menu_button">로그아웃</span>
          </div>
        </div>
      </div>
      <div class="flex_center">
        <img
          src="https://via.placeholder.com/28x28"
          alt="히스토리 둘러보기"
          class="header_history_search_icon"
        />
        <p>염태민님의 History 둘러보기</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin: 2.2em 0px 1.1em 0px;
}
.flex {
  display: flex;
}
.flex_center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_title_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.header_menu {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: 12px;
}
.header_title {
  font-size: 40px;

  margin: 4px 0px 4px 0px;
}
.header_subtitle {
  font-size: 20px;

  margin: 0px;
}
.header_profile {
  margin-right: 10px;
}
.header_menu_line {
  margin: 0px 4px;
}
.header_history_search_icon {
  margin-right: 4px;
}
.header_menu_button {
  cursor: pointer;
}
</style>
