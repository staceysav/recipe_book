<script setup lang="ts">
import { useCartStore as useRecipeStore } from "../stores/recipeStore";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";


const route = useRoute()
const router = useRouter()
const store = useRecipeStore();

const props = defineProps<{recipe_id: string}>();

const recipe: any = ref(null);
try {
    recipe.value = await store.recipe(props.recipe_id); // чтобы промис превратить в данные (array) нужно поставить await
} catch {
    router.push("/error");
}

</script>

<template>
    <div class="recipe">
      <button type="button" class="btn btn-outline-dark">
        <router-link to="/">Back</router-link>
      </button>
      <!-- {{ store.recipe("1") }} -->
      <h1>{{ recipe.title }}</h1>
      <p>{{ recipe.description }}</p>
      <h5>Cooking time: {{ recipe.time_to_cook }}</h5>
      <!-- <p>{{current_recipe_id}}</p> -->
      <!-- <p>{{ cart.recipes[current_recipe_id].ingredients }}</p> -->
      <h3>Ingredients:</h3>
      <!-- <ul> -->
      <!-- <li v-for="item in cart.recipes[current_recipe_id].ingredients">
        {{ item.title }} - {{ item.amount }} {{ item.unit }}
      </li>
    </ul> -->

      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">Ingredient</th>
            <th scope="col">Amount</th>
            <th scope="col">Units</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in recipe.ingredients">
            <td>{{ item.title }}</td>
            <td>{{ item.amount }} </td>steps
            <td>{{ item.unit }}</td>
          </tr>

        </tbody>
      </table>

      <h3>How to cook</h3>
      <div v-for="item in recipe.steps" class="card">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.comment }}</p>
        </div>
        <img v-show="item.image_url !== null" src="{{ item.image_url }}" class="card-img-bottom" alt="img">
      </div>

    </div>
</template>