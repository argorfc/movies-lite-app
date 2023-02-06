<script setup lang="ts">
import router from '@/router';

</script>

<template>
  <div id="sidebar" class="w-60 h-full shadow-md bg-white px-1 absolute z-20">
    <ul class="relative">
      <li class="relative">
        <router-link to="/home" class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">Home</router-link>
      </li>
      <li class="relative">
        <router-link to="/admin/movies" class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">Movies</router-link>
      </li>
      <li class="relative">
        <router-link to="/admin/movie/views" class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">Movie Views</router-link>
      </li>
      <li class="relative">
        <router-link to="/admin/movie/genres" class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">Movie Genres</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>