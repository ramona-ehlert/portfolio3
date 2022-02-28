<template>
  <div>
    PROJECTS
    <router-link to="/">Welcome</router-link>
    <router-link to="/about">Project </router-link>
    <router-link to="/tarpit">Tarpit </router-link>
    <router-link to="/tarpit">Brickbtm </router-link>
    <router-link to="/tarpit">Tweeter </router-link>
    <router-link to="/pizza">Pizza </router-link>
    <div id="project-cards">
      
      <div
        class="project-card"
        v-for="object in storeProjects"
        :key="object.id"
        :style="
          'background: url(' +
          object.image +
          '); background-position: center; background-size: cover;'
        "
      ><router-link :to="object.page">
        <div class="project-mask"></div>
        <h3>{{ object.name }}</h3>
        <!-- <img :src="object.image" :alt="object.name"> -->
         </router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    storeProjects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style lang="scss" scoped>
#project-cards {
  display: grid;
  place-content: center;
  grid-template-columns: 1fr 1fr 1fr;

  div {
    display: grid;
    place-content: center;
  }
}
.project-card {
  a {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
  }
  // width: 350px;
  background-position: center;
  background-size: cover;
  height: 150px;
  position: relative;
  transition: 0.3s all ease-in;
  border-radius: 10px;
  margin: 10px;
  h3 {
    color: #fff;
    position: relative;
    padding: 30px;
    transition: 0.3s all ease-in;
  }
  .project-mask {
    background: rgb(39, 0, 130, 0.68);
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.3s all ease-in;
    border-radius: 10px;
  }
  &:hover {
    transition: 0.3s all ease-in;
    h3 {
      font-weight: 900;
      transition: 0.3s all ease-in;
    }
    .project-mask {
      background: rgb(122, 11, 192, 0.6);
      transition: 0.3s all ease-in;
    }
  }
}
</style>