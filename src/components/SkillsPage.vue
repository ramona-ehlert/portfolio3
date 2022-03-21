<template>
  <section id="skills-page">
    <h2 class="mySkills colors" @click="colors">My Coding Skills</h2>
    <div class="skill-section">
      <!-- <div class="line"></div> -->
      <!-- <div class="skills-message"></div> -->
      <div class="skill" v-for="object in storeSkills" :key="object.id">
        <!-- <div class="skillType"> -->
        <!-- <div class="grid"> -->
        <p @click="colors">{{ object.name }}</p>
        <!-- </div> -->
        <!-- </div> -->
      </div>
      <div @click="clearColor">clear all</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "skills-page",
  computed: {
    storeSkills() {
      return this.$store.state.skills;
    },
  },
  methods: {
    clearColor() {
      let color = document.querySelectorAll(".colors");
      console.log(color);
      const indexLength = color.length;
      for (let i = 0; i < indexLength; i++) {
        console.log(color[i]);
        if (
          color[i].classList.value.includes("colors") === true &&
          color[i].classList.value.includes("mySkills") === false
        ) {
          color[i].classList.remove("colors");
        }
      }
    },
    colors(e) {
      //  e.currentTarget
      if (e.currentTarget.classList.value.includes("colors") === true) {
        e.currentTarget.classList.remove("colors");
      } else {
        e.currentTarget.classList.add("colors");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
p,
h2 {
  color: #fff;
}
h2 {
  font-size: 30px;
  // text-align: left;
  animation-duration: 12s;
  margin-left: 0;
  margin-top: 30px;
  align-self: end;
  cursor: pointer;
}
p {
  text-align: center;
  margin-top: 10px;
}
.skill-section {
  width: 80%;
  border-radius: 50%;
  display: inline-block;
  margin: 0px 0 80px;
  align-self: start;
  // padding-top: 60px;
}
.skill {
  display: inline-block;
  // place-items: center;
  padding: 20px 20px;
  transition: 0.4s all ease;
  p {
    transition: 0.4s all ease;
    font-size: 18px;
    cursor: pointer;
    animation-duration: 4s;
  }
  @media screen and (min-width: 800px) {
    font-size: 18px;
    margin: 15px;

    &:hover {
      p {
        animation-name: example;
        animation-duration: infinite;
      }
    }
  }
  @media screen and (min-width: 1000px) {
    font-size: 22px;
  }
}
.colors {
  animation-name: example;
  animation-iteration-count: infinite;
}
@media screen and (min-width: 800px) {
  #skills {
    margin: 30px;
    width: 60%;
  }
}
</style>