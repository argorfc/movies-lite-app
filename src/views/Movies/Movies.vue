<script setup lang="ts">
import { ref } from "vue";
import Table from "@/components/Table.vue"
import Button from "@/components/Button.vue"
import Modal from "@/components/Modal.vue"

const showModal = ref(false);

const onModalCreateShow = (payload: any) => {
  showModal.value = !payload
}

const onModalCreateSubmit = () => {
  alert('submit');
}

</script>

<template>
  <div id="movies" class="w-full flex flex-col px-4">
    <div class="flex flex-col gap-4">
      <h1>Movies</h1>
      <div id="table-list-movies" class="flex flex-col gap-4">
        <div class="flex justify-between items-center">
          <h4>Create Movie</h4>
          <Button
            text="Create"
            @onClick="onModalCreateShow(showModal)"
          />
        </div>
        <Table />
      </div>
    </div>
    <Modal
      :show="showModal"
      title="Create Movie"
      @onClose="showModal = false"
      @onSubmit="onModalCreateSubmit"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sint voluptatum commodi reiciendis vel consequatur sapiente minus asperiores voluptatem aperiam deleniti nisi debitis saepe cumque similique, neque optio? Recusandae, quas.</p>
    </Modal>
  </div>
</template>

<style scoped>

</style>