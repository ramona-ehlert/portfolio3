<template>
  <div id="projects">
    <div class="projectsBackground"></div>
    <div class="project-title">
      <h2>{{ project.name }}</h2>
      <div class="project-link">
        <a target="_blank" :href="project.link">{{ project.link }}</a>
        <p>// {{ project.date }}</p>
      </div>
    </div>
    <div class="note" v-if="project.links">
      <div>
        <img src="../assets/github.svg" alt="" />
      </div>
      <div v-if="project.links.length > 1">
        <a target="_blank" :href="project.links[0]">Visit front end</a>
        <a target="_blank" :href="project.links[1]">Visit back end</a>
      </div>
      <div v-if="project.links.length === 1">
        <a target="_blank" :href="project.links[0]">Go to Code</a>
      </div>
    </div>
    <div class="disc" v-if="project.disclaimer">
      <p>{{project.disclaimer}}</p>
    </div>

    <div class="main-mask lpurple-back"></div>
    <img class="project-image" :src="project.image" />
    <div class="text-grid">
      <div class="tech-stack">
        <!-- <div class="stack-container"> -->
        <div class="layer1"></div>
        <div class="layer2"></div>
        <div class="layer3">
          <div class="padding">
            <div class="line-box">
              <h2>Tech Stack</h2>
              <div class="line"></div>
            </div>
            <!-- </div> -->
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
      <div
        class="proj-desc"
        v-if="project.description"
        v-html="project.description"
      ></div>
      <div class="the-ask text-box" v-if="project.ask">
        <div class="line-box">
          <h2>The Ask</h2>
          <div class="line"></div>
        </div>
        <div v-html="project.ask"></div>
      </div>
      <div class="wireframe" v-if="project.wireframe">
        <img :src="project.wireframe" :alt="project.wireAlt" />
        <div class="wire-label">
          <div class="layer1"></div>
          <div class="layer2"></div>
          <div class="layer3">
            <div class="padding">
              <h4>{{ project.wireLabel }}</h4>
              <div
                v-if="project.fullImg"
                class="open-full"
                @click="openFullImg()"
              >
                Open Full Screen
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="case">
        <img :src="project.case" :alt="project.wireframe" />
      </div>
      <div class="the-work text-box" v-if="project.work">
        <div class="line-box">
          <h2>Getting to work</h2>
          <div class="line"></div>
        </div>
        <div v-html="project.work"></div>
      </div>

      <div class="the-sol text-box" v-if="project.sol">
        <div class="line-box">
          <h2>It's all coming together</h2>
          <div class="line"></div>
        </div>
        <div v-html="project.sol"></div>
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
    document.getElementById("navBox").style.left = "-100vw";
    document.getElementById("nav-mask").style.opacity = 0;
    setTimeout(function () {
      document.getElementById("nav-mask").style.display = "none";
    }, 400);
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
.padding {
  padding: 30px;
  padding-bottom: 20px;
}
.proj-desc {
  align-self: center;
  padding: 50px 0 10px;
  display: grid;
  align-content: center;
}
.disc {
  position: absolute;
  top: calc(50vh + 8px);
  color: #fa58b6;
  left: 10px;
@media screen and (max-width: 850px) {
  @media screen and (min-width: 725px) {
    max-width: 33vw;
  }
}
  text-align: left;
}
.note {
  position: absolute;
  bottom: calc(50vh - 4px);
  left: 0;
  display: grid;
  border-top-right-radius: 12px;
  z-index: 4;
  background: #1a1a40;
  padding: 8px 28px;
  place-content: center;
  grid-template-columns: 48px calc(100% - 48px);
  div {
    display: grid;
    place-content: center;
  }
  a {
    display: inline-block;
    text-decoration: none;
    padding: 10px 0px 0px 16px;
    color: #fff;
    font-size: 18px;
  }
  img {
    height: 40px;
  }
}
.project-title {
  background-color: #1a1a40;
  height: fit-content;
  color: #fff;
  position: absolute;
  top: 60px;
  left: 0px;
  display: grid;
  align-content: center;
  text-align: left;
  z-index: 3;
  font-size: 18px;
  font-weight: 900;
  padding: 6px 12px;
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
  .project-link {
    display: inline-block;
    margin-top: 0px;
    p {
      color: #fa58b6;
      display: inline-block;
    }
  }
  a {
    color: #eb862e;
    display: inline-block;
    margin-right: 16px;
  }
  @media screen and (min-width: 600px) {
    padding: 16px 40px 16px 50px;
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    // font-px;
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
    @media screen and (min-width: 920px) {
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
    cursor: pointer;
    font-weight: 500;
    padding: 5px;
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
  background-image: linear-gradient(to right, #eb862e, #fa58b6);
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
.project-link {
  font-size: 16px;
  font-weight: 400;

  // position: absolute;
  // top: calc(50vh + 10px);
}
.tech-stack {
  // top: calc(50vh + 50px);
  right: 0px;
  left: 0px;
  position: relative;
  border-radius: 18px;
  max-width: 80%;
  margin: auto;
  z-index: 4;
  @media screen and (min-width: 726px) {
    top: calc(50vh - 140px);
    right: 60px;
    left: auto;
    position: absolute;
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
  .stack-container {
    position: relative;
    height: 100%;
  }
  .line {
    height: 2px;
    width: 170px;
    background-image: linear-gradient(to right, #eb862e, #fa58b6);
    margin-bottom: 20px;
  }
  h4 {
    margin-right: 10px;
    margin-left: 10px;
    font-size: 18px;
    text-align: center;
  }
}

.text-grid {
  display: grid;
  place-content: center;
  text-align: left;
  grid-template-columns: 1fr;
  @media screen and (max-width: 620px) {
    @media screen and (min-width: 550px) {
      padding-top: 40px;
    }
  }
  > div {
    // margin-top: 40px;
    margin: 20px 10px;
  }
  // margin-bottom: 120px;
  @media screen and (min-width: 850px) {
    grid-template-columns: 1fr 1fr;
    > div {
      // margin-top: 40px;
      margin: 30px 15px;
    }
    // column-gap: 20px;
    // row-gap: 40px;
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
    left: 0px;
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
  height: min-content;
  justify-self: center;
  margin: auto;
  z-index: 4;
  text-align: left;
  max-width: 500px;
  p {
    font-size: 1rem;
  }
  .line {
    height: 2px;
    width: 120px;
    background-image: linear-gradient(to right, #eb862e, #fa58b6);
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