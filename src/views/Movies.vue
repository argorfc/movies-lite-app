<script setup lang="ts">
import { onMounted, ref } from "vue";
import {apiGetMovies} from "@/api/movies"
import CardMovie from "@/components/Card.vue"

let movies = ref([]);
const initPageMovie = onMounted(() => {
  fetchMovies()
})

const fetchMovies = async () => {
  try {
    const res = await apiGetMovies();
    movies.value = res;
  } catch (e) {
    console.error(e);
  }
}
</script>

<template>
  <div id="home" class="w-full flex flex-col px-4">
    <div class="flex flex-col gap-4">
      <h1>MOVIES</h1>
      <div
        id="card-movies"
        class="grid grid-cols-4 gap-4"
      >
        <card-movie
          v-for="(movie, index) in movies"
          :key="index"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>