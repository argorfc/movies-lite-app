<script setup lang="ts">
const props = withDefaults(
    defineProps<{
      show: boolean;
      title?: string,
      onClose?: Function;
      onSubmit?: Function;
    }>(),
    {}
)
const emit = defineEmits(['onClose, onSubmit'])
const onCloseModal = () => {
  emit('onClose');
}

const onSubmitModal = () => {
  emit('onSubmit');
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="props.show"
      class="fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center"
      id="modal-teleport"
    >
      <div class="relative w-full max-w-lg pointer-events-none">
        <div
          class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
              {{ props.title }}
            </h5>
            <button type="button"
              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body relative p-4">
            <slot />
          </div>
          <div
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gary-800 active:shadow-lg transition duration-150 ease-in-out"
              @click="onCloseModal"
            >
              Close
            </button>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              @click="onSubmitModal"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

</style>