<template>
  <div class="brickbtm" style="display:grid;place-content:center;">

      <project-page></project-page>
    <project-page :project="storeProject"></project-page>
    <div class="line-box">
      <p class="proj-title">Other Projects</p> 
      <div class="line"></div>
    </div>
     
    <project-section id="project-section"></project-section>
  </div>
</template>

<script>

import ProjectPage from '../components/ProjectPage.vue';
import ProjectSection from '../components/ProjectSection.vue';
export default {
  name: 'Brickbtm',
//   components: {
//     ProjectSection,
//     SkillsPage ,
//     WelcomeMessage
//   }
 components: {
//     ProjectSection,
//     SkillsPage ,
    ProjectSection,
    ProjectPage 
  },
  computed: {
     storeProject() {
      return this.$store.state.projects[0];
    },
  },
}
</script>
