import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const productStore = defineStore("product", () => {
  const products = reactive([]);

  // Chargement initial
  axios
    .get("http://51.83.36.122:81/read") //A modifier quand API ~OK~
    .then((response) => {
      response.data.forEach((product) => products.push(product));
    });

  return { products };
});
