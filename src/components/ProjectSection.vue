<template>
  <div>
    <div id="project-cards">
      
      <div
      
        
        v-for="object in storeProjects"
        :key="object.id"
        class="project-card" :style="
          'background: url(' +
          object.image +
          '); background-position: center; background-size: cover;'
        "
      >
      
      <!-- <div > -->
        
        <router-link :to="object.page" >
          <div class="project-mask"></div>
          <h3>{{ object.name }}</h3>
          <p>{{ object.desc }}</p>
          <!-- <img :src="object.image" :alt="object.name"> -->
        </router-link>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(window.location.href);
    

  },
  
  computed: {
    
    storeProjects() {
      console.log(this.$store.state.projects);
      let projectstore = this.$store.state.projects;
      let projects = [];
      for (let i = 0; i < projectstore.length; i++) {
        if(window.location.href.indexOf(projectstore[i].page) === -1){
          projects.push(projectstore[i])
        }
      }
      return projects
      ;
    },
  },
};
</script>

<style lang="scss" scoped>
#project-cards {
  margin: 16px 0;
  display: grid;
  place-content: center;
  grid-template-columns: 1fr;
  margin-bottom: 40px;
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  div {
    display: grid;
    place-content: center;
  }
}
.project-card {
  a {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    text-decoration: none;
  }
  // width: 350px;

  background-position: center;
  background-size: cover;
  height: 220px;
  position: relative;
  transition: 0.3s all ease-in;
  border-radius: 10px;
  margin: 20px;
  h3 {
    color: #fff;
    position: relative;
    padding: 20px;
    transition: 0.3s all ease-in;
    font-size: 20px;
  }
  p {
    position: relative;
    padding: 0 30px;
  }
  .project-mask {
    background: rgb(39, 0, 130, 0.73);
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transition: 0.3s all ease-in;
    border-radius: 10px;
  }
  &:hover {
    transition: 0.3s all ease-in;
    h3 {
      // font-weight: 900;
      transition: 0.3s all ease-in;
      text-decoration: none;
    }
    .project-mask {
      background: rgb(122, 11, 192, 0.6);
      transition: 0.3s all ease-in;
    }
  }
  @media screen and (min-width: 600px) {
    height: 260px;
  }
  // @media screen and (min-width: 1100px) {
  //   height: 300px;
  // }
}
</style>