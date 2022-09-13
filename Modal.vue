<script>
  export default {
    props: {
      show: Boolean
    }
  }
  </script>
  
  <template>
    <Transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                하단에 이메일을 입력하시면, 입력하신 이메일로 사진을 보내드려요!
              </slot>
            </div>
            <input class="message" placeholder="test@test.com" />
            <Form>
              <div class="modal-footer">
                  <button type="submit"
                    class="modal-default-button"
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

  .modal-mask {
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
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .modal-container {
    width: flex;
    height: fit-content;
    margin: 3em 25% 3em 25%;
    padding: 3em 2em 3em 2em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    background-color: rgb(255, 255, 255);
  }
  
  .modal-header {
    width: 100%;
    height: 15%;
    margin: center;
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
  
  
  .modal-body {
    width: 486px;
    height: 42px;
    margin: 31px 40px 41px 0;
    padding: 15px 40px 0 13px;
    border-radius: 20.6px;
    border: solid 0.4px #000;
    background-color: #fff;
  }
  
  .message {
    width: 100%;
    height: 42px;
    margin: 5px 40px 21px 0;
    padding: 1px 47px 0 13px;
    border-radius: 20.6px;
    border: solid 0.4px #000;
    background-color: #fff;
  }

  .modal-default-button {
    width: 91px;
    height: 39px;
    margin: 14px 100%;
    border-radius: 10px;
    background-color: #ddddf7;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-footer {
    width: 26px;
    height: 20px;
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
  
  .modal-enter-from {
    opacity: 0;
  }
  
  .modal-leave-to {
    opacity: 0;
  }
  
  .modal-enter-from .modal-container,
  .modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  </style>