import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import News from "./views/News.vue";
import Products from "./views/Products.vue";
import Movies from "./views/Movies.vue";
import Music from "./views/Music.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
     
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/news",
      name: "news",
      component: News,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/movies",
      name: "movies",
      component: Movies,
    },
    {
      path: "/music",
      name: "music",
      component: Music,
    }
  ]
});
