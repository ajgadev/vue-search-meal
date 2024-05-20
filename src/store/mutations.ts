export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals;
}
export function setMealById(state, meal) {
    state.mealById[meal.idMeal] = meal;
}