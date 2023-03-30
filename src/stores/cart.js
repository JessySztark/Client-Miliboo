import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const myCartStore = defineStore("cart", () => {
  const myCart = reactive([]);
  const product = reactive ({});
  axios.get("https://api-miliboo.azurewebsites.net/api/Products/GetProductById/"+produitid)
    .then((response) => {
      product = response;
    });
  function addToCart(){
    myCart.push(product);
  }
  return { myCart };
});
