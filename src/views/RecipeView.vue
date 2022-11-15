<script setup lang="ts">
import Recipe from "../components/Recipe.vue";
import { useRoute, useRouter } from "vue-router";


const route = useRoute()
const router = useRouter()

const current_recipe_id = <string>route.params.id;

</script>

<template>
  <Suspense>   <!-- https://stackoverflow.com/questions/64009348/why-did-i-get-blank-empty-content-when-i-used-async-setup-in-vue-js-3 -->
    <Recipe :recipe_id="current_recipe_id" />
  </Suspense>
</template>

<style>

</style>
