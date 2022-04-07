<template>
  <div id="app">
    <div id="nav">
      <header-container></header-container>
    </div>
    <router-view></router-view>
    <page-footer></page-footer>
  </div>
</template>
<script>
import HeaderContainer from "./components/HeaderContainer.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  components: { HeaderContainer, PageFooter },
  setup() {},
 
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
}
#app {
  background-color: #1a1a40;
  font-family: "Rubik", sans-serif;
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
h4 {
  font-weight: 500;
}
p {
  color: #fff;
  font-weight: 400;
  line-height: 1.36rem;
}
.light-purple {
  color: #9043c1;
}
.lpurple-back {
  background-color: #7a0bc0;
}
.about {
  margin: auto;
  min-height: 100vh;
  max-width: 1000px;
}
.aboutDiv {
  display: none;
  opacity: 0;
  transition: 0.6s all ease-in-out;
}
.fadeIn {
  opacity: 1;
}
.active {
  display: block;
}
.content-grid {
  display: grid;
  place-content: center;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 800px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
}

.line-box {
  width: fit-content;
  margin-bottom: 20px;
  .line {
    max-width: 80vw;
    height: 2px;
    width: 120%;
    background-image: linear-gradient(to right, #EB862E, #FA58B6);
    margin: auto;
  }
  h2 {
    width: fit-content;
  }
  .proj-title {
  margin-top: 50px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1em;
}
}
@keyframes example {
  0% {
    color: #9043c1;
    fill: #9043c1;
  }
  20% {
    color: #fa58b6;
    fill: #fa58b6;
  }
  40% {
    color: #f36f72;
    fill: #f36f72;
  }
  60% {
    color: #eb862e;
    fill: #eb862e;
  }
  70% {
    color: #fa58b6;
    fill: #fa58b6;
  }
  100% {
    color: #9043c1;
    fill: #9043c1;
  }
}
</style>
