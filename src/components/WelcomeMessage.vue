<template>
  <div id="welcome-message">
    <h1 class="hidden">Hi, I'm Ramona, <br />a full stack web developer</h1>

    <div class="welcome-grid">
      <!-- <h4>
        I’m a dev with a special interest in front end design and development. I
        am currently working as The Brick corporate office out of Edmonton AB,
        where I have been maintaing and improving the eccommerce website, with a
        focus on bringing the mobile experience into the modern age.
      </h4> -->
      <!--   I’m a dev with an affinity for front end design and development. I
        currently reside in Edmonton Alberta, where I spend my days maintaining and
        improving The Brick's ecommerce website, a custom Shopify store which
        hosts hundreds of thousands of daily visitors. Here I am focused on
        streamlining and modernizing the mobile shopping experience.<br />
        <router-link to="/about" -->
      <p class="welcome-text">
        I’m a dev with an affinity for front end design and development. I
        currently reside in Edmonton Alberta, where I spend my days maintaining
        and improving The Brick's ecommerce website.<br />
        <router-link to="/about"
          ><span class="toAbout">More about me >></span></router-link
        >
      </p>

      <img
        src="../assets/fullstack.svg"
        alt="An icon with a simplistic desktop monitor, website and mobile phone"
      />
    </div>
    <div class="mywork">
      <!-- <h2 >My Work</h2> -->
      <div class="down bottom-down" @click="goDown()">
        <div class="svg">
          <svg
            width="144"
            height="80"
            viewBox="0 0 144 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="7.77832"
              y="0.0979004"
              width="101"
              height="11"
              rx="3"
              transform="rotate(45 7.77832 0.0979004)"
              fill="#F1A168"
            />
            <rect
              x="63.9019"
              y="71.4177"
              width="101"
              height="11"
              rx="3"
              transform="rotate(-45 63.9019 71.4177)"
              fill="#F1A168"
            />
          </svg>
        </div>
        <div class="svg">
          <svg
            width="144"
            height="80"
            viewBox="0 0 144 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="7.77832"
              y="0.0979004"
              width="101"
              height="11"
              rx="3"
              transform="rotate(45 7.77832 0.0979004)"
              fill="#F1A168"
            />
            <rect
              x="63.9019"
              y="71.4177"
              width="101"
              height="11"
              rx="3"
              transform="rotate(-45 63.9019 71.4177)"
              fill="#F1A168"
            />
          </svg>
        </div>
        <!-- <img src="../assets/downO.svg"  alt="down arrow">
        <img src="../assets/downS.svg"  alt="down arrow"> -->
      </div>
    </div>
    <div class="blobby blobMove">
      <div class="colorBlob"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById("navBox").style.left = "-100vw";
    document.getElementById("nav-mask").style.opacity = 0;
    setTimeout(function () {
      document.getElementById("nav-mask").style.display = "none";
    }, 400);
    window.addEventListener("scroll", this.hideBounce);
    setTimeout(function () {
      let divs = document.querySelectorAll("div");
      for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add("showDivs");
      }
    }, 400);
  },
  methods: {
    hideBounce() {
      if (document.querySelector(".bottom-down")) {
        document.querySelector(".bottom-down").style =
          "opacity:0;animationDuration:0s;";
      }
    },
    goDown() {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      this.hideBounce();
    },
  },
};
</script>

<style lang="scss" scoped>
#welcome-message {
  min-height: 100vh;
  display: grid;
  place-content: center;
  margin: 0px 5%;
  // padding-top: 20px;
  // padding-bottom: 20px;
  @media screen and (min-width: 500px) {
    // padding-top: 50px;
    // padding-bottom: 50px;
  }
  @media screen and (min-width: 500px) {
    // padding-top: 120px;
    // padding-bottom: 90px;
  }
}
div {
  // add transitions to the divs on the page that you want to fade in slow
  // transition: 1s all ease-in-out;
  opacity: 0;
}
.showDivs {
  opacity: 1;
}
.down {
  display: grid;
  width: 100%;
  place-content: center;
}
.welcome-grid {
  img {
    width: 60%;
    // padding: 20px;
  }
  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: 5fr 3fr;
    img {
      width: 80%;
      padding-bottom: 50px;
      align-self: center;
      justify-self: right;
    }
  }
  @media screen and (min-width: 900px) {
    img {
      margin-top: -60px;
    }
  }
  @media screen and (min-width: 1000px) {
    img {
      margin-top: -120px;
    }
  }
  @media screen and (min-width: 1200px) {
    img {
      margin-top: -160px;
      width: 90%;
    }
  }
}

h1 {
  font-size: 26px;
  text-align: left;
  font-weight: 700;

  color: #ac5adf;
  text-shadow: 0px 4px 4px #000000;

  @media screen and (min-width: 450px) {
    font-size: 32px;
  }
  @media screen and (min-width: 700px) {
    font-size: 36px;
  }
  @media screen and (min-width: 950px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 46px;
  }
}

.welcome-text {
  text-align: left;
  font-size: 14px;
  line-height: 30px;
  padding-top: 12px;
  font-weight: 500;
  padding-bottom: 30px;
  padding-right: 10%;

  //   width: 90%;
  @media screen and (min-width: 400px) {
    font-size: 20px;
    // width: 70%;
  }
  @media screen and (min-width: 500px) {
    line-height: 40px;
  }
  // @media screen and (min-width: 900px) {
  //   font-size: 24px;
  //   line-height: 45px;
  // }
  @media screen and (min-width: 1400px) {
    font-size: 28px;
  }
}
.mywork {
  position: absolute;
  bottom: 30px;
  right: 0px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #fa58b6;
}
a {
  text-decoration: none;
}
.toAbout {
  animation-name: example;
  animation-duration: 24s;
  animation-iteration-count: infinite;
}

.blobby {
  height: 240px;
  width: 60%;
  top: 100vh;
  left: 20%;
  z-index: 0;
  margin: auto;
  // border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
  transform: rotate(180deg);
  transition: 0.6s all ease-in;

  position: absolute;
  animation-iteration-count: 1;
  @media screen and (min-width: 650px) {
    width: 40%;
    left: 30%;
  }
  @media screen and (min-width: 1000px) {
    height: 280px;
  }
  @media screen and (max-width: 600px) {
    top: 100vh;
  }
}
.blobMove {
  animation-name: morph;
  animation-duration: 24s;
  animation-iteration-count: infinite;
}

@keyframes morph {
  0%,
  100% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
  }
  34% {
    border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
  }
  67% {
    border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
  }
}
.colorBlob {
  animation-name: blobColor;
  animation-duration: 24s;
  animation-iteration-count: infinite;
  height: 100%;
  width: 100%;
  border-radius: inherit;
}

@keyframes blobColor {
  0% {
    background-color: #9043c1;
  }
  20% {
    background-color: #fa58b6;
  }
  40% {
    background-color: #f36f72;
  }
  60% {
    background-color: #eb862e;
  }
  70% {
    background-color: #fa58b6;
  }
  100% {
    background-color: #9043c1;
  }
}
.bottom-down {
  display: none;
}
@media screen and (min-width: 500px) {
  .bottom-down {
    display: block;
    transition: 0.5s;
    animation-name: updown;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    margin-top: 12px;
    .svg {
      svg {
        height: 20px;
        rect {
          animation-name: example;
          animation-duration: 12s;
          animation-iteration-count: infinite;
        }
      }
    }
  }
}

@keyframes updown {
  0% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-5px);
  }
}
@keyframes morph {
  0%,
  100% {
    border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
  }
  34% {
    border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
  }
}
</style>