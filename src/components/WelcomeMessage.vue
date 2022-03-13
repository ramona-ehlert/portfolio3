<template>
  <div id="welcome-message">
    <h1>Hi, I'm Ramona, <br />a full stack web developer</h1>

    <div class="welcome-grid">
      <!-- <h4>
        I’m a dev with a special interest in front end design and development. I
        am currently working as The Brick corporate office out of Edmonton AB,
        where I have been maintaing and improving the eccommerce website, with a
        focus on bringing the mobile experience into the modern age.
      </h4> -->
      <h4>
        I’m a dev with an affinity for front end design and development. I
        currently reside in Edmonton Alberta, I spend my days maintaining and
        improving The Brick's eccommerce website, a custom Shopify store which
        hosts hundreds of thousands of daily visitors. Here I am focused on
        streamlining and modernizing the mobile shopping experience.
      </h4>

      <img
        src="../assets/fullstack.svg"
        alt="An icon with a simplistic desktop monitor, website and mobile phone"
      />
    </div>
    <div ></div>
      <h2 class="mywork">My Work</h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#welcome-message {
  min-height: 100vh;
  display: grid;
  place-content: center;
  // padding-top: 20px;
  // padding-bottom: 20px;
  @media screen and (min-width: 500px) {
    // padding-top: 50px;
    // padding-bottom: 50px;
  }
  @media screen and (min-width: 500px) {
    // padding-top: 120px;
    // padding-bottom: 90px;
  }
}

.welcome-grid {
  img {
    width: 60%;
    // padding: 20px;
  }
  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: 5fr 3fr;
    img {
      width: 80%;
      padding-bottom: 50px;
      align-self: center;
      justify-self: right;
    }
  }
  @media screen and (min-width: 900px) {
    img {
      margin-top: -60px;
    }
  }
  @media screen and (min-width: 1000px) {
    img {
      margin-top: -120px;
    }
  }
  @media screen and (min-width: 1200px) {
    img {
      margin-top: -160px;
      width: 90%;
    }
  }
}

h1 {
  font-size: 26px;
  text-align: left;
  font-weight: 800;

  color: #ac5adf;
  text-shadow: 0px 4px 4px #000000;

  @media screen and (min-width: 450px) {
    font-size: 32px;
  }
  @media screen and (min-width: 600px) {
    font-size: 36px;
  }
  @media screen and (min-width: 800px) {
    font-size: 42px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 52px;
  }
}

h4 {
  text-align: left;
  font-size: 14px;
  line-height: 30px;
  padding-top: 12px;
  //   width: 90%;
  @media screen and (min-width: 400px) {
    font-size: 18px;
    // width: 70%;
  }
  @media screen and (min-width: 500px) {
    line-height: 40px;
  }
  @media screen and (min-width: 900px) {
    font-size: 24px;
    line-height: 45px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 28px;
  }
}
.mywork {
  position: absolute;
  bottom: 40px;
  right: 0px;
  width: 100%;
  text-align: center;
  animation-name: example;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  
    font-size: 28px;
  
}
@keyframes example {
  0% {
    color: #9043c1;
  }
  20% {
    color: #fa58b6;
  }
  40% {
    color: #f36f72;
  }
  60% {
    color: #eb862e;
  }
  70% {
    color: #fa58b6;
  }
  100% {
    color: #9043c1;
  }
}
</style>