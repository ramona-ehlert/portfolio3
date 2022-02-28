<template>
    <div id="projects">
        <div class="project-title">
            <h2>{{project.name}}</h2>
        </div>
        


<img class="project-image" :src="project.image" >
    </div>
</template>

<script>
    export default {
        props: {
            project: Object,
  },
    }
</script>

<style lang="scss" scoped>
#projects {
    padding-top: 450px;
}

.project-title {
    background-color: #F36F72;
    height: 60px;
    width: 200px;
}
.project-image {
    position: absolute;
    width: 100vw;
    height: 500px;
    top: 0px;
    left: 0px;
    object-fit: cover;
    filter: blur(3px);
}
</style>