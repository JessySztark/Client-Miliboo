<script setup>
import { productStore } from "@/stores/product.js";
import { onMounted, ref } from "vue";
import { cart } from "@/stores/cart.js";

const props = defineProps({
  id: {
    required: true,
  },
});

const product = productStore();
product.GetProduct(props.id);
const isLoading = ref(true);

onMounted(async () => {
  await product.GetProduct(props.id);
  isLoading.value = false;
  console.log(product.myProduct);
});
</script>

<template>
  <div v-if="isLoading">Chargement en cours...</div>
  <div v-else>
    <h1>{{ product.myProduct.product.productName }}</h1>
    <div id="descriptionProduit">
      <section>
        <h3>Description</h3>
        <!-- <p>{{product.myProduct.product.productDescription}}</p> -->
      </section>
      <section id="aspectTechniqueProduit"></section>

      <p>
        Ce produit peut être, au choix, réemployé ou recyclé.<br />Si vous
        souhaitez recycler votre produit, vous pouvez vous rendre dans l'un des
        points de collecte dont la liste est disponible sur Maison du tri.
      </p>
      <section>
        <h3>Entretien</h3>
        <!-- <p>{{$leProduit->typeProduit->commentaireentretientypeproduit}}</p> -->
      </section>
      <p>{{ product.myProduct.join.colorName }}</p>
    </div>
  </div>

  <!-- <div id="infosProduit">
        {{$leProduit->libelleproduit}}
        <a id="lienDescription" href="#descriptionProduit"><u>Description détaillée</u></a>
        <a href="#avisClients"><u>{{count($leProduit->typeProduit->avis)}}(avis)</u></a><br> -->

  <p>Colori(s) disponible(s) :</p>

  <!-- <p>{{product.myProduct.join.colorName}}</p> -->
  <button @click="cart" class="btn_cart">Passer commande</button>
</template>

<style scoped></style>
