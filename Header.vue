<template>
  <div class="header">
    <div class="flex_center">
      <img
        src="https://via.placeholder.com/28x28"
        alt="히스토리 둘러보기"
        class="header_history_search_icon"
      />
      <p>염태민님의 History 둘러보기</p>
    </div>
    <Header_Title />
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
    </div>
    <img
      class="kakao_btn"
      src="@/assets/icons/kakao.png"
      @click="kakaoLink"
    />
  </div>
</template>

<script>
  import Header_Title from "./Header_Title.vue";
   export default {
     methods: {
       kakaoLink() {
         window.Kakao.Link.sendDefault({
           objectType: 'text',
           text:
             '기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오링크는 다른 템플릿을 이용해 보낼 수 있습니다.',
           link: {
             mobileWebUrl:
               'https://developers.kakao.com',
             webUrl:
               'https://developers.kakao.com',
           }
       });
   }
 }
   }
 </script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin: 2.2em 0.5em 1.1em 0.5em;
}
.flex {
  display: flex;
}
.flex_center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_menu {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
