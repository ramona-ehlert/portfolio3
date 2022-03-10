<template>
  <div id="mobileNav">
    <nav id="open-menu" @click="openMenu()" v-if="isMenuOpen === false">
      <h3>Menu</h3>
    </nav>

    <header>
      <section id="navBox">
        <section id="xBars" @click="closeMenu()">
          <div id="barOne"></div>
          <div id="barTwo"></div>
        </section>
        <nav>
          <div class="nav-tab">
            <a href="/#">Welcome</a>
          </div>
          <div class="nav-tab">
            <a href="/#projects-page">Projects</a>
            <div v-for="item in storeProjects" :key="item.id">
              <a :href="'/' + item.page" class="small-link"></a>
              {{ item.name }}
            </div>
            <br> 
            
          </div>
          <div class="nav-tab">
            <a href="/#skills-page">My Skills</a>
          </div>
          <div class="nav-tab">
            <a href="/#contact-page">Contact</a>
          </div>

          <div class="logoImg"></div>
        </nav>
      </section>
    </header>
  </div>
</template>

<script>
export default {
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
  computed: {
    storeProjects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style lang="scss">
#open-menu {
  position: absolute;
  top: 30px;
  right: 30px;
}

header {
  background: rgb(122, 11, 192, 0.95);
  position: fixed;
  top: 0px;
  left: 0;
  display: grid;
  height: 100vh;
  z-index: 5;
  width: 80%;

  nav {
    display: grid;
    margin-left: 15px;
    text-align: left;
    a {
      
      color: #fff;
      text-decoration: none;
      font-weight: 800;
      font-size: 24px;
      text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
    }
    .small-link {
      font-size: 16px;
    }
  }
  .nav-tab {
    margin-top: 50px;
  }
}
// @media screen and (min-width: 700px) {
//   header {
//     background: rgb(122, 11, 192, .70);
//     position: fixed;
//     right: 0px;
//     top: 0px;
//     display: grid;
//     height: 80px;
//     z-index: 5;
//     width: 100%;
//   }
//   nav {
//     position: fixed;
//     right: 0px;
//     top: 0px;
//     height: 80px;
//     display: grid;
//     padding: 10px;
//     place-items: center;
//     grid-template-columns: 150px 150px 150px 150px 80px;
//     div {
//       right: 0px;
//     }
//   }

//     a {
//       text-decoration: none;
//       color: #ffffff;
//       text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
//       font-weight: 500;
//     }
// }
</style>