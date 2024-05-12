<script setup lang="ts">
    import { computed, onMounted } from 'vue';
    import store from '../store';
    import axiosClient from '../axiosClient'

    const meals = computed(() => store.state.meals);
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    onMounted(async () => {
        const response = await axiosClient.get('/list.php?i=list');
        const ingredients = response.data;
        console.log(response.data)
    });
</script>

<template>
    <div class="flex flex-col p-8">
        <div class="flex gap-2 justify-center mt-2">
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters" :key="{letter}">
                {{ letter }}
            </router-link>
        </div>
    </div>
</template>

<style scoped>
    
</style>