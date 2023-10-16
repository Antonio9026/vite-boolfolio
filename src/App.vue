<script >
import axios from "axios";
export default {
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
          console.log(response);
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
  <main>
    <div class="container">

      <div v-for="project in projects" :key="project.id" class="card-container">
        <div class="card">
          <div class="img-card">
            <img :src="getImgUrl(project)" alt="">
          </div>
          <p>{{ project.title }}</p>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped></style>
