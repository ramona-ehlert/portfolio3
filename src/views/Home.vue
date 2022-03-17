<template>
  <div class="home">
    <div class="home-grid">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <welcome-message></welcome-message>
      <div class="projects-container" id="project-section">
        <project-section></project-section>
      </div>
      <img
        class="orange"
        src="../assets/orange-box.svg"
        alt=""
        style="
          position: absolute;
          left: 10vw;
          width: 80vw;
          margin-top: 200px;
          z-index: 0;
        "
      />
      <div style="position: relative; z-index: 3">
        <skills-page></skills-page>
      </div>
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

   