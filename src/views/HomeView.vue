<script setup lang="ts">
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCartStore } from "../stores/recipeStore";
const cart = useCartStore();
</script>

<template>
  <main>

    <!-- <div v-for="preview in cart.previews">
      <router-link :to="`/recipe/${preview.id}`">{{ preview.title }}<br></router-link>
    </div> -->

    <div v-for="preview in cart.previews" class="card" style="width: 18rem;">
      <img v-if=" preview.image_url !== null" :src="`${preview.image_url}`" class="card-img-top" alt="dish">
      <div class="card-body">
        <router-link :to="`/recipe/${preview.id}`">{{ preview.title }}<br></router-link>
      </div>
    </div>
  </main>
</template>

<style>
  .card {
    margin: 1rem;
  }
</style>