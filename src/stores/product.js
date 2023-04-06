import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const productStore = defineStore("product", () => {
  const products = reactive([]);
  const productsBySearch = reactive([]);
  const search = ref("");

  // Chargement initial
  axios
    .get("https://api-miliboo.azurewebsites.net/api/Products/GetProductsWithColorAndPhoto")
    .then((response) => {
      response.data.forEach((product) => products.push(product));
    });

    // function getOneProduct(id) {
    //   return products.find((product) => product.id === id);
    // }

    function GetProductsBySearch(mySearch){
      axios.get("https://api-miliboo.azurewebsites.net/api/Products/GetProductByName/" + mySearch)
      .then((response) => {
        response.data.forEach((product) => productsBySearch.push(product));
      });
    }

   


  return {products,productsBySearch,GetProductsBySearch};
}



);
