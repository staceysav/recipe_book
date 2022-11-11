import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Ingredient {
    title: String
    amount: Number
    unit: String
}

interface Recipe {
    title: String
    description: String
    time_to_cook: String
    ingredients: Array<Ingredient>
    instruction: Array<Step>
    image_url: String | null
}

interface Step {
    title: String
    comment: String
    image_url: String | null
}

interface RecipePreview {
    id: String
    title: String
    image_url: String | null
}

export const useCartStore = defineStore('drfrd', {
    state() {
        return {
            recipes: {
                "1": {
                    title: "Soup",
                    description: "Tasty soup",
                    time_to_cook: "5h",
                    ingredients: [
                        {
                            title: "onions",
                            amount: 5,
                            unit: "items"
                        },
                        {
                            title: "carrots",
                            amount: 3,
                            unit: "ps"
                        }
                    ],
                    instruction: [
                        {
                            title: "Chop carrots",
                            comment: "Chop chop the carrots",
                            image_url: null,
                        }
                    ],
                    image_url: "/public/soup.png",
                },
                "2": {
                    title: "Boiled potatoes",
                    description: "Easy recipe of boiled potatoes",
                    time_to_cook: "30m",
                    ingredients: [
                        {
                            title: "butter",
                            amount: 100,
                            unit: "g"
                        },
                        {
                            title: "potatoes",
                            amount: 7,
                            unit: "ps"
                        }
                    ],
                    instruction: [
                        {
                            title: "Chop potatoes",
                            comment: "Chop potatoes to speed up the cooking process.",
                            image_url: null,
                        },
                        {
                            title: "Boil potatoes",
                            comment: "Put chopped potatoes into cold water and cook until done.",
                            image_url: null,
                        },
                        {
                            title: "Add butter",
                            comment: "Put potatoes on the plate and add butter. Mm, yummy. Bon appetit!",
                            image_url: null,
                        }
                    ],
                    image_url: "/public/potatoes.png",
                },

            } as { [id: string]: Recipe; }
        }
    },
    getters: {
        previews(state): Array<RecipePreview> {
            let a: Array<RecipePreview> = [];
            for (const recipe_id in state.recipes) {
                a.push({ id: recipe_id, 
                    title: state.recipes[recipe_id].title, 
                    image_url: state.recipes[recipe_id].image_url }
                )
            }
            return a
        }

    },
    actions: {
    },
    persist: {
      enabled: true
    }
})
