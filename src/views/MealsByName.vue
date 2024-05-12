<script setup lang="ts">
    import { computed, ref } from 'vue';
    import axiosClient from '../axiosClient';
import store from '../store';

    const keyword = ref('');
    const meals = computed(() => store.state.searchedMeals);
    const searchMeals = () => {
        store.dispatch('searchMeals', keyword.value)
    }
</script>

<template>
    <div class="p-8">
        <input 
            v-model="keyword"
            @change="searchMeals"
            type="text" 
            class="rounded border-2 border-gray-200 w-full" 
            placeholder="Search for Meals">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meals.idMeal" class="bg-white shadow rounded-xl">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class=" rounded-t-xl w-full h-48 object-cover">
            <div class="p-3">
                <h3 class="font-bold">{{ meals.strMeal }}</h3>
                <p class=" mb-4"> asdasda dasd asd asdas asda sd asda sda sdasdasdas das dasd as</p>
                <div class="flex items-center justify-between">
                    <a :href="meals.strYouTube" target="_blank" class="px-3 py-2 rounded border-2 text-white bg-red-500 border-red-600 hover:bg-red-600 hover:text-white transition-colors">
                        YouTube
                    </a>
                    <router-link to="/" class="px-3 py-2 rounded border-2 text-white bg-purple-500 border-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
                        View
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>