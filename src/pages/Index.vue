<script >
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue"
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
      pagination: {}

    }
  },

  methods: {
    fetchData() {
      axios.get("http://127.0.0.1:8000/api/projects")
        .then((response) => {
          // salvo i progetti 
          this.projects = response.data.results.data;

          // salvo i dati relativi alla paginazione con il delete cancello la chiave data 
          delete response.data.results.data;

          this.pagination = response.data.results;
        //   console.log(response);
        })
    },

  },

  mounted() {
    this.fetchData();
  }
};
</script>

<template>
  
    <div class="container">

      <div v-for="project in projects" :key="project.id" class="card-container">
        <ProjectCard :project="project"/>
        <li class="rotte"><router-link :to="{ name: 'index.show', params: { id: project.id }}">Vedi dettagli</router-link></li>
      </div>
    </div>
     
  
 
</template>

<style scoped>
</style>
