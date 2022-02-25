<template>
  <div>
    PROJECTS
    <router-link to="/">Welcome</router-link>
    <router-link to="/about"
      >Project
      <div class="project-card"></div>
    </router-link>
    <div v-for="object in storeProjects" :key="object.id" id="project-cards" >
        <div class="project-card">
            <h3>{{ object.name }}</h3>
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
    width: 350px;
height: 150px;
background: purple;
h3 {
    color: #fff;
}
}
</style>