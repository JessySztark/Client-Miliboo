<script setup>
import { productStore } from "@/stores/product.js";
import { onMounted, ref, reactive } from "vue";
import Product from "@/components/Product.vue";

const props = defineProps({
  name: {
    required: true,
  },
});

const product = productStore();
const isLoading = ref(true);
const sortedProducts = reactive({ value: [] });
const showSortMenu = ref(false);

function sortProductsByPriceAsc() {
  sortedProducts.value = product.products.slice().sort((a, b) => {
    return a.p.productPrice - b.p.productPrice;
  });
}

function sortProductsByPriceDesc() {
  sortedProducts.value = product.products.slice().sort((a, b) => {
    return b.p.productPrice - a.p.productPrice;
  });
}

function sortNormal() {
  sortedProducts.value = product.products.slice().sort((a, b) => {
    return a.p.productPrice + b.p.productPrice;
  });
}
function toggleSortMenu() {
  showSortMenu.value = !showSortMenu.value;
}
onMounted(async () => {
  console.log(props.name);
  await product.GetProductsBySearch(props.name);
  isLoading.value = false;
  console.log(product.productsBySearch);
});
</script>

<template>

  <h1>Produit(s) Corrsepondant(s)</h1>
  <div class="sort-menu">
    <button class="sort-menu-button" @click="toggleSortMenu">
      Trier par prix
    </button>
    <div v-show="showSortMenu" class="sort-menu-container">
      <button class="sort-button" @click="sortProductsByPriceAsc">
        Trier du moins cher au plus cher
      </button>
      <button class="sort-button" @click="sortProductsByPriceDesc">
        Trier du plus cher au moins cher
      </button>
      <button class="sort-button" @click="sortNormal">Annuler le tri</button>
    </div>
  </div>

  <div v-if="product.products.length == null">
    Aucun produit disponible pour votre recherche.
  </div>
  <div v-else>
    <section class="grid">
      <Product
        v-for="prod in sortedProducts.value.length > 0
          ? sortedProducts.value
          : product.products"
        :product="prod"
      ></Product>
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

.sort-menu {
  position: relative;
  display: inline-block;
  margin-right: 20px;
}

.sort-menu-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.sort-menu-button:hover {
  background-color: #3e8e41;
}

.sort-menu-container {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-in-out, visibility 0s linear 0.2s;
}

.sort-menu:hover .sort-menu-container {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s ease-in-out, visibility 0s linear 0s;
}

.sort-button {
  display: block;
  width: 100%;
  background-color: transparent;
  color: #333;
  padding: 5px;
  border: none;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease-in-out;
}

.sort-button:hover {
  background-color: #f2f2f2;
}

.sort-button:last-child {
  border-bottom: none;
}
</style>
