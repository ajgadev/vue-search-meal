import { Ingredient, Meal } from "@/types";

export default {
    searchedMeals: [] as Meal[],
    mealById: {} as { [key: string]: Meal },
    mealsByLetter: [] as Meal[],
    mealsByIngredient: [] as Meal[],
    ingredient: {} as Ingredient
}