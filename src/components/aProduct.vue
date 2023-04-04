<script setup>

const props = defineProps({
  product: {
    required: true,
  },
});



</script>


<template>
  <div class="product">
    <img
      :src="'/picture/products/' + product.value.product.productId + '.jpg'"
      :alt="product.value.product.productName"
    />
    <h3>{{ product.value.product.productName }}</h3>
        <div class="strikethrough">{{ product.value.product.productPrice }}€</div>
    <router-link :to="'/produits/' + product.value.product.productId"></router-link>
    <div class="qty">
    <button >-</button>
  Quantité : 
  <button >+</button>
  </div>
  </div>
</template>

<style scoped>
.product {
  width: calc(25% - 2vw); /* 4 produits par ligne */
  margin-bottom: 2vw;
  border: 1px solid #ddd;
  border-radius: 1vh;
  overflow: hidden;
  position: relative;
}

.qty{
  align-items:center; 
}

.product img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.product h3 {
  margin: 1vh;
  font-size: 18px;
  text-align: center;
}

.product .price {
  display: flex;
  margin: 5vh 2vh;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.price div {
  margin-right: 2vh;
}



.product .discount {
  position: absolute;
  top: 1vh;
  right: 1vh;
  background-color: #000000;
  color: #ffffff;
  font-size: 14px;
  padding: 0.7vh 1vh;
  border-radius: 0.7vh;
}

.product a {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.product a:hover {
  opacity: 0.3;
  background-color: rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 767px) {
  .product {
    width: 45%;
  }
}
</style>
