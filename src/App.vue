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
      }
    
  },
  
  mounted(){
    this.fetchData();
  }
};
</script>

<template>
  <h1>ciao</h1>
</template>

<style scoped></style>
