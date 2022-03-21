<template>
  <div class="home">
    <div class="home-grid">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <welcome-message></welcome-message>

      <div class="projects-container" id="project-section">
        <h2
          style="
          margin-top: 80px;
          font-size: 32px;
            font-weight: 400;
            color: #ffffff;
            position:relative;
            z-index:3;
          "
        >
          Projects
        </h2>
        <div style="width:140px;height: 2px; background: #ffffff; position:relative; margin:auto;"></div>
        <project-section></project-section>
      </div>
      <!-- <div style="position: relative; z-index: 3"> -->
        <!-- <skills-page></skills-page> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProjectSection from "../components/ProjectSection.vue";
// import SkillsPage from "../components/SkillsPage.vue";
import WelcomeMessage from "../components/WelcomeMessage.vue";

export default {
  name: "Home",
  components: {
    ProjectSection,
    // SkillsPage,
    WelcomeMessage,
  },
};
</script>

   