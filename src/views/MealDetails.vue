<script setup lang="ts">
    import { computed,onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import store from '../store';
    import YouTubeButton from '../components/YouTubeButton.vue';

    // const meal = ref({});
    const route = useRoute();
    const idMeal = route.params.id;
    const meal = computed(() => store.state.mealById[idMeal]);

    onMounted(() => {
        if (!meal.value && idMeal != null) {
            store.dispatch('getMealById', idMeal);
        }
    });
</script>

<template>
    <div class="max-w-[800px] mx-auto" v-if="meal">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="">

        <div class="grid grid-cold-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong>Category: {{ meal.strCategory }}</strong>
            </div>
            <div>
                <strong>Area: {{ meal.strArea }}</strong>
            </div>
            <div>
                <strong>Tags: {{ meal.strTags }}</strong>
            </div>
        </div>

        <div class="my-4">
            {{ meal.strInstructions }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                <template v-for="(_, index) of new Array(20)">
                    <ul v-if="meal[`strIngredient${index + 1}`]">
                        {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
                    </ul>
                </template>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                <template v-for="(_, index) of new Array(20)">
                    <ul v-if="meal[`strMeasure${index + 1}`]">
                        {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
                    </ul>
                </template>
            </div>
        </div>

        <div class="mt-5">
            <YouTubeButton :href="meal.strYoutube">Check on YouTube</YouTubeButton>
            <a :href="meal.strSource"
                target="_blank" 
                class="px-3 ml-3 py-2 rounded border-2 border-transparent bg-indigo-200 hover:bg-indigo-300 text-indigo-800 hover:text-white transition-colors cursor-pointer"
            > 
                Source
            </a>
        </div>
    </div>
</template>