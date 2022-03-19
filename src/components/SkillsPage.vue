<template>
  <div id="skills-page">
    
    <h2 class="mySkills">My Skills</h2>
    <div class="line"></div>
    <div class="skills-message"></div>
    <div id="skills" v-for="object in storeSkills" :key="object.id">
      <section class="skill-section">
        <div class="skillLine">
        <h2 class="type-name">{{ object.name }}</h2>
        <div class="line"></div>
        </div>
        <div class="skillType">
          <div v-for="object in object.tech" :key="object.id" class="skill">
            <div class="skillBox">
              <img
                class="skillLogo"
                :src="object.logo"
                :alt="object.name + ' Logo'"
              />
            </div>
            <p>{{ object.name }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills-page",
  computed: {
    storeSkills() {
      return this.$store.state.skills;
    },
  },
};
</script>

<style lang="scss" scoped>
#skills-page {
  display: grid;
  place-items: center;
}

#skills {
  margin: 30px;
  width: 70%;
}
.type-name {
  color: #fff;
}

.skillBox {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
}
.skill-section {
  margin: 10px;
  padding: 20px 0px;
  box-shadow: #dea9ff66 0px 0px 0px;
  box-shadow: 0 8px 0 0 #9043c1; /* Border bottom */
box-shadow: 0 -8px 0 0 #9043c1; /* Border top */
box-shadow: -8px 0 0 0 #9043c1; /* Border left */
box-shadow: 8px 0 0 0 #9043c1; /* Border right */
box-shadow: 0 0 0 8px #9043c1; /* All the borders by using the spread properties */
  border-radius: 10px;
 
  // display: grid;
  // place-content: center;
  background-color: #9043c1;
  .skillLine {
    width: fit-content;
    margin-left: 40px;
    .line {
    height: 2px;
    width:  120%;
    margin-bottom: 20px;
    margin: auto;
    background-color: #fa58b6
  }
  }
  
  
}
p, h2, h8 {
  color: #fff;
}
p {
  text-align: center;
  margin-top: 10px;
  
  // width: 60px;
  // height: 60px;
}
.skillLogo {
  width: 100%;
}
.skillType {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  
}

.skill {
  margin: 5px;
  display: grid;
  place-items: center;
  padding: 20px 0px;
}

@media screen and (min-width: 500px) {
  .skillType {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 800px) {
  #skills {
    margin: 30px;
    width: 60%;
  }
  .skillType {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>