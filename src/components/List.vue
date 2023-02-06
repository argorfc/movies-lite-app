<script setup lang="ts">
const props = withDefaults(
    defineProps<{
      movies: any[];
    }>(),
    {}
)
</script>

<template>
  <div class="w-full flex justify-center">
    <ul class="bg-white rounded-lg w-full text-gray-900">
      <template v-if="props.movies.length > 0">
        <li
          v-for="(movie, index) in props.movies"
          :key="index"
          class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"
        >
          <div class="flex justify-between items-center">
            <h2>{{ movie.title }}</h2>
            <span>{{ movie.count }} /views</span>
          </div>
        </li>
      </template>
      <li v-else class="px-6 py-2 border-b border-gray-200 w-full text-center">No movies views count.</li>
    </ul>
  </div>
</template>

<style scoped>
</style>
