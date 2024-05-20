<script setup lang="ts"></script>
<template>
    <header class=" bg-white shadow-md h-16 flex justify-between items-stretch">
        <router-link class="inline-flex items-center p-5 text-orange-500 font-bold" :to="{name: 'home'}">Home</router-link>
        <div class="flex items-center gap-1">
          <router-link class="inline-flex items-center px-5 transition-colors hover:bg-orange-500 hover:text-white h-full" :to="{name: 'byName'}">Search by Meal</router-link>
          <router-link class="inline-flex items-center px-5 transition-colors hover:bg-orange-500 hover:text-white h-full" :to="{name: 'byLetter'}">Search by Letters</router-link>
          <router-link class="inline-flex items-center px-5 transition-colors hover:bg-orange-500 hover:text-white h-full" :to="{name: 'ingredients'}">Search by Ingredients</router-link>
        </div>
    </header>
</template>