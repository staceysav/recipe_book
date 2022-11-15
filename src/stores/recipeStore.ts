import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios, { AxiosError } from "axios";


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
    steps: Array<Step>
    image_url: String | null
}

interface Step {
    title: String
    comment: String
    image_url: String | null
}

export interface RecipePreview {
    id: String
    title: String
    image_url: String | null
    description: String
    time_to_cook: String
}

export const useCartStore = defineStore('recipes', {
    state() {
        return {
            recipes: {} as { [id: string]: Recipe; },
            previews: [] as Array<RecipePreview>
        }
    },
    getters: {
        // previews(state): Array<RecipePreview> {
        //     let a: Array<RecipePreview> = [];
        //     for (const recipe_id in state.recipes) {
        //         a.push({ id: recipe_id, 
        //             title: state.recipes[recipe_id].title, 
        //             image_url: state.recipes[recipe_id].image_url }
        //         )
        //     }
        //     return a
        // }
        recipe(state) {
            return async (recipe_id: string): Promise<Recipe> => {   // recipe returns function (that returns array)
                return (await axios.get(`http://127.0.0.1:8080/recipes/${recipe_id}`)).data
            }
        }
    },
    actions: {
        setPreviews(previews: Array<RecipePreview>) {
            this.previews = previews
        },
        updatePreviews() {
            axios.get(`http://127.0.0.1:8080/recipes`).then((response: any) => {
                this.previews = response.data.previews; //this - элемент в этом state
            })
        }
    },
    persist: {
        enabled: true
    }
})
