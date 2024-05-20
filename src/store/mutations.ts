import { State, Meal, Ingredient } from "@/types";

export function setSearchedMeals(state: State, meals: Meal[]) {
    state.searchedMeals = meals;
}
export function setMealById(state: State, meal: Meal) {
    state.mealById[meal.idMeal] = meal;
}
export function setMealsByLetter(state: State, meals: Meal[]) {
    state.mealsByLetter = meals;
}
export function setMealsByIngredient(state: State, meals: Meal[]) {
    state.mealsByIngredient = meals;
}
export function setIngredient(state: State, ingredient: Ingredient) {
    state.ingredient = ingredient;
}