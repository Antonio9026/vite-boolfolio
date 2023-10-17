import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home.vue";
import ProjectsIndex from "./pages/Index.vue";
import ProjectShow from "./pages/Show.vue";

const routes = [
    {
        path : "/",
        name: "home",
        component: HomePage,
    },
    {
        path : "/projects",
        name: "index",
        component: ProjectsIndex,
    },
    {
        path : "/projects/:id",
        name: "index.show",
        component: ProjectShow,
    }
   

]

const router = createRouter({

    history: createWebHistory(),
    routes,
})

export { router }