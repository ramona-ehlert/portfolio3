<template>
  <div id="app">
   
    <div id="nav">
     <header-bar></header-bar>
      
    </div>
    <router-view/>
   
    
  </div>
</template>
<script>
import HeaderBar from "./components/HeaderBar.vue";
// import SkillsPage from './components/SkillsPage.vue';



export default {
  components: { HeaderBar },
  setup() {
    
  },
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
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Roboto Slab', serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
p, h4 {
 color: #1A1A40;
 font-weight: 500;
}
.light-purple {
  color: #9043C1;
}
// .light-purple-b {
//   background-color: #7A0BC0;
// }
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    // color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
