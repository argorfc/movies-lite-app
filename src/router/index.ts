import {createWebHistory, createRouter} from "vue-router"
import Login from "@/views/Login.vue"
import Home from "@/views/Home.vue"
import Dashboard from "@/layout/Dashboard.vue"
import NotFound from "@/views/NotFound.vue"
import Movies from "@/views/Movies/Movies.vue"
import MovieViews from "@/views/Movies/MovieViews.vue"
import MovieGenres from "@/views/Movies/MovieGenres.vue"

const canUserAccess = (to: any) => {
  if (to) return true
  else return false
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "",
      component: Dashboard,
      redirect: "home",
      children: [
        {
          path: "/home",
          name: "Home",
          component: Home,
        },
        {
          path: "/admin/movies",
          name: "Movies",
          component: Movies,
        },
        {
          path: "/admin/movie/views",
          name: "MovieViews",
          component: MovieViews,
        },
        {
          path: "/admin/movie/genres",
          name: "MovieGenres",
          component: MovieGenres,
        }
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})

router.beforeEach(async (to, from) => {
  // canUserAccess() returns `true` or `false`
  const canAccess = await canUserAccess(to)
  if (!canAccess) return '/login'
})

export default router