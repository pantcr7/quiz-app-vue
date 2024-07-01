import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CardView from "@/views/CardView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
        path: "/home",
        redirect:'/'
      },
  //   {
  //     path: "/about",
  //     name: "about",
  //     component: AboutView
  //   },
    {
      path: "/cards/:id",
      name: "cards",
      component: CardView,
      // children: [
      //   {
      //     path: "contact",
      //     name: "contact",
      //     component: ContactView
      //   }
      // ]
    },
  //   {
  //     // Catch-all route for 404 errors
  //     path: "/:catchall(.*)*",
  //     name: "NotFound",
  //     component: NotFoundView
  //   }
   ]
});

export default router;
