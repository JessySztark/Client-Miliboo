import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const productStore = defineStore("product", () => {
  const products = reactive([]);

  // Chargement initial
  axios
    .get("https://api-miliboo.azurewebsites.net/api/Products/GetProducts") //A modifier quand API ~OK~
    .then((response) => {
      response.data.forEach((product) => products.push(product));
    });

  return { products };
});
