import {createWebHistory, createRouter} from "vue-router"
import Login from "@/views/Login.vue"
import Home from "@/views/Home.vue"
import Dashboard from "@/layout/Dashboard.vue"
import NotFound from "@/views/NotFound.vue"
import AdminMovies from "@/views/Admin/Movies/Movies.vue"
import AdminMovieViews from "@/views/Admin/Movies/MovieViews.vue"
import AdminMovieGenres from "@/views/Admin/Movies/MovieGenres.vue"
import Movies from "@/views/Movies.vue"

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
          name: "AdminMovies",
          component: AdminMovies,
        },
        {
          path: "/admin/movie/views",
          name: "AdminMovieViews",
          component: AdminMovieViews,
        },
        {
          path: "/admin/movie/genres",
          name: "AdminMovieGenres",
          component: AdminMovieGenres,
        }
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/movies",
      name: "Movies",
      component: Movies,
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