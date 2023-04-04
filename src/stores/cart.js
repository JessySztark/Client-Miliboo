import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const cartStore = defineStore("cart", () => {
  const myCart = reactive([]);
  
  function addToCart(myProduct){
    this.myCart.push(myProduct);

  }

  return { myCart,addToCart };
});
