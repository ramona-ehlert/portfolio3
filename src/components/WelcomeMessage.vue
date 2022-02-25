<template>
  <div id="welcome-message">
    <h1 class="light-purple">
      Hi, I'm Ramona, <br />a full stack web developer
    </h1>

    <div class="welcome-grid">
      <h4>
        I’m a dev with a special interest in front end design and development. I
        am currently working at The Brick corporate office out of Edmonton AB,
        where I have been maintaing and improving the eccommerce website, with a
        focus on bringing the mobile experience into the modern age.
      </h4>

      <img
        src="../assets/fullstack.svg"
        alt="An icon with a simplistic desktop monitor, website and mobile phone"
      />
    </div>
    <h2 class="mywork">My Work</h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#welcome-message {
    padding-top: 20px;
    padding-bottom: 20px;
    @media screen and (min-width: 500px) {
    padding-top: 50px;
    // padding-bottom: 50px;
    }
    @media screen and (min-width: 500px) {
    padding-top: 120px;
    // padding-bottom: 90px;
    }
}
.welcome-grid {
  img {
    width: 60%;
    padding: 20px;
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
    }
  }
}

h1 {
  font-size: 26px;
  text-align: left;
  font-weight: 800;

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
}
.mywork {
  animation-name: example;
  animation-duration: 12s;
  animation-iteration-count: infinite;
}
@keyframes example {
  0% {color:#9043C1;}
  20% {color:#FA58B6;}
  40% {color:#F36F72;}
  60% {color:#EB862E;}
  70% {color:#FA58B6;}
  100% {color:#9043C1;}
}
</style>