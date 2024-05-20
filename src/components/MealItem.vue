<script setup lang="ts">
    import YouTubeButton from '../components/YouTubeButton.vue';
    import { Meal } from '../types';
    import { truncateWords } from '../filters';

    defineProps<{
        meal: Meal
    }>();
</script>

<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <router-link :to="{name: 'mealDeatils', params: { id: meal.idMeal }}">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class=" rounded-t-xl w-full h-48 object-cover">
        </router-link>
        <div class="p-3">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <p class=" mb-4">{{ truncateWords(meal.strInstructions, 20) }}</p>
            <div class="flex items-center justify-between">
                <YouTubeButton :href="meal.strYoutube" />
            </div>
        </div>
    </div>
</template>