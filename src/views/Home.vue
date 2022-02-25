<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <welcome-message></welcome-message>
    <project-section></project-section>
    <skills-page></skills-page>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProjectSection from '../components/ProjectSection.vue'
import SkillsPage from '../components/SkillsPage.vue'
import WelcomeMessage from '../components/WelcomeMessage.vue'

export default {
  name: 'Home',
  components: {
    ProjectSection,
    SkillsPage ,
    WelcomeMessage
  }
}
</script>

   