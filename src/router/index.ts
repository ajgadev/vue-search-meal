import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import DefaultLayout from '../components/DefaultLayout.vue';

const routes:RouteRecordRaw[]  = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealsByIngredient
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;