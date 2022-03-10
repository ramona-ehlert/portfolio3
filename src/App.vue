<template>
  <div id="app">
    <div id="nav">
      <header-container></header-container>
    </div>
    <router-view></router-view>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import HeaderContainer from "./components/HeaderContainer.vue";
// import SkillsPage from './components/SkillsPage.vue';

export default {
  components: { HeaderContainer },
  setup() {},
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    openMenu() {
      document.getElementById("mobileMenu").style.top = "0px";
      this.isMenuOpen = true;
    },
    faFaBars() {
      this.isMenuOpen = false;
    },
    closeMenu() {
      document.getElementById("mobileMenu").style.top = "-300px";
      setTimeout(this.faFaBars, 400);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
}
#app {
  background-color: #1a1a40;
  font-family: "Roboto Slab", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  padding: 0 20px;
  @media screen and (min-width: 500px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 800px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media screen and (min-width: 1100px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media screen and (min-width: 1400px) {
    padding-left: 200px;
    padding-right: 200px;
  }
}
.home {
  display: grid;
  place-content: center;
  .home-grid {
    max-width: 1300px;
  }
}
.projects-container {
  min-height: 100vh;
  display: grid;
  align-content: center;
}
p,
h4 {
  color: #fff;
  font-weight: 500;
}
.light-purple {
  color: #9043c1;
}
.lpurple-back {
  background-color: #7a0bc0;
}
// .light-purple-b {
//
// }

</style>
