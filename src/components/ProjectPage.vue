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
            <div class="line-box">
              <h2>Tech Stack</h2>
              <div class="line"></div>
            </div>
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

      <div class="the-ask text-box" v-if="project.ask">
        <div class="line-box">
        <h2>The Ask</h2>
        <div class="line"></div>
        </div>
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
              <div v-if="project.fullImg" class="open-full" @click="openFullImg()">
          Open Full Screen
        </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="case">
        <img :src="project.case" :alt="project.wireframe" />
      </div>
      <div class="the-work text-box">
        <div class="line-box">
        <h2>Get to work</h2>
        <div class="line"></div>
        </div>
        <div v-html="project.work"></div>
      </div>

      <div class="the-sol text-box">
        <div class="line-box">
        <h2>It's all coming together</h2>
        <div class="line"></div>
        </div>
        <div v-html="project.ask"></div>
      </div>

      <div class="results" v-if="project.results">
        <div class="layer1"></div>
        <div class="layer2"></div>
        <div class="layer3">
          <div class="padding">
            <div class="line-box">
            <h2>Results</h2>
            <div class="line"></div>
            </div>
            <div v-html="project.results"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="project.fullImg" class="fullImgContainer">
      <section class="xBars" @click="closeFullImg()">
        <svg
          width="142"
          height="143"
          viewBox="0 0 142 143"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="32.4626"
            y="103.673"
            width="100"
            height="9"
            rx="4.5"
            transform="rotate(-45 32.4626 103.673)"
            fill="white"
          />
          <rect
            x="103.173"
            y="110.037"
            width="100"
            height="9"
            rx="4.5"
            transform="rotate(-135 103.173 110.037)"
            fill="white"
          />
        </svg>
      </section>
      <img :src="project.fullImg" alt="" class="fullImg" />
      <div class="fullMask" @click="closeFullImg()"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    project: Object,
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
  computed: {
    name() {
      return this.data;
    },
  },
  methods: {
    openFullImg() {
      document.querySelector(".fullImgContainer").style.display = "block";
      setTimeout(function () {
        document.querySelector(".fullImgContainer").style.opacity = 1;
      }, 100);
    },
    closeFullImg() {
      document.querySelector(".fullImgContainer").style.opacity = 0;
      setTimeout(function () {
        document.querySelector(".fullImgContainer").style.display = "none";
      }, 400);
    },
  },
};
</script>

<style lang="scss" scoped>
.long {
  height: 300px;
}
body #projects {
  max-width: 1000px;
  padding-top: calc(50vh + 50px);
}
// .projectsBackground {
//   height: 50vh;
// }
.padding {
  padding: 30px;
  padding-bottom: 20px;
}

.project-title {
  background-color: #1a1a40;
  height: fit-content;
  color: #fff;
  position: absolute;
  top: 120px;
  left: 0px;
  display: grid;
  align-content: center;
  text-align: left;
  z-index: 3;
  font-size: 18px;
  font-weight: 900;
  padding: 10px 20px;
  border-radius: 15px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  max-width: 80vw;
  animation-name: example;
  animation-iteration-count: infinite;
  animation-duration: 32s;
  transition: 0.4s all ease-in-out;

h2 {
  font-weight: 600;
}
  @media screen and (min-width: 600px) {
    padding: 16px 40px 16px 50px;
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 24px;
    padding: 20px 30px 20px 80px;
  }
}
@media screen and (max-width: 800px) {
  .open-full,
  .fullImgContainer {
    display: none !important;
  }
}
@media screen and (min-width: 800px) {
  .fullImgContainer {
    display: none;
    opacity: 0;
    position: fixed;
    // background: #00000044;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    transition: ease-in 0.4s all;
    height: 100vh;
    .fullMask {
      background: #00000066;
      transition: ease-in 0.4s all;
      position: absolute;
      top: 0px;
      width: 100vw;
      height: 100vh;
      //   position: fixed;
      // top: 0;
      //   left: 0;
    }
    img {
      border-radius: 80px;
      padding: 50px;
      width: 80%;
      z-index: 12;
      position: relative;
    }
  }
  .xBars {
    position: absolute;
    right: 40px;
    top: 50px;
    height: 40px;
    width: 40px;
    z-index: 15;
@media screen and (min-width:920px) {
  right: 50px;
}
    svg {
      height: 40px;
      width: 40px;
    }
    &:active {
      box-shadow: inset #ffffff33 0px 0px 4px;
    }
  }
  .open-full {
    font-weight: 500;
    // display: block;
    // background: #7A0BC0aa;
    // width: fit-content;
    // height: fit-content;
    padding: 5px;
    // position: relative;
    // bottom: 60px;
    // left: 60%;
    text-decoration: underline;
  }
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

  @media screen and (min-width: 1100px) {
    right: 80px;
    top: calc(50vh - 150px);
  }
  @media screen and (min-width: 1300px) {
    right: 120px;
  }
  @media screen and (min-width: 1600px) {
    right: 380px;
  }
   @media screen and (min-width: 1800px) {
    right: 480px;
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
    margin-right: 10px;
    margin-left: 10px;
    font-size: 18px;
    text-align: center;
  }
}


.line-box {
  width: fit-content;
  
  // margin-left: 40px;
  margin-bottom: 20px;
  .line {
    max-width: 80vw;
    height: 2px;
    width: 120%;
    // margin-bottom: 40px;
    margin: auto;
  }
  h2 {
        width: fit-content;
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
    background-color: #fa58b6;
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
    margin-left: 100px;
  }

  img {
    width: 80%;
    border-radius: 16px;
    // height: 100%;
    align-self: center;
    margin-top: 50px;
    justify-self: center;

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