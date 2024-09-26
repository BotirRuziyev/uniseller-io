import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tariffs from "@/views/Tariffs.vue";
import Service from "@/views/Service.vue";
import Integrations from "@/views/Integrations.vue";
import Marketplaces from "@/views/Marketplaces.vue";
import Profile from "@/views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/tariffs",
    name: "tariffs",
    component: Tariffs,
  },
  {
    path: "/service",
    name: "service",
    component: Service,
  },
  {
    path: "/integrations",
    name: "integrations",
    component: Integrations,
  },
  {
    path: "/marketplaces",
    name: "marketplaces",
    component: Marketplaces,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
