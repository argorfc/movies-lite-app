<template>
  <div id="dashboard">
    <Sidebar />
      <main>
        <Header />
        <router-view />
      </main>
  </div>
</template>

<script setup lang="ts">
import Header from "./dashboard/Header.vue";
import Sidebar from "./dashboard/Sidebar.vue";

</script>

<style scoped>

</style>