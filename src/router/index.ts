// Composables
import { createRouter, createWebHistory } from "vue-router";
import Index from "../components/index.vue"
import Home from "../components/Home/home.vue"

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;