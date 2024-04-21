<script setup lang="ts">
    import Navbar from './Navbar.vue';
</script>

<template>
    <div class="bg-gray-100 h-full">
    <Navbar />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>