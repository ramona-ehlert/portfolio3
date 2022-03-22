<template>
  <div id="footer">
    <div class="contact">
      <div class="line-box">
        <p class="title">Contact Me<br></p>
        <div class="line"></div>
      </div>
      
      <p href="mailto:ramonaoviatt@gmail.com">
        ramonaoviatt@gmail.com<i
          ><svg
            width="512"
            height="512"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M384 96V0H272C245.49 0 224 21.49 224 48V336C224 362.51 245.49 384 272 384H464C490.51 384 512 362.51 512 336V128H416.9C398.4 128 384 113.6 384 96ZM416 0V96H512L416 0ZM192 352V128H48C21.49 128 0 149.49 0 176V464C0 490.51 21.49 512 48 512H240C266.51 512 288 490.51 288 464V416H256C220.7 416 192 387.3 192 352Z"
              fill="white"
            />
          </svg>
        </i>
      </p>

      <social-grid></social-grid>
      <div class="vue"><p >This website was created with Vue</p></div>
    </div>
    
  </div>
</template>

<script>
import SocialGrid from "./SocialGrid.vue";
export default {
  components: { SocialGrid },
  // MAKE FUNCTIONALITY AND A TOOL TIP FOR THE EMAIL COPY BUTTON
};
</script>

<style lang="scss" scoped>
#footer {
  height: 240px;
  background: #9043c1;
  width: 100%;
  position: absolute;
  left: 0;
  display: grid;
  justify-content: left;
}
.line-box {
  display: grid;
width: fit-content;
}
.line {
  height: 2px;
  width: 100%;
  margin-left: 24px;
  background: #fff;
//  padding-top: 10px;
}
.contact {
  padding-top: 50px;
  display: grid;
  margin-right: 40px;
  margin-bottom: 24px;
  .title {
    font-size: 24px;
    margin-bottom: 20px;
    span {
      height: 2px;
      width: 100px;
      background: #fff;
    }
  }
  p {
    font-size: 18px;
    text-align: left;
    height: 0px;
    margin-left: 24px;
  }
  i {
    margin-left: 10px;

    svg {
      margin-bottom: -10px;
      height: 30px;
      width: 30px;
    }
  }
  a {
    height: 0px;
    text-align: right;
    color: #fff;
    margin-top: 10px;
  }
}

.vue {
  p {
      font-size: 16px;
  }
}
</style>