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
    <div class="flex gap-2 justify-center mt-2">
        <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters" :key="{letter}">
            {{ letter }}
        </router-link>
    </div>
    
    <Meals :meals="meals" />
</template>