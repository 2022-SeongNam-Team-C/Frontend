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
  </div>
  <div class="SNS">
    <img
      class="kakao_btn"
      src="@/assets/icons/kakao.png"
      @click="shareMessage"
    /> 
  </div>
    <div class = "Kakao">
      카카오톡
    </div>
  <div class="SNS">
    <ShareNetwork
      network="facebook"
      url="https://www.facebook.com/"

      title="Ladder"
      description="Line And Drawing, Draw Especial Recollection"
      hashtags="Frontend, Programming">
      <img
        class="facebook_btn"
        src="@/assets/icons/facebook.png"
        />
    </ShareNetwork>
  </div>
    <div class = "Facebook">
      페이스북
    </div>

  <div class="Modal">
    <img
      id="show-modal"
      src="@/assets/icons/send.png"
      @click="showModal = true"
    />
    <div class = "Send">
      전송하기
    </div>
    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>하단에 이메일을 입력하시면, 입력하신 이메일로 사진을 보내드려요!</h3>
        </template>
      </Modal>
    </Teleport>
  </div> 
</template>

<script>
    import Header_Title from "@/components/Header_Title.vue";
    import Modal from '@/components/Modal.vue';

    export default{
      components:{ Header_Title, Modal},
      methods: {
        shareMessage() {
          window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
            title: 'Ladder',
            description: 'Line And Drawing, Draw Especial Recollection',
            imageUrl: 'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
            link: {
              mobileWebUrl:
                'https://developers.kakao.com',
              webUrl:
                'https://developers.kakao.com',
            }
          },
        });
        }
      },
      data() {
        return {
          showModal: false
        }
      },
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
