<script setup lang="ts">
import { useCartStore } from "../stores/recipeStore";
import axios, { AxiosError } from "axios";
import { ref } from "vue";


const cart = useCartStore();
var previews = ref([])
// previews.value = await axios.get(`http://127.0.0.1:8080/recipes`).data.previews; //не даст загрузить странциу, пока не получит данные (previews)
axios.get(`http://127.0.0.1:8080/recipes`).then((response: any) => {
  previews.value = response.data.previews;
}) //загрузит страницу, покажет пустые previews, когда бэкэнд даст ответ - обновит превьюз и их нарисует
</script>

<template>
  <main>

    <!-- <div v-for="preview in cart.previews">
      <router-link :to="`/recipe/${preview.id}`">{{ preview.title }}<br></router-link>
    </div> -->

    <div v-for="preview in previews" class="card" style="width: 18rem;">
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