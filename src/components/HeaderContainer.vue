<template>
  <div id="mobileNav">
    <nav id="open-menu" @click="openMenu()">
      <h3>Menu</h3>
    </nav>

    <header id="navBox">
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
              <a :href="item.page" class="small-link">
              {{ item.name }}</a>
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
      console.log("hello")
      document.getElementById("navBox").style.left = "0px";
      this.isMenuOpen = true;
    },
    faFaBars() {
      this.isMenuOpen = false;
    },
    closeMenu() {
      document.getElementById("navBox").style.left = "-100vw";
     
  
     
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
  background: #9043c1;
  width: 90px;
  height: 30px;
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 10;
  display: grid;
  border-radius: 8px;
  box-shadow: #ffffff55 0px 0px 10px;
  // place-content: center;
  
    h3 {
      margin-top: 2px;
    text-shadow: #00000044 0px 0px 10px;
    }
  
}

header {
  background: rgb(122, 11, 192, 0.95);
  position: fixed;
  top: 0px;
  left: 0px;
  display: grid;
  height: 100vh;
  z-index: 5;
  width: 80%;
  transition: .8s ease-in all;
// #navBox {
  // position: absolute;
  left: -100vw;
// }
  nav {
    display: grid;
    position: absolute;
    left: 10%;
margin-top: 50px;
    text-align: left;
    // @media screen and (min-width:550px) {
    //     left: 50px;
    // }
    // @media screen and (min-width:800px) {
    //     left: 80px;
    // }
    @media screen and (min-width:1000px) {
        left: 15%;
    }
    a {
      
      color: #fff;
      text-decoration: none;
      font-weight: 800;
      font-size: 24px;
      text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
    }
    
  }
  .nav-tab {
    margin-top: 30px;
   
  }
}
.small-link {
      font-size: 16px;
      // position: absolute;
      // top: 0;
    }
#xBars {
  background: red;
position: absolute;
right: 30px;
top: 20px;
height: 40px;
width: 40px;
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