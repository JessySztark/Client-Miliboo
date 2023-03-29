<script setup>
import { productStore } from "@/stores/product.js";
import Promotions from "@/components/Promotion.vue";

const product = productStore();
</script>

<template>
  <div class="container">
    <div>
      <h1>Les promotions</h1>
      <p>
        Envie de vous faire plaisir à prix réduit, les promotions sur les
        meubles design se déroulent chez miliboo tout au long de l'année.
      </p>
      <p>
        Venez profiter des promotions sur les meubles design et autres éléments
        déco pour agencer votre intérieur avec style.
      </p>
    </div>
    <section class="grid">
      <Promotions v-for="prod in product.products" :product="prod"></Promotions>
    </section>
  </div>
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
