<script setup>
import { productStore } from "@/stores/product.js";
import { cartStore } from "@/stores/cart.js";
import { onMounted, onUpdated, ref, reactive } from "vue";
import axios from "axios";
import Comment from "@/components/Comment.vue";

const props = defineProps({
  id: {
    required: true,
  },
});

const product = productStore();
const myCart = cartStore();
const isLoading = ref(true);
const theProduct = reactive({ value: null });
const comments = reactive({ value: null });

onMounted(async () => {
  await axios
    .get(
      "https://api-miliboo.azurewebsites.net/api/Products/GetProductPhotoColorById/" +
        props.id
    )
    .then((response) => {
      theProduct.value = response.data;
    });

  await axios
    .get(
      "https://api-miliboo.azurewebsites.net/api/Comments/GetCommentByForeignKey/" +
        theProduct.value.join.productTypeId
    )
    .then((response) => {
      comments.value = response.data;
    });
});
</script>

<template>
  <div class="product-container" v-if="theProduct.value != null">
    <div class="product-image">
      <img
        :src="
          '/picture/products/' + theProduct.value.product.productId + '.jpg'
        "
        :alt="product.productName"
      />
    </div>
    <div class="product-details">
      <h1 class="product-name">{{ theProduct.value.product.productName }}</h1>
      <p class="product-price">{{ theProduct.value.product.productPrice }}€</p>
      <p class="product-price">
        Article(s) en stock(s) : {{ theProduct.value.product.nbStockProduct }}
      </p>
      <p class="product-description">
        {{ theProduct.value.product.productDescription }}
      </p>
      <h3 class="product-colors-title">Colori(s) disponible(s) :</h3>
      <p class="product-colors">{{ theProduct.value.join.colorName }}</p>
      <RouterLink :to="'/cart/'"
        ><button @click="myCart.addToCart(theProduct)" class="btn-cart">
          Passer commandesss
        </button></RouterLink
      >
    </div>

    <div class="product-comments" v-if="comments.value != null">
      <h2>Commentaire(s)</h2>
      <div
        v-for="comment in comments.value"
        :key="comment.commentId"
        class="comment"
      >
        <h3>{{ comment.title }}</h3>
        <p>{{ comment.description }}</p>
        <p>Note : {{ comment.mark }}/5</p>
        <p>Publié le : {{ comment.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// ...
</script>

<style scoped>
.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.product-image {
  flex-basis: 40%;
}

.product-image img {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  margin-bottom: 20px;
}

.product-details {
  flex-basis: 50%;
  padding: 20px;
}

.product-name {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
}

.product-price {
  font-size: 20px;
  margin-bottom: 20px;
}

.product-description {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.product-colors-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.product-colors {
  font-size: 16px;
  margin-bottom: 20px;
}

.btn-cart {
  background-color: #ff5722;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-cart:hover {
  background-color: #e64a19;
}

.product-comments {
  width: 100%;
  margin-top: 20px;
}

.comment {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}

.comment h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.comment p {
  font-size: 16px;
  margin-bottom: 10px;
}

.comment p:last-child {
  margin-bottom: 0;
}
</style>
