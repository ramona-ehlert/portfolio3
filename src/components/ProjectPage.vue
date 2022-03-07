<template>
  <div id="projects">
      <div class="projectsBackground"></div>
    <div class="project-title">
      <h2>{{ project.name }}</h2>
    </div>

    <div class="main-mask lpurple-back"></div>
    <img class="project-image" :src="project.image" />
    <div class="tech-stack">
        <h2>Tech Stack</h2>
      <div class="line"></div>
      <div class="tech-skills">
        <div v-for="object in project.stack" :key="object">
          <h4>{{ object }}</h4>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style lang="scss" scoped>
#projects {
  padding-top: 450px;
}
.projectsBackground {
height: 100vh;
width: 100vw;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #1A1A40;
}
.project-title {
  background-color: #f36f72;
  height: 60px;
  color: #fff;
  position: absolute;
  top: 120px;
  left: 0px;
  display: grid;
  place-content: center;
  z-index: 3;
  font-size: 14px;
  font-weight: 900;
  padding: 0 20px;
  border-radius: 15px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.project-image {
  position: absolute;
  width: 100vw;
  height: 50vh;
  top: 0px;
  left: 0px;
  object-fit: cover;
  filter: blur(1.5px);
}
.main-mask {
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 45%;
  height: 50vh;
  z-index: 2;
}
.tech-stack {
  position: absolute;
  // margin-top: -200px;
  top: calc(20vh - 100px);
  right: 100px;
  width: 300px;
  height: 300px;
  z-index: 4;
  background-color: #1A1A40;
  color:#fff;
  h2 {
    text-align: left;  
  }
  .line {
      height: 5px;
      width: 100px;
      background-color: #f36f72;
  }
  h4 {
    color: #DEA9FF;
  }
  
}
.tech-skills {
  display: grid;
  place-content: center;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>