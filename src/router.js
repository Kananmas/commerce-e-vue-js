import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home/index.vue";
import Login from "./pages/Login/index.vue";
import Signin from "./pages/Signin/index.vue";
import Collections from "./pages/Collections/index.vue";
import Product from "./pages/Product/index.vue";
import Header from "./components/Header/index.vue";
import Vitrine from "./components/Vitrine/index.vue";
import Brands from "./pages/Brands/index.vue";

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
      {
        path: "/brands/:id",
        children: [
          { path: "", component: Brands },
          { path: "adidas", component: Vitrine },
          { path: "puma", component: Vitrine },
          { path: "nike", component: Vitrine },
          { path: "thendorthface", component: Vitrine },
          { path: "unerarmmor", component: Vitrine },
          { path: "reebook", component: Vitrine },
          { path: "newbalance", component: Vitrine },
          { path: "filla", component: Vitrine },
        ],
      },
      {
        path: "/collections/:id",
        children: [
          { path: "", component: Collections },
          { path: "adidas", component: Vitrine },
          { path: "puma", component: Vitrine },
          { path: "nike", component: Vitrine },
          { path: "thennorthface", component: Vitrine },
          { path: "underarmmor", component: Vitrine },
          { path: "reebook", component: Vitrine },
          { path: "newbalance", component: Vitrine },
          { path: "filla", component: Vitrine },
        ],
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
