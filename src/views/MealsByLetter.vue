<script setup lang="ts">
    import { computed, onMounted, watch } from 'vue';
    import store from '../store';
    import { useRoute } from 'vue-router';
    import Meals from '../components/Meals.vue';

    const route = useRoute();
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const meals = computed(() => store.state.mealsByLetter);

    watch(route, () => {
        const currentLetter = route.params.letter;
        store.dispatch('searchMealsByLetter', currentLetter)
    });

    onMounted(() => {
        const currentLetter = route.params.letter || letters[0];
        store.dispatch('searchMealsByLetter', currentLetter)
    })
</script>

<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by letter</h1>
    </div>
    <div class="flex flex-wrap gap-3 justify-center px-8 mb-6">
        <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters" :key="{letter}" class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">
            {{ letter }}
        </router-link>
    </div>
    
    <Meals :meals="meals" />
</template>