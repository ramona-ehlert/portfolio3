<template>
  <div id="footer">
    <div class="contact">
      <div class="line-box">
        <p class="title">Contact Me<br /></p>
        <div class="line"></div>
      </div>

      <p>
        ramonaoviatt@gmail.com<i @click="copyEmail"
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
        <span id="toolTip" class="tool-tip"> Email copied to clipboard </span>
      </p>

      <social-grid></social-grid>
      <div class="vue"><p>This website was created with Vue</p></div>
    </div>
  </div>
</template>

<script>
import SocialGrid from "./SocialGrid.vue";
export default {
  components: { SocialGrid },
  methods: {
    copyEmail() {
      navigator.clipboard.writeText("ramonaoviatt@gmail.com");
      document.getElementById("toolTip").classList.add("copied");
      setTimeout(function () {
        document.getElementById("toolTip").style.opacity = "1";
      }, 100);
      setTimeout(function () {
          document.getElementById("toolTip").style.opacity = "0";
        }, 2000);
      setTimeout(function () {
        document.getElementById("toolTip").classList.remove("copied");
        
      }, 2400);
    },
  },
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

.line-box {
  display: grid;
  width: fit-content;
  margin-bottom: 0;
  .line {
  height: 2px;
  width: 100%;
  margin-left: 24px;
  
  background: #fff;
}
}
}
.contact {
  padding-top: 50px;
  display: grid;
  margin-right: 40px;
  margin-bottom: 24px;
  .title {
    font-size: 24px;
    margin-bottom: 10px;
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
    cursor: pointer;

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

.tool-tip {
  opacity: 0;
  transition: 0.4s all ease-in-out;
  font-size: 14px;
  display: none;
  background: #e0caee;
  padding: 6px;
  border: solid 2px #fff;
  color: #9043c1;
  width: 140px;
  text-align: center;
  position: absolute;
  left: 184px;
  margin-top: 12px;
  border-radius: 8px;
}
.copied {
  display: grid;
}

.vue {
  p {
    font-size: 16px;
  }
}
</style>