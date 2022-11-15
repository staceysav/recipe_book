<script setup lang="ts">
import Recipe from "../components/Recipe.vue";
import { useRoute, useRouter } from "vue-router";


const route = useRoute()
const router = useRouter()

const current_recipe_id = <string>route.params.id;


// if (!(current_recipe_idW in cart.recipes)) {
//   router.push("/error");
// }

</script>

<template>
  <Suspense>
    <!-- https://stackoverflow.com/questions/64009348/why-did-i-get-blank-empty-content-when-i-used-async-setup-in-vue-js-3 -->
    <Recipe :recipe_id="current_recipe_id" />

    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<style>

</style>
