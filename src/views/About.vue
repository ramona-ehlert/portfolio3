<template>
  <div class="about">
    <about-top @aboutView="getViewChild"></about-top>

    <!-- {{this.getViewChild()}} -->
    <div id="about-code" class="aboutDiv active fadeIn">
      <about-code></about-code>
    </div>
    <div id="about-pets" class="aboutDiv">
      <about-pets></about-pets>
    </div>
    <div id="about-leaf" class="aboutDiv">
      <about-leaf></about-leaf>
    </div>
  </div>
</template>

<script>
import AboutCode from "../components/AboutCode.vue";
import AboutLeaf from "../components/AboutLeaf.vue";
import AboutPets from "../components/AboutPets.vue";
import AboutTop from "../components/AboutTop.vue";

export default {
  name: "About",
  methods: {
    getViewChild(value) {
      if (document.querySelector(".active")) {
        let prev = document.querySelector(".active");

        prev.classList.remove("fadeIn");
        prev.classList.remove("active");
      }
      let el = document.getElementById("about-" + value);
      // el.style.display = "block";
      el.classList.add("active");
      setTimeout(function () {
        el.classList.add("fadeIn");
      }, 100);
    },
  },
  components: {
    AboutTop,
    AboutCode,
    AboutPets,
    AboutLeaf,
  },
};
</script>

