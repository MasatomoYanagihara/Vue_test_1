import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import(/* webpackChunkName: "shop" */ "@/views/Shop.vue"),
  },
  {
    path: "/question",
    name: "Question",
    component: () =>
      import(/* webpackChunkName: "question" */ "@/views/Question.vue"),
  },
  {
    path: "/company",
    name: "Company",
    component: () =>
      import(/* webpackChunkName: "company" */ "@/views/Company.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/shop/shopdetaile",
    name: "ShopDetaile",
    component: () =>
      import(
        /* webpackChunkName: "shop/shopDetaile" */ "@/views/shop/shopDetaile.vue"
      ),
  },
  {
    path: "/order",
    name: "Order",
    component: () =>
      import(/* webpackChunkName: "order" */ "@/views/Order.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
