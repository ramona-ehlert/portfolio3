<template>
  <section>
    <div class="content-grid">
      <div class="center">
        <h3>Why do I code?</h3>

       
       
        <p >
          Building my career in this exciting and fast paced field has brought
          forth many interesting challenges that I have loved finding solutions
          to. I have come to learn that very little is impossible when you are
          passionate about the work you do.
        </p>
         <p class="med">
          As a second generation web dev, technology has always been a part of
          my life. I have always had a love for digital creation and an ambition to do something great.
        </p>
         <p class="long">
          I love front end development because it is the perfect mix of
          creativity and logical problem solving.
        </p>
      </div>
      <!-- <div class="image"> -->
      <img
        src="../assets/headshot.jpg"
        alt="A professional portrait of Ramona"
      />
      <!-- </div> -->
    </div>
    <skills-page></skills-page>
  </section>
</template>

<script>
import SkillsPage from "./SkillsPage.vue";
export default {
  components: { SkillsPage },
  methods: {
    name() {},
  },
  mounted () {
    if(window.location.href.includes("skills-page") === true){
      document.getElementById("skills-page").scrollIntoView();
    }
  },
};
</script>

<style lang="scss" scoped>
h3,
p {
  text-align: left;
}
p {
  margin: 20px 16px;
}
.center {
    display: grid;
    place-content: center;
}
img {
  justify-self: center;
  align-self: center;
  border-radius: 50%;
  object-fit: cover;

  width: 80%;
  border: #9043c1 solid 8px;
}
@media screen and (min-width: 1200px) {
  img {
    width: 60%;
  }
  h3 {
    font-size: 28px;
  }
  p {
    font-size: 20px;
  }

}
@media screen and (min-width: 540px) {
    

@media screen and (max-width: 690px) {
.long {
    width: 160%;
}
.med {
    margin-top:  30px;
    margin-bottom:  30px;
}
}
@media screen and (max-width: 610px) {
.long {
    width: 160%;
}
.med {


    width: 140%;
}
img {
    align-self: start;
}
}
}
</style>