<template>
    <div class="socials">
        <a href="https://github.com/jacksonoviatt" target="_blank">
          <img src="../assets/github.svg" alt="the github logo" />
        </a>
        <a href="https://drive.google.com/file/d/1AAa5sa4SvpK-PpUPVNB_1axpNgun01wg/view?usp=sharing" target="_blank">
          <img src="../assets/resume.svg" alt="a resume logo" />
        </a>
        <a href="mailto:ramonaoviatt@gmail.com" target="_blank">
          <img src="../assets/email.svg" alt="an email logo" />
        </a>
        <a href="https://www.linkedin.com/in/ramona-oviatt/" target="_blank">
          <img src="../assets/linkedin.svg" alt="the linkedIn logo" />
        </a>
        <!-- <a href="https://dev.to/ramonaoviatt" target="_blank">
          <img src="../assets/dev.svg" alt="the dev.to logo" />
        </a> -->
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
     grid-template-columns: 1fr 1fr 1fr 1fr;
     justify-items: right;
     width: 280px;
      img {
    
        height: 30px;
    }
  }
}
</style>