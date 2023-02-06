<script setup lang="ts">
import { onMounted, ref } from "vue";
import ListViews from "@/components/List.vue";
import {apiGetMovies, apiGetMovieViews} from "@/api/movies"

let movieViews = ref([]);

const initPageMovieViews = onMounted(() => {
  fetchMovieViews()
})

const fetchMovieViews = async () => {
  try {
    const resViews = await apiGetMovieViews();
    const resMovies = await apiGetMovies();
    Promise.all([resViews, resMovies]).then(() => {
      const views = resViews
      const movies = resMovies
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