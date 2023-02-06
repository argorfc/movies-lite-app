<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import TableMovies from "@/components/Table.vue"
import ButtonCommon from "@/components/Button.vue"
import ModalCommon from "@/components/Modal.vue"
import FormMovie from "@/components/FormMovie.vue"
import axios from "axios";

const baseURL = "http://localhost:3001/movies";
const initialFormState = {
  title: '',
  description: '',
  duration: 0,
  stars: '',
  genre: ''
};
const showModal = ref(false);
let movies = ref([]);
let formAddMovie = reactive({...initialFormState})

const fetchMovies = onMounted(async () => {
  try {
      const res = await axios.get(baseURL);
      movies.value = res.data;
    } catch (e) {
      console.error(e);
    }
})

const onModalCreateShow = (payload: any) => {
  showModal.value = !payload
}

const onChangeFormMovie = (payload: any) => {
  Object.keys(payload).forEach(key => {
    formAddMovie[key] = payload[key]
  })
}

const onModalCreateSubmit = async () => {
  const isValid = checkValidForm();
  if (isValid) {
    try {
      const payload = {
        ...formAddMovie
      }
      const res = await axios.post(baseURL, payload);
      movies.value = [...movies.value, res.data]
      showModal.value = !showModal.value
      formAddMovie = {...initialFormState}
    } catch (e) {
      console.error(e);
    }
  }
   else {
    alert("Please fill are fields!")
   }
}

const checkValidForm = () => {
  const isValid = Object.values(formAddMovie).every(value => {
    if (!value) {
      return false;
    }
    return true;
  });

  return isValid;
}

</script>

<template>
  <div id="movies" class="w-full flex flex-col px-4">
    <div class="flex flex-col gap-4">
      <h1>Movies</h1>
      <div id="table-list-movies" class="flex flex-col gap-4">
        <div class="flex justify-between items-center">
          <h4>Create Movie</h4>
          <button-common
            text="Create"
            @onClick="onModalCreateShow(showModal)"
          />
        </div>
        <table-movies :data="movies" />
      </div>
    </div>
    <modal-common
      :show="showModal"
      title="Add Movie"
      @onClose="showModal = false"
      @onSubmit="onModalCreateSubmit"
    >
    <slot name="body">
      <form-movie @formChange="onChangeFormMovie" />
    </slot>
    </modal-common>
  </div>
</template>

<style scoped>

</style>