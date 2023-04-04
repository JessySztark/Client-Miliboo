<script setup>
import { productStore } from "@/stores/product.js";
import { onMounted, onUpdated, ref, reactive } from "vue";
import { myCartStore } from "@/stores/cart.js";
import axios from "axios";
import Comment from "@/components/Comment.vue";

const props = defineProps({
  id: {
    required: true,
  },
});

const cart = myCartStore();
const product = productStore();
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

  console.log(comments.value);
});
</script>

<template>
  <div v-if="theProduct.value != null">
    <h1>{{ theProduct.value.product.productName }}</h1>
    <br />
    <section>
      <h3>Description</h3>
      <br />
      <p>{{ theProduct.value.product.productDescription }}</p>
    </section>
    <br />
    <h3>Colori(s) disponible(s) :</h3>
    <p>{{ theProduct.value.join.colorName }}</p>
  </div>
  
  <RouterLink :to="`/cart/`"><button @click="cart(theProduct.value.product.productId)" class="btn_cart">Passer commande</button></RouterLink>

  <div v-if="comments.value != null">
    <h1>Commentaire(s)</h1>
    <div v-for="comment in comments.value" :key="comment.commentId">
      <h3>{{ comment.title }}</h3>
      <p>{{ comment.description }}</p>
      <p>Note : {{ comment.mark }}/5</p>
      <p>Publié le : {{ comment.date }}</p>
      <br />
    </div>
  </div>
</template>
<style scoped></style>

.product-details {
  flex-basis: 50%;
  padding: 20px;
}