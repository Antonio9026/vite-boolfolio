<script >

import ProjectCard from "./components/ProjectCard.vue"
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {


    }
  },

  methods: {

  },

  mounted() {

  }
};
</script>

<template>
  <header>
    <nav>
      <ul class="nav-rotte">
        <li class="rotte"><router-link class="rotte" :to="{ name: 'home' }">Home</router-link></li>
        <li class="rotte"><router-link class="rotte" :to="{ name: 'index' }">I miei progetti</router-link></li>
        
      </ul>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  height: 50px;

}

.nav-rotte {
  height: 100%;
  display: flex;
  gap: 10px;
  list-style-type: none;
  text-decoration: none;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;

}
nav{
  height: 100%;
}
.rotte {
  text-decoration-line: none;
}
</style>
