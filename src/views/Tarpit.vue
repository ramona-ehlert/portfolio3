<template>
  <div class="tarpit">
      Tarpit
     
      <project-page :project="storeProject"></project-page>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
     Other Projects
    <project-section></project-section>
    <!-- <skills-page></skills-page> --> 
  </div>
</template>

<script>
import ProjectPage from '../components/ProjectPage.vue';
import ProjectSection from '../components/ProjectSection.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import ProjectSection from '../components/ProjectSection.vue'
// import SkillsPage from '../components/SkillsPage.vue'


export default {
  name: 'Tarpit',
  components: {
//     ProjectSection,
//     SkillsPage ,
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
