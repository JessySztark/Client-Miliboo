<script setup>
import { computed } from "vue";

const props = defineProps({
  product: {
    required: true,
  },
});
</script>

<template>
  <div class="product" v-if="product.p.productDiscount != 0">
    <img
      :src="'picture\\products\\' + product.p.productId + '.jpg'"
      :alt="product.p.productName"
    />
    <h3>{{ product.p.productName }}</h3>
    <div>
      <div class="discount">- {{ product.p.productDiscount * 100 }}%</div>
      <div class="price">
        <div>
          {{
            (
              product.p.productPrice *
              (1 - product.p.productDiscount)
            ).toPrecision(5)
          }}€
        </div>
        <div class="strikethrough">{{ product.p.productPrice }}€</div>
      </div>
    </div>
    <router-link :to="'/produits/' + this.product.p.productId"></router-link>
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

.strikethrough {
  text-decoration: line-through;
  color: rgb(213, 211, 211);
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
