<template>
    <div>
<nav>
    <div class="nav-tab">
          <a @click="closeMenu()" href="/#">Welcome</a>
        </div>
        <div class="nav-tab">
          <a href="/#project-section" @click="closeMenu()">Projects</a>
          <div v-for="item in storeProjects" :key="item.id">
            <a :href="item.page" class="small-link"> {{ item.name }}</a>
          </div>
        </div>
        <div class="nav-tab">
          <a href="/#skills-page" @click="closeMenu()">My Skills</a>
        </div>
    
        <div class="nav-tab">
          <a href="/about" @click="closeMenu()">About Me</a>
        </div>
</nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>