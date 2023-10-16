<script>

export default{
    props:{
        project:{
            type: Object,
            required: true
        }
    },
    

    methods:{
        getImgUrl(project) {
      return `http://127.0.0.1:8000/storage/${project.image}`;
    },
    }
}
</script>

<template>
<div class="card">
          <div class="img-card">
            <img :src="getImgUrl(project)" alt="">
          </div>
          <p>{{ project.title }}</p>
          <p>{{ project.description }}</p>
        </div>

</template>


<style scoped>  

</style>