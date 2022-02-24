<template>
  <div id="app">
    <div id="nav">
    <header-bar></header-bar>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <skills-page></skills-page>
  </div>
</template>
<script>
import HeaderBar from "./components/HeaderBar.vue";
import SkillsPage from './components/SkillsPage.vue';



export default {
  components: { HeaderBar, SkillsPage },
  setup() {
    
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
