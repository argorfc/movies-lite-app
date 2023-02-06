<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import TableMovies from "@/components/Table.vue"
import ButtonCommon from "@/components/Button.vue"
import ModalCommon from "@/components/Modal.vue"
import FormMovie from "@/components/FormMovie.vue"
import {apiGetMovies, apiPostMovieViews, apiPutMovieViews} from "@/api/movies"

const initialFormState = {
  title: '',
  description: '',
  duration: 0,
  stars: '',
  genre: ''
};
const showModal = ref(false);
const isEditable = ref(false);
let movies = ref([]);
let formAddMovie = reactive({...initialFormState})

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
      if (!isEditable.value) {
        const res = await apiPostMovieViews(payload);
        movies.value = [...movies.value, res.data]
        onCloseModalCreate();
      } else {
        const res = await apiPutMovieViews(payload);
        console.log(res);
        isEditable.value = false;
        fetchMovies();
        onCloseModalCreate();
      }
      
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

const onClickEditAction = (payload: any) => {
  showModal.value = true;
  isEditable.value = true;
  formAddMovie = {...payload}
}

const onCloseModalCreate = () => {
  formAddMovie = {...initialFormState}
  showModal.value = false
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
        <table-movies :data="movies" @onEdit="onClickEditAction" />
      </div>
    </div>
    <modal-common
      :show="showModal"
      title="Add Movie"
      @onClose="onCloseModalCreate"
      @onSubmit="onModalCreateSubmit"
    >
    <slot name="body">
      <form-movie @formChange="onChangeFormMovie" :movie="formAddMovie" :isEditable="isEditable" />
    </slot>
    </modal-common>
  </div>
</template>

<style scoped>

</style>