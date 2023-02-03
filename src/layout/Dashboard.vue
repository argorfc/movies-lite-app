
<script setup lang="ts">
import Header from "./dashboard/Header.vue";
import Sidebar from "./dashboard/Sidebar.vue";

</script>

<template>
  <div id="dashboard" class="w-full relative flex">
    <Sidebar />
      <main class="w-full pl-60 flex  flex-col gap-4 min-h-screen">
        <Header />
        <router-view />
      </main>
  </div>
</template>

<style scoped>

</style>