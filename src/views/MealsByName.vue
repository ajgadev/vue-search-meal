<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import store from '../store';
    import { useRoute, useRouter } from 'vue-router';
    import MealItem from '../components/MealItem.vue';

    const route = useRoute();
    const router = useRouter();
    // const idMeal = route.params.idMeal;
    
    const keyword = ref('');
    const meals = computed(() => store.state.searchedMeals);
    console.log(meals.value);
    const searchMeals = () => {
        router.push({ name: 'byName', params: { name: keyword.value } });
        store.dispatch('searchMeals', keyword.value)
    }

    onMounted(() => {
        if (Array.isArray(route.params.name)) {
            keyword.value = route.params.name.join(' ');
        } else {
            keyword.value = route.params.name;
        }
        if (keyword.value) {
            searchMeals();
        }
    });
</script>

<template>
    <div class="p-8 pb-0">
        <input 
            v-model="keyword"
            @change="searchMeals"
            type="text" 
            class="rounded border-2 border-gray-200 w-full" 
            placeholder="Search for Meals">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>