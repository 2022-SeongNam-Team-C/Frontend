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
    <div class="SNS">
      <img
          class="kakao_btn"
          src="@/assets/icons/kakao.png"
          @click="kakaoLink"
      /> 
        <ShareNetwork
            network="facebook"
            url="https://www.naver.com/"
            title="Ladder"
            description="Line And Drawing, Draw Especial Recollection"
            hashtags="Frontend, Programming">
            <img
                class="facebook_btn"
                src="@/assets/icons/facebook.png"
            /> 
        </ShareNetwork>
        <ShareNetwork
            network="twitter"
            url="https://www.naver.com/"
            title="Ladder-Line And Drawing, Draw Especial Recollection"
            description="Line And Drawing, Draw Especial Recollection">
            <img
                class="twitter_btn"
                src="@/assets/icons/twitter.png"
            /> 
        </ShareNetwork>
    </div>
  </div>
</template>


<script>
    import Header_Title from "@/components/Header_Title.vue";

    export default {
      components:{ Header_Title },
      methods: {
        kakaoLink() {
          window.Kakao.Link.sendDefault({
            objectType: 'text',
            text:
              'Ladder - Line And Drawing, Draw Especial Recollection',
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
.link-icon { 
  position: relative; 
  display: inline-block; 
  width: auto;    
  font-size: 14px; 
  font-weight: 500; 
  color: #333; 
  margin-right: 10px; 
  padding-top: 50px; 
}
.SNS{
  display: flex;
  cursor: pointer;
}
</style>
