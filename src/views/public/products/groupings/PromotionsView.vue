<script setup>
import { productStore } from "@/stores/product.js";
import Promotions from "@/components/Promotion.vue";

const product = productStore();
</script>

<template>
  <h1>Promotions</h1>
  <section class="grid">
    <Promotions v-for="prod in product.products" :product="prod"></Promotions>
  </section>
</template>

<style scoped>
/* Styles pour la grille de produits */
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
