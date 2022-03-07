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
  background-color: #1a1a40;
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
  max-width: 80vw;
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
  top: calc(50vh + 50px);
  right: 0px;
  left: 0px;
  width: 80%;
  margin: auto;
  z-index: 4;
  background-color: #1a1a40;
  padding: 30px;
  box-shadow: 0px 0px 32px #dea9ff;
  border-radius: 18px;
  max-width: 380px;
@media screen and (max-width: 300px) {
    padding: 20px;
  }
  @media screen and (min-width: 550px) {

    top: calc(50vh - 50px);
    right: 20px;
    left: auto;
  }
  @media screen and (min-width: 800px) {
    
    right: 60px;
    
  }
   @media screen and (min-width: 1100px) {
    
    right: 80px;
    
  }
  @media screen and (min-width: 1300px) {
    
    right: 120px;
    
  }
  text-align: left;
  
  h2 {
    color: #fa58b6;
    
  }
  .line {
    height: 2px;
    width: 170px;
    background-color: #fa58b6;
    margin-bottom: 20px;
  }
  h4 {
      margin-right: 20px;
    color: #dea9ff;
    font-size: 18px;
    // padding-right:15px;
  }
}
.tech-skills {
  display: grid;
//   place-content: left;
  grid-template-columns: 1fr  1fr 1fr;
  @media screen and (max-width: 300px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 550px) {

    grid-template-columns: 1fr  1fr 1fr 1fr;
  }
}
</style>