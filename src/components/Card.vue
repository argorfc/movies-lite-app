<script setup lang="ts">import { toRefs } from 'vue';

interface ICardMovie {
  id: boolean;
  title: string;
  url: string;
  imgSrc: string;
  description: string;
}
const props = withDefaults(
    defineProps<{
      movie: ICardMovie;
      onClick?: (val: any) => void;
    }>(),
    {}
)
const { movie } = toRefs(props);
const emits = defineEmits(['onClick'])
const onClick = () => {
  emits('onClick');
}
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="w-full rounded-lg shadow-lg bg-white max-w-sm">
      <a href="#!">
        <img class="rounded-t-lg max-h-96 w-full object-cover" :src="movie.imgSrc" :title="movie.title" :alt="movie.description" />
      </a>
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2">{{ movie.title }}</h5>
        <p class="text-gray-700 text-base mb-4">
          {{ movie.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
