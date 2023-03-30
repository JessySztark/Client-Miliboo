<script setup>
import { productStore } from "@/stores/product.js";
import Promotions from "@/components/Promotion.vue";
import { reactive, ref } from "vue";

const product = productStore();
const sortedProducts = reactive({ value: [] });
const showSortMenu = ref(false);

function sortProductsByPriceAsc() {
  sortedProducts.value = product.products.slice().sort((a, b) => {
    return a.p.productDiscount - b.p.productDiscount;
  });
}

function sortProductsByPriceDesc() {
  sortedProducts.value = product.products.slice().sort((a, b) => {
    return b.p.productDiscount - a.p.productDiscount;
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

      <div class="sort-menu">
        <button class="sort-menu-button" @click="toggleSortMenu">
          Trier par promotion
        </button>
        <div v-show="showSortMenu" class="sort-menu-container">
          <button class="sort-button" @click="sortProductsByPriceDesc">
            Meilleurs promotions
          </button>
          <button class="sort-button" @click="sortProductsByPriceAsc">
            Moins bonnes promotions
          </button>
          <button class="sort-button" @click="sortNormal">
            Annuler le tri
          </button>
        </div>
      </div>
    </div>
    <section class="grid">
      <Promotions
        v-for="prod in sortedProducts.value.length > 0
          ? sortedProducts.value
          : product.products"
        :product="prod"
      ></Promotions>
    </section>
  </div>
</template>

<style scoped>
/* Styles pour la grille de produits */
p {
  font-size: 15px;
}
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
  margin-top: 10px;
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
