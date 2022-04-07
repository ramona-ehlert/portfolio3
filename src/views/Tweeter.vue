<template>
  <div class="tweeter" style="display:grid;place-content:center;">
      Tweeter
    <project-page :project="storeProject"></project-page>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
     <div class="line-box">
      <p class="proj-title">Other Projects</p> 
      <div class="line"></div>
    </div>
    <project-section></project-section>
  </div>
</template>

<script>


import ProjectPage from '../components/ProjectPage.vue';
import ProjectSection from '../components/ProjectSection.vue';
export default {
  name: 'Tweeter',

 components: {

    ProjectSection,
    ProjectPage 
  },
  computed: {
     storeProject() {
      return this.$store.state.projects[3];
    },
  },
}
</script>
