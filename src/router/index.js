import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/shop",
    component: () => import(/* webpackChunkName: "shop" */ "@/views/Shop.vue"),
  },
  {
    path: "/question",
    component: () =>
      import(/* webpackChunkName: "question" */ "@/views/Question.vue"),
  },
  {
    path: "/company",
    component: () =>
      import(/* webpackChunkName: "company" */ "@/views/Company.vue"),
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/shop/shopdetaile",
    component: () =>
      import(
        /* webpackChunkName: "shop/shopDetaile" */ "@/views/shop/shopDetaile.vue"
      ),
  },
  {
    path: "/order",
    component: () =>
      import(/* webpackChunkName: "order" */ "@/views/Order.vue"),
  },
  {
    path: "/menu/shopmenu",
    component: () =>
      import(/* webpackChunkName: "order" */ "@/views/menu/ShopMenu.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
