import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Pages/HomePage/HomePage.vue";
import About from "./components/Pages/AboutPage/AboutPage.vue";
import Blog from "./components/Pages/BlogPage/BlogPage.vue";
import Contact from "./components/Pages/ContactPage/ContactPage.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
