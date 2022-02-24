<template>
  <div id="mobileNav">
      <section id="fafaBars" @click="openMenu()" v-if="isMenuOpen === false">
        <div></div>
        <div></div>
        <div></div>
      </section>
     <header> <section id="mobileMenu">
        <section id="xBars" @click="closeMenu()">
          <div id="barOne"></div>
          <div id="barTwo"></div>
        </section>
        <nav>
          

            <a href="#">Welcome</a>
     
            <a href="#projects-page">Projects</a>

            <a href="#skills-page">My Skills</a>
      
            <a href="#contact-page">Contact</a>
          
          <div class="logoImg">
            
          </div>
          
        </nav>
      </section></header>
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
}
</script>

<style lang="scss">
header {
    background: #7A0BC0;
    position: fixed;
    right: 0px;
    top: 0px;
    display: grid;
    height: 50px;
    z-index: 5;
    width: 100%;
  }
@media screen and (min-width: 700px) {
  header {
    background: #7A0BC0;
    position: fixed;
    right: 0px;
    top: 0px;
    display: grid;
    height: 80px;
    z-index: 5;
    width: 100%;
  }
  nav {
    position: fixed;
    right: 0px;
    top: 0px;
    height: 80px;
    display: grid;
    padding: 10px;
    place-items: center;
    grid-template-columns: 150px 150px 150px 150px 80px;  
    div {
      right: 0px;
    }
  }
  
    a {
      text-decoration: none;
      color: #ffffff;
      text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
      font-weight: 500;
    }
}
  
</style>