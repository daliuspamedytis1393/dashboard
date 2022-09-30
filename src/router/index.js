import { createRouter, createWebHistory } from "vue-router";
import EmptyView from "../views/EmptyView.vue";
import DashboardView from "../views/DashboardView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/recruitment",
      name: "recruitment",
      component: EmptyView,
    },
    {
      path: "/schedule",
      name: "schedule",
      component: EmptyView,
    },
    {
      path: "/employee",
      name: "employee",
      component: EmptyView,
    },
    {
      path: "/department",
      name: "department",
      component: EmptyView,
    },
    {
      path: "/support",
      name: "support",
      component: EmptyView,
    },
    {
      path: "/settings",
      name: "settings",
      component: EmptyView,
    },
  ],
});

export default router;
