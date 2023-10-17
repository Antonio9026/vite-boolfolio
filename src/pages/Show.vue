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

  },

  mounted() {
    this.fetchData();
  }
};
</script>

<template>

    <h1>{{this.project.title}}</h1>
</template>

<style scoped></style>