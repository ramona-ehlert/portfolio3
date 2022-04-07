<template>
  <div class="tarpit" style="display:grid;place-content:center;">
      Tarpit
     
      <project-page :project="storeProject"></project-page>
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
  name: 'Tarpit',
  components: {
    ProjectSection,
    ProjectPage 
  },
  computed: {
     storeProject() {
      return this.$store.state.projects[1];
    },
  },
}
</script>
