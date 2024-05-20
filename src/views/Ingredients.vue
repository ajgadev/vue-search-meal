<script setup lang="ts">
    import { onMounted, ref, computed } from 'vue';
    import axiosClient from '../axiosClient';
    import { Ingredient } from '../types';

    const ingredients = ref<Ingredient[]>([]);
    const keyword = ref('');
    const computedIngredients = computed(() => {
        if (!keyword.value) return ingredients.value;
        return ingredients.value.filter(ingredient => ingredient.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
    });

    onMounted(() => {
        axiosClient.get('list.php?i=list').then(({data}) => {
            ingredients.value = data.meals as Ingredient[];
        })
    })
</script>

<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>

        <div class="pb-4">
            <input 
                v-model="keyword"
                type="text" 
                class="rounded border-2 border-gray-200 w-full" 
                placeholder="Search for Meals">
        </div>

        <router-link 
            v-for="ingredient of computedIngredients" :key="ingredient.idIngredient" 
            :to="{name: 'byIngredient', params: { ingredient: ingredient.strIngredient }}" 
            class="block bg-white rounded p-3 mb-3 shadow"
        >
            <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
            <p>{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
</template>