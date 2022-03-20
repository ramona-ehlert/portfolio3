<template>
    <div class="socials">
        <a href="">
          <img src="../assets/github.svg" alt="the github logo" />
        </a>
        <a href="">
          <img src="../assets/resume.svg" alt="the github logo" />
        </a>
        <a href="">
          <img src="../assets/email.svg" alt="the github logo" />
        </a>
        <a href="">
          <img src="../assets/linkedin.svg" alt="the github logo" />
        </a>
        <a href="">
          <img src="../assets/dev.svg" alt="the github logo" />
        </a>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
#footer{
  
 .socials {
     margin-top: 20px;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
     justify-items: right;
     width: 280px;
      img {
    
        height: 30px;
    }
  }
}
</style>