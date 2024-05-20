export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals;
}
export function setMealById(state, meal) {
    state.mealById[meal.idMeal] = meal;
}
export function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals;
}
export function setMealsByIngredient(state, meals) {
    state.mealsByIngredient = meals;
}
export function setIngredient(state, ingredient) {
    state.ingredient = ingredient;
}