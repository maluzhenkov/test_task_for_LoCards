import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/book/:id",
      name: "BookDetail",
      component: () => import("@/pages/DetailBook.vue"),
      props: true,
    },
    {
      path: "*",
      name: "404",
      component: () => import("@/pages/404.vue"),
    },
  ],
});
