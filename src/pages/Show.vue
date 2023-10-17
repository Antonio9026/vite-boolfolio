<script>
import axios from "axios";

export default {
   name: "Show", 
 
  data() {
    return {
      project: {}
      

    }
  },

  methods: {
    fetchData() {
      axios.get("http://127.0.0.1:8000/api/projects/" + this.$route.params.id)
        .then((response) => {
          // salvo i progetti 
          this.project = response.data;

          console.log(this.project);
        })
    },
    getImgUrl(project) {
      return `http://127.0.0.1:8000/storage/${project.image}`;
  },
},

  mounted() {
    this.fetchData();
  }
};
</script>

<template>

<div class="card">
          <div class="img-card">
            <img :src="getImgUrl(project)" alt="">
          </div>
          <p>{{project.title }}</p>
          <p>{{ project.description }}</p>
          <a :href="project.github_link">Github link</a>
         
         
         
          <div class="tecnologie" v-for=" technology in project.technologies">
           <p>{{technology.name }}</p>
          </div>
        
          <p>{{project.type ? project.type.type: ""  }}</p>
        </div>
</template>

<style scoped></style>