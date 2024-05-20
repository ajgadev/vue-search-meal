<script setup lang="ts">
    import MealItem from '../components/MealItem.vue';
    import { Meal } from '../types';
    
    defineProps<{
        meals: Meal[] | undefined
    }>();
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div class="flex justify-center text-gray-600 p-8" v-if="!meals || meals.length == 0">There are no meals</div>
</template>