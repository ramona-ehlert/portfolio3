<template>
  <div id="projects">
    <div class="projectsBackground"></div>
    <div class="project-title">
      <h2>{{ project.name }}</h2>
    </div>

    <div class="main-mask lpurple-back"></div>
    <img class="project-image" :src="project.image" />
    <div class="text-grid">
      <div class="tech-stack">
        <div class="layer1"></div>
        <div class="layer2"></div>
        <div class="layer3">
          <div class="padding">
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
      </div>

      <!-- <div class="long"></div> -->
      <div class="the-ask text-box">
        <h2>The Ask</h2>
        <div class="line"></div>
        <div v-html="project.ask"></div>
      </div>
      <div class="wireframe">
        <img :src="project.wireframe" :alt="project.wireAlt" />
        <div class="wire-label">
          <div class="layer1"></div>
          <div class="layer2"></div>
          <div class="layer3">
            <div class="padding">
              <h4>{{ project.wireLabel }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="case">
        <img :src="project.case" :alt="project.wireframe" />
      </div>
      <div class="the-work text-box">
        <h2>Get to work</h2>
        <div class="line"></div>
        <div v-html="project.work"></div>
      </div>

      <div class="the-sol text-box">
        <h2>It's all coming together</h2>
        <div class="line"></div>
        <div v-html="project.ask"></div>
      </div>

      <div class="results">
        <div class="layer1"></div>
        <div class="layer2"></div>
        <div class="layer3">
          <div class="padding">
            <h2>Results</h2>
            <div class="line"></div>
            <div v-html="project.results"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="project.fullImg" class="fullImgContainer">
      <div class="fullMask"></div>
      <img :src="project.fullImg" alt="" class="fullImg" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    project: Object,
  },
  
  computed: {
    name() {
      return this.data 
    }
  },
  methods: {
    openFullImg() {
       
      document.querySelector(".fullImgContainer").style.display = "block";
      setTimeout(function () {
        document.querySelector(".fullImgContainer").style.opacity = 1;
      }, 100);

    },
    closeFullImg(){
      document.querySelector(".fullImgContainer").style.opacity = 0;
      setTimeout(function () {
        document.querySelector(".fullImgContainer").style.opacity = 1;
      }, 400);
    }
  },
};
</script>

<style lang="scss" scoped>
.long {
  height: 300px;
}
body #projects {
  padding-top: calc(50vh + 50px);
}
// .projectsBackground {
//   height: 50vh;
// }
.padding {
  padding: 30px;
  padding-bottom: 0px;
}

.project-title {
  background-color: #f36f72;
  height: 60px;
  color: #fff;
  position: absolute;
  top: 120px;
  left: 0px;
  display: grid;
  align-content: center;
  text-align: right;
  z-index: 3;
  font-size: 14px;
  font-weight: 900;
  padding: 0 20px;
  border-radius: 15px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  max-width: 80vw;
  @media screen and (min-width: 800px) {
    padding: 0px 30px 0px 40px;
  }
}
.fullImgContainer {

  position: fixed;
  background: #00000044;
  top: 0;
  left: 0;
  z-index: 8;
  width: 100vw;
  height: 100vh;
  img {
    padding: 50px;
    width: 80%;
  }
}
.openFull {
  position: fixed;
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

.layer2 {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #f7999b;
  border-radius: 16px;
}
.layer3 {
  // padding: 30px;
  // margin-top: -10px;
  // position: inherit;
  top: 20px;
  left: 20px;
  z-index: -1;
  height: 100%;
  width: 100%;
  background-color: #9043c1;
  border-radius: 16px;
}

.layer1 {
  box-shadow: #00000044 0px 4px 10px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: -1;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  // padding-bottom: 40px;
  // height: 100%;
  // top: 40px;
  // background: #fff;
  // position: inherit;
  // width: 100%;
  // margin-right: -20px;
}

.tech-stack {
  top: calc(50vh + 50px);
  right: 0px;
  left: 0px;
  position: absolute;
  border-radius: 18px;
  max-width: 80%;
  margin: auto;
  z-index: 4;

  // @media screen and (max-width: 300px) {
  //   padding: 20px;
  // }

  @media screen and (min-width: 550px) {
    top: calc(50vh - 140px);
    right: 60px;
    left: auto;
  }
  @media screen and (min-width: 900px) {
    top: calc(50vh - 100px);
    max-width: 380px;
  }
  @media screen and (min-width: 1100px) {
    right: 80px;
    top: calc(50vh - 150px);
  }
  @media screen and (min-width: 1300px) {
    right: 120px;
  }
  text-align: left;

  // h2 {
  //   color: #fa58b6;
  // }
  .line {
    height: 2px;
    width: 170px;
    background-color: #f7999b;
    margin-bottom: 20px;
  }
  h4 {
    margin-right: 20px;
    // color: #dea9ff;
    font-size: 18px;
    // padding-right:15px;
  }
}
.text-grid {
  display: grid;
  place-content: center;
  text-align: left;
  grid-template-columns: 1fr;
  // margin-bottom: 120px;
  @media screen and (min-width: 850px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 100px;
  }
}
.the-ask {
  @media screen and (max-width: 850px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 550px) {
    margin-top: 280px;
  }

  // width: 50%;
}
.text-box {
  .line {
    height: 2px;
    width: 170px;
    background-color: #fa58b6;
    margin-bottom: 20px;
  }
}
//

.wireframe {
  position: relative;
  justify-self: center;
  display: grid;
  width: 100%;
  justify-content: center;
  @media screen and (min-width: 850px) {
    margin-left: 30%;
  }

  img {
    width: 80%;
    // height: 100%;
    align-self: center;
    margin-top: 50px;
    // max-width: 350px;
  }
  .layer2 {
    top: 5px;
    left: 5px;
  }
  .layer1 {
    top: 10px;
    left: 10px;
  }
  .padding {
    padding: 15px;
    padding-bottom: 15px;
  }
  .wire-label {
    position: relative;
    border-radius: 18px;
    height: fit-content;
    /* max-width: 200px; */
    /* margin: auto; */
    z-index: 4;
    bottom: 30px;
    left: -20px;
    width: fit-content;
  }
}
.case {
  display: grid;
  place-content: center;

  img {
    width: 80%;
    max-width: 400px;
    padding: 30px;
  }
}
.results {
  position: relative;
  border-radius: 18px;
  // right: 60px;
  justify-self: center;
  margin: auto;
  z-index: 4;
  text-align: left;
  max-width: 500px;
  .line {
    height: 2px;
    width: 120px;
    background-color: #f7999b;
    margin-bottom: 10px;
  }
  .padding {
    padding-bottom: 16px;
  }
  @media screen and (min-width: 850px) {
    // width: 40%;
    // margin-top: -320px;
    // left: calc(50vw + 20px);
    .padding {
      padding-bottom: 30px;
    }
  }
  @media screen and (min-width: 1100px) {
    // margin-top: -300px;

    right: auto;
  }
}
.tech-skills {
  display: grid;
  height: 100%;

  //   place-content: left;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>