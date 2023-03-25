<script setup>
import { productStore } from "@/stores/product.js";
import Product from "@/components/Product.vue";

const product = productStore();
</script>

<template>
  <h1>Our products</h1>
  <section class="grid">
    <Product v-for="prod in product.products" :product="prod"></Product>
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
