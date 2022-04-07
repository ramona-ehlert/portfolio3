<template>
  <div id="mobileNav">
    <nav id="open-menu" @click="openMenu()">
      <p>Menu</p>
    </nav>
    <div id="nav-mask" @click="closeMenu()"></div>
    <header id="navBox">
      <section id="xBars" @click="closeMenu()">
        <svg
          width="142"
          height="143"
          viewBox="0 0 142 143"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="32.4626"
            y="103.673"
            width="100"
            height="9"
            rx="4.5"
            transform="rotate(-45 32.4626 103.673)"
            fill="white"
          />
          <rect
            x="103.173"
            y="110.037"
            width="100"
            height="9"
            rx="4.5"
            transform="rotate(-135 103.173 110.037)"
            fill="white"
          />
        </svg>
      </section>
      <nav>
        <div class="nav-tab">
          <p @click="goToRouter('home')" to="/">Welcome</p>
        </div>
        <div class="nav-tab">
          <p @click="goToRouter('/#project-section')">Projects</p>
          <div v-for="item in storeProjects" :key="item.id">
            <div @click="goToRouter(item.page)" class="small-link">
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="nav-tab">
          <p @click="goToRouter('/about#skills-page')">
            Coding Skills
          </p>
        </div>
        <div class="nav-tab">
          <p @click="goToRouter('/about')">
           About
          </p>
        </div>

        <div class="logoImg"></div>
      </nav>
      <social-grid></social-grid>
    </header>
  </div>
</template>

<script>
import SocialGrid from "./SocialGrid.vue";
export default {
  components: { SocialGrid },

  methods: {
    goToRouter(route) {
      if (window.location.pathname !== route) {
        if (route === "home") {
          this.closeMenu();
          this.$router.push("/");
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
         
        } else if ( route.includes("skills") && window.location.href.includes("about") ) {
          if (sessionStorage.getItem("about") !== "code") {
            sessionStorage.setItem("about", "code");
            document.getElementById("code").classList.add("activate");
            if (document.querySelector(".active")) {
              let prev = document.querySelector(".active");
              prev.classList.remove("fadeIn");
              prev.classList.remove("active");
            }
            let el = document.getElementById("about-code");
            el.style.display = "block";
            el.classList.add("active");
            setTimeout(function () {
              el.classList.add("fadeIn");
            }, 100);
          }
          this.closeMenu();
          window.scrollTo({
            top: document.querySelector(".mySkills").getBoundingClientRect()
              .top,
            behavior: "smooth",
          });
        } else if (
          document.getElementById("welcome-message") &&
          route === "/#project-section"
        ) {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
          this.closeMenu();
        } else {
          
            this.$router.push(route);
        }
        
      }else{this.closeMenu();}
    },
    about() {
      if (window.location.href.includes("about") === true) {
        document.body.scrollTop = 0;
      }
    },
    goToSkills() {
      if (
        window.location.href.includes("about") === true &&
        sessionStorage.getItem("about") !== "code"
      ) {
        document.getElementById("code").click();
      }
    },
    openMenu() {
      document.getElementById("navBox").style.left = "0px";
      document.getElementById("nav-mask").style.display = "block";
      setTimeout(function () {
        document.getElementById("nav-mask").style.opacity = 1;
      }, 100);
    },
   
    closeMenu() {
      document.getElementById("navBox").style.left = "-100vw";
      document.getElementById("nav-mask").style.opacity = 0;
      setTimeout(function () {
        document.getElementById("nav-mask").style.display = "none";
      }, 400);
    },
  },
  computed: {
    storeProjects() {
      return this.$store.state.projects;
    },
    isAbout() {
      if (window.location.href.includes("about") === true) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
#open-menu {
  background: #9043c1;
  width: 90px;
  height: 30px;
  position: fixed;
  border-bottom-left-radius: 8px;
  top: 0px;
  right: 00px;
  z-index: 9;
  display: grid;
  place-content: center;
  box-shadow: -1px 1px 5px #00000044;
  cursor: pointer;
  transition: 0.2s all ease-in;
  &:active {
    box-shadow: inset #ffffff33 0px 0px 4px;
  }

  p {
    font-size: 19px;
    margin-top: -1px;
    font-weight: bold;
  }
  @media screen and (min-width: 1000px) {
    width: 108px;
    height: 36px;
    p {
      font-size: 24px;
    }
  }
}
#nav-mask {
  transition: ease-in 0.4s all;
  opacity: 0;
  display: none;
  top: 0;
  position: fixed;
  background: #000000aa;
  bottom: 0;
  height: 100%;
  width: 100%;
  right: 0;
  z-index: 10;
}

header {
  background: #9043c1fa;
  position: fixed;
  top: 0px;
  display: grid;
  height: 100vh;
  z-index: 11;
  width: 80%;
  transition: 0.6s ease-in-out all;
  left: -100vw;
  @media screen and (min-width: 700px) {
    width: 60%;
  }
  nav {
    display: grid;
    position: absolute;
    left: 10%;
    margin-top: 50px;
    text-align: left;
    p {
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      font-size: 24px;
      transition: 0.4s ease-in-out all;
      &:hover {
        text-shadow: 2px 2px 0px #eb862e;
      }
    }

    @media screen and (min-width: 1000px) {
      left: 15%;
      top: 5%;
      p {
        font-size: 32px;
      }
    }
  }
  .nav-tab {
    margin-top: 20px;
    div {
      margin: 10px 10px;
    }
  }
  .socials {
    display: grid;
    place-content: center;
    position: absolute;
    bottom: 0px;
    right: 30px;
    margin-bottom: 30px;
    img {
      height: 40px;
      margin-bottom: 24px;
    }
    @media screen and (min-width: 1000px) {
      right: 40px;
    }
  }
}

.small-link {
  font-size: 16px;
  margin: 40px 0;
  font-weight: 500;
  @media screen and (min-width: 1000px) {
    font-size: 24px;
  }
}
#xBars {
  position: absolute;
  right: 10px;
  top: 10px;
  height: 40px;
  width: 40px;
  @media screen and (min-width: 700px) {
    right: 20px;
  }
  svg {
    height: 40px;
    width: 40px;
  }
  &:active {
    box-shadow: inset #ffffff33 0px 0px 4px;
  }
}
</style>