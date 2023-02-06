<script setup lang="ts">
import { ref } from "vue";

const title = ref(null)
const emit = defineEmits(['formChange'])

const onChangeInput = (e:any, key: string) => {
  const value = e.target.value;
  const payload = {
    [key]: value,
  }

  emit('formChange', payload);
}
const action = (e: any) => {
  e.preventDefault();
  const payload = {
    title: title.value,
  }

  emit('formChange', payload);
}

</script>

<template>
  <div class="w-full flex flex-col p-6 rounded-lg shadow-lg bg-white">
    <form>
      <div class="form-group mb-6">
        <label for="title" class="form-label inline-block mb-2 text-gray-700">Title</label>
        <input ref="title" type="title" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none" id="title"
          aria-describedby="titleHelp" placeholder="Enter title"
          @change="(e) => onChangeInput(e, 'title')"
        >
      </div>
      <div class="form-group mb-6">
        <label for="description" class="form-label inline-block mb-2 text-gray-700">Description</label>
        <textarea ref="description" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none" id="description"
          aria-describedby="descriptionHelp" placeholder="Enter description"
          @change="(e) => onChangeInput(e, 'description')"
        />
      </div>
      <div class="form-group mb-6">
        <label for="duration" class="form-label inline-block mb-2 text-gray-700">Duration (in minutes)</label>
        <input ref="duration" type="number" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none" id="duration"
          aria-describedby="durationHelp" placeholder="Enter duration"
          @change="(e) => onChangeInput(e, 'duration')"
        >
      </div>
      <div class="form-group mb-6">
        <label for="stars" class="form-label inline-block mb-2 text-gray-700">stars (separate by comma)</label>
        <input ref="stars" type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none" id="stars"
          aria-describedby="starsHelp" placeholder="Enter stars"
          @change="(e) => onChangeInput(e, 'stars')"
        >
      </div>
      <div class="form-group mb-6">
        <label for="genre" class="form-label inline-block mb-2 text-gray-700">Genre</label>
        <input ref="genre" type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none" id="genre"
          aria-describedby="genreHelp" placeholder="Enter genre"
          @change="(e) => onChangeInput(e, 'genre')"
        >
      </div>
      <div class="form-group mb-6">
        <label for="url" class="form-label inline-block mb-2 text-gray-700">Link Movie</label>
        <input ref="url" type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none" id="url"
          aria-describedby="urlHelp" placeholder="Enter url"
          @change="(e) => onChangeInput(e, 'url')"
        >
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>