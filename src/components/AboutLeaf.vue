<template>
  <div>
      <!-- <div class="line-box"> -->
    <h2>When I'm not coding I'm...</h2>
    
    <!-- </div> -->
    <div class="hobbies">
      <div class="hobby" id="forage">
        <h4>Foraging for edible plants and mushrooms</h4>

        <img
          src="../assets/marasmius.jpg"
          alt="A photo of mushrooms in a palm"
        />
        <p class="p-box">
          Marasmius oreades, one of my favourite
          mushrooms to forage can be found in your own backyard!
        </p>
      </div>
      <div class="hobby" id="paleo">
        <h4>Learning more about paleontolgy and natural history</h4>

        <img
          src="../assets/fossils.jpg"
          alt="A photo of a mammoth fossil skeleton at a museum"
        />
        <p class="p-box">
          A mammoth fossil at The Royal Alberta Museum. One of the greatest
          mammals to ever live, at least in my opinion.
        </p>
      </div>
      <div class="hobby" id="music">
        <h4>Listening to music and going to concerts</h4>

        <img
          src="../assets/concert.jpg"
          alt="A photo of balloons and streamers above the crowd at a concert"
        />
        <p class="p-box">
          The Flaming Lips in Calgary. If you ever have the oppurtunity to see this band live, take it, they have an incredible show.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
 h2 {
     padding-bottom: 40px;
     font-size: 24px;
 }
.hobbies {
  display: inline-block;
  padding-bottom: 40px;
}
.hobby {
  h4 {
    text-align: left;
    padding-bottom: 12px;
  }
  margin: 20px 10px;
  width: 300px;
  max-width: 80vw;
  display: inline-block;
  position: relative;
  img {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
  .p-box {
    position: absolute;
    bottom: 0px;
    background-color: #9043c1dd;
    font-size: 12px;
    font-weight: 400;
    padding: 10px;
  }
}
</style>