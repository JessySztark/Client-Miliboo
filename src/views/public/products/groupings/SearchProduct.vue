<script setup>
import { productStore } from "@/stores/product.js";
import { onMounted, ref } from "vue";
import Product from "@/components/Product.vue";

const props = defineProps({
  name: {
    required: true,
  },
});

const product = productStore();
product.GetProduct(props.id);
const isLoading = ref(true);

onMounted(async () => {
  console.log(props.name);
  await product.GetProductsBySearch(props.name);
  isLoading.value = false;
  console.log(product.productsBySearch);
});
</script>

<template>
  <!-- {{ product.productsBySearch }} -->

  <h1>Produit(s) Corrsepondant(s)</h1>
  <section class="grid">
    <Product v-for="prod in product.productsBySearch" :product="prod"></Product>
  </section>
</template>
