<script>
  export default {
    props: {
      show: Boolean
    }
  }
</script>
  
  <template>
    <Transition name="modalmobile">
      <div v-if="show" class="modalmobile-mask">
        <div class="modalmobile-wrapper">
          <div class="modalmobile-container">
            <div class="modalmobile-header">
              <slot name="mobileheader">
                하단에 이메일을 입력하시면, 입력하신 이메일로 사진을 보내드려요!
              </slot>
            </div>
  
            <div class="modalmobile-body">
              <slot name="mobilebody">test@test.com</slot>
            </div>
            <Form>
              <div class="modalmobile-footer">
                  <button type="submit"
                    class="modalmobile-default-button"
                    @click="$emit('close')"
                  >전송</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Transition>
  </template>
  
  <style>
    @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  .modalmobile-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  
  .modalmobile-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .modalmobile-container {
    width: 300px;
    height: 331px;
    margin: 0 40px 31px 41px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    background-color: rgb(255, 255, 255);
    }
  
  .modalmobile-header {
    width: 405px;
    height: 15px;
    margin: 0 40px 31px 41px;
    font-family: 'GmarketSansLight';
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
  
  
  .modalmobile-body {
    width: 105px;
    height: 13px;
    margin: 0 186px 1px 0;
    font-family: 'GmarketSansLight';
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #8f8f8f;

    width: 486px;
    height: 42px;
    margin: 31px 40px 41px 0;
    padding: 15px 47px 0 13px;
    border-radius: 20.6px;
    border: solid 0.4px #000;
    background-color: #fff;
  }
  
  .modalmobile-default-button {
    width: 91px;
    height: 39px;
    margin: 41px 7px 1px 198px;
    border-radius: 10px;
    background-color: #ddddf7;
  }
  
  .modalmobile-footer {
    width: 26px;
    height: 13px;
    font-family: GmarketSansTTF;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
  
  .modalmobile-enter-from {
    opacity: 0;
  }
  
  .modalmobile-leave-to {
    opacity: 0;
  }
  
  .modalmobile-enter-from .modalmobile-container,
  .modalmobile-leave-to .modalmobile-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  </style>