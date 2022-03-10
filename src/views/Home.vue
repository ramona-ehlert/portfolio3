<template>
  <div class="home">
    <div class="home-grid">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <welcome-message></welcome-message>
      <div class="projects-container">
        <project-section></project-section>
      </div>

      <skills-page></skills-page>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProjectSection from "../components/ProjectSection.vue";
import SkillsPage from "../components/SkillsPage.vue";
import WelcomeMessage from "../components/WelcomeMessage.vue";

export default {
  name: "Home",
  components: {
    ProjectSection,
    SkillsPage,
    WelcomeMessage,
  },
};
</script>

   