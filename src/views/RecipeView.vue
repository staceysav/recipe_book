<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useCartStore } from "../stores/recipeStore";


const route = useRoute()
const router = useRouter()
const cart = useCartStore();

const current_recipe_id = <string>route.params.id;
if (!(current_recipe_id in cart.recipes)) {
  router.push("/error");
}

</script>

<template>
  <div class="recipe">
    <button type="button" class="btn btn-outline-dark"><router-link to="/">Back</router-link></button>

    <h1>{{ cart.recipes[current_recipe_id].title }}</h1>
    <p>{{ cart.recipes[current_recipe_id].description }}</p>
    <h5>Cooking time: {{ cart.recipes[current_recipe_id].time_to_cook }}</h5>
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
        <tr v-for="item in cart.recipes[current_recipe_id].ingredients">
          <td>{{ item.title }}</td>
          <td>{{ item.amount }} </td>
          <td>{{ item.unit }}</td>
        </tr>

      </tbody>
    </table>

    <h3>How to cook</h3>
    <div v-for="item in cart.recipes[current_recipe_id].instruction" class="card">
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">{{ item.comment }}</p>
      </div>
      <img v-show=" item.image_url !== null" src="{{ item.image_url }}" class="card-img-bottom" alt="img">
    </div>

  </div>
</template>

<style>

</style>
