<script setup lang="ts">
const props = withDefaults(
    defineProps<{
      text: string;
      onClick?: (val: any) => void;
    }>(),
    {}
)
const emits = defineEmits(['onClick'])
const onClick = () => {
  emits('onClick');
}
</script>

<template>
  <button
    type="button"
    class="inline-block px-6 py-2.5 bg-transparent text-pink-600 font-medium text-xs leading-tight uppercase rounded border border-pink-700 hover:text-pink-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
    @click="onClick"
  >
    {{ props.text }}
  </button>
</template>

<style scoped>
</style>
