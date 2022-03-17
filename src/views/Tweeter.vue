<template>
  <div class="tweeter">
      Tweeter
    <project-page :project="storeProject"></project-page>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
     Other Projects
    <project-section></project-section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import ProjectSection from '../components/ProjectSection.vue'
// import SkillsPage from '../components/SkillsPage.vue'
// import WelcomeMessage from '../components/WelcomeMessage.vue'

import ProjectPage from '../components/ProjectPage.vue';
import ProjectSection from '../components/ProjectSection.vue';
export default {
  name: 'Tweeter',
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
      return this.$store.state.projects[4];
    },
  },
}
</script>
