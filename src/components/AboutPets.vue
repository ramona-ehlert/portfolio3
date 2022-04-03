<template>
  <article>
    <h2>My coding buddies</h2>
    <div class="quote">
      <p>
        <i
          >“It is amazing how much love and laughter they bring into our lives
          and even how much closer we become with each other because of them.</i
        ><br />- John Grogan
      </p>
    </div>
    <div class="content-grid">
      <div class="pet-grid">
        <div class="pets" id="pets2">
          <img
            src="../assets/tuco.png"
            alt="A photo of a chihuahua italian greyhound with blonde hair and big brown eyes"
          />
          <p>
            Tuco; an anxious Italian Greyhound x Chihuahua who had struggled to
            find a home. When I met him it was love at first sight. He climbed
            into my arms with no hesitation, and we’ve been best friends ever
            since.
          </p>
          
        </div>
        <div class="pets" id="pets-code">
        <img src="../assets/code-pets.png" class="code-pets" alt=""></div>
      </div>
      <div class="pet-grid">
        <div class="pets" id="pets1">
          <img src="../assets/duck.png" alt="A cat smiling" />
          <!-- <div class="mask"> -->
          <p>
            Duck; the house tiger. When I saw Duck at the shelter — one
            ear, HUGE eyes, and a coat that had never seen a brush — I knew I
            had to bring her home. She spent the entire first night stretching
            her legs — sprinting around, meowing with joy at the top of her
            lungs.
          </p>
          <!-- </div> -->
        </div>
        <div class="pets" id="pets3">
          <img src="../assets/zoya.jpg" alt="" />
          <p>
            Zoya; the newest member of the family. She's a high energy
            menace, except when it’s time to code. She will sit and follow my
            cursor as I type new lines of code, and has become my web dev sidekick.
          </p>

        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
 article {
   padding-bottom: 60px;
 }
#about
.content-grid {
  display: grid;
  place-content: center;
  grid-template-columns: 1fr;
  width: 80%;
  margin: 0 10%;
  
  @media screen and (min-width: 860px) {
    width: 100%;
    margin: 0;
    smargin-bottom: 50px;
    grid-template-columns: 1fr 1fr;
  }

  // p {
  //   margin: 20px;
  //   text-align: left;
  // }
}
.quote {
  max-width: 400px;
  width: 80%;
  margin: 20px auto;
}
// .pets {
//   // height: 300p
//   position: relative;
// }
// img {
//   position: absolute;
// }
.code-pets {
  width: 100%;
}
#pets-code {
  height: fit-content;

    
}
.pets {
  position: relative;
  margin: 10px 0px 0px;

  @media screen and (min-width: 860px) {
    margin: 40px 20px;
  }
  img {
    width: 100%;
    //  position: absolute;
  }
  p {
    background-color: #9043c1e1;
    font-size: 12px;
    font-weight: 400;
    padding: 10px;
    position: absolute;
    width: 100px;
    @media screen and (min-width: 550px) {
      font-size: 14px;
    }
    @media screen and (max-width: 400px) {
      font-size: 10px;
    }
  }
}
#pets3 {
  p {
    top: 0;
    left: 0;
    border-bottom-right-radius: 8px;
  }
  @media screen and (min-width: 550px) {
    // margin-top: -47%;
  }
}
#pets2 {
  img {
    width: 100%;
    height: 100%;
  }
  p {
    top: 0;
    right: 0;
    width: 32%;
    border-bottom-left-radius: 8px;
  }
}

// .code-pets {
//   margin-top: 32px;
// }
#pets1 {
  img {
    // position: absolute;
    left: 0;
    top: 0px;
  }
  p {
    left: 0;
    top: 0px;
    width: 80%;
    border-bottom-right-radius: 8px;
    @media screen and (max-width: 420px) {
      border-bottom-right-radius: 0px;
      width: calc(100% - 20px);
    }
  }
}
</style>