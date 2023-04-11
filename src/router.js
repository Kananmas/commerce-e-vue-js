import { createRouter, createWebHistory } from "vue-router";


import Home from "./pages/Home/index.vue";
import Login from "./pages/Login/index.vue";
import Signin from "./pages/Signin/index.vue";
import ShoppingCard from "./pages/ShoppingCard/index.vue"
import Collections from "./pages/Collections/index.vue";
import Brands from "./pages/Brands/index.vue";
import Product from "./pages/Product/index.vue";
import Sales from "./pages/Sales/index.vue"

import Header from "./components/Header/index.vue";
import Vitrine from "./components/Vitrine/index.vue";

const routes = [
  { path: "/", redirect: "/:id" },
  {
    path: "/:id",
    component: Header,
    children: [
      { path: "", component: Home },
      { path: "/login", component: Login },
      { path: "/signin", component: Signin },
      { path: "/product", component: Product },
      { path: "/shoppingcard", component: ShoppingCard },
      { path: "/sales", component: Sales },
      { path: "/brands", component: Brands },
      { path: "/collections",component: Collections},
      { path: "/vitrine", component:Vitrine}
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
