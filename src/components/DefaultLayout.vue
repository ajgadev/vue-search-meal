<script setup lang="ts">
  import Navbar from './Navbar.vue';
</script>

<template>
  <Navbar />
  <main>
    <div class="max-w-[1200px] mx-auto">
      <router-view></router-view>
    </div>
  </main>
</template>