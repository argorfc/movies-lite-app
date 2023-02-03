<script setup lang="ts">
import router from '@/router';
import FormLogin from '@/components/FormLogin.vue';
const onSubmitAction = (payload: any) => {
  if (!payload.email && !payload.password) {
    return;
  }
  router.push({ path: '/home' })
}
</script>

<template>
  <div id="login-page" class="flex flex-row w-full justify-center items-center">
    <FormLogin @onSubmit="onSubmitAction" />
  </div>
</template>

<style scoped>

</style>