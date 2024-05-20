<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import axiosClient from '../axiosClient';
    import { Meal } from '../types';
    import Meals from '../components/Meals.vue';

    const meals = ref<Meal[]>([]);

    onMounted(async () => {
        for (let i = 0; i < 10; i++) {
            axiosClient
            .get(`random.php`)
            .then(({ data }) => {
                if (!data.meals) return;
                meals.value.push(data.meals[0] as Meal);
            });
        }
    })
</script>

<template>
    <div class="p-8 pb-0 text-orange-500">
        <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
    <Meals :meals="meals" />
</template>

<style scoped>
    
</style>