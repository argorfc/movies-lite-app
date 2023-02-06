<script setup lang="ts">
import { onMounted, ref } from "vue";
import ListViews from "@/components/List.vue";
import axios from "axios";

const baseURLViews = import.meta.env.VITE_APP_BASE_URL_API + "/movie/views";
const baseURLMovies = import.meta.env.VITE_APP_BASE_URL_API + "/movies";
let movieViews = ref([]);

const initPageMovieViews = onMounted(() => {
  fetchMovieViews()
})

const fetchMovieViews = async () => {
  try {
    const resViews = await axios.get(baseURLViews);
    const resMovies = await axios.get(baseURLMovies);
    Promise.all([resViews, resMovies]).then(() => {
      const views = resViews.data
      const movies = resMovies.data
      const results = filterMoviewsByViews(movies, views)
      movieViews.value = results;
    });
  } catch (e) {
    console.error(e);
  }
}

const filterMoviewsByViews = (arr1: any[], arr2: any[]) => {
   let res = [];
   res = arr1.filter(el => {
      return arr2.find(element => {
         return element.id === el.id;
      });
   })
   return res.map((item) => {
    return {
      ...item,
      count: arr2.find((view) => view.movieId === item.id).count
    }
   })
}
</script>

<template>
  <div id="list-movie-views" class="w-full flex flex-col px-4">
    <div class="flex flex-col gap-4">
      <h1>Movie Views</h1>
      <list-views :movies="movieViews" />
    </div>
  </div>
</template>

<style scoped>

</style>