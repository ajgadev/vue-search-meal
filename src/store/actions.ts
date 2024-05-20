import axiosClient from "../axiosClient";

export function searchMeals({commit}, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            commit('setSearchedMeals', data.meals)
        })
}

export function getMealById({commit}, idMeal) {
    axiosClient.get(`lookup.php?i=${idMeal}`)
        .then(({ data }) => {
            commit('setMealById', data.meals[0] || null)
        })
}  