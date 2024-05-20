import axiosClient from "../axiosClient";
import { ActionContext } from "../types";

export function searchMeals({commit}: ActionContext, keyword : string) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            commit('setSearchedMeals', data.meals)
        })
}
export function searchMealsByLetter({commit} : ActionContext, letter : string) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            commit('setMealsByLetter', data.meals)
        })
}
export function searchMealsByIngredient({commit}: ActionContext, ingredient: string) {
    axiosClient.get(`filter.php?i=${ingredient}`)
        .then(({ data }) => {
            commit('setMealsByIngredient', data.meals)
        })
}

export function getMealById({commit}: ActionContext, idMeal: string) {
    axiosClient.get(`lookup.php?i=${idMeal}`)
        .then(({ data }) => {
            commit('setMealById', data.meals[0] || null)
        })
}  