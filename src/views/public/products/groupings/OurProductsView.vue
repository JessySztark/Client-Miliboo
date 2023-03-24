<script setup>
import { productStore } from "@/stores/product.js";
import Product from "@/components/Product.vue";

const product = productStore();
</script>

<template>
  <h1>Our products</h1>
  <section>
    <Product v-for="prod in product.products" :product="prod"></Product>
  </section>
</template>

<style scoped></style>
