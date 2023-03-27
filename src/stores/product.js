import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const productStore = defineStore("product", () => {
  const products = reactive([]);
  const myProduct = reactive({});

  // Chargement initial
  axios
    .get("https://api-miliboo.azurewebsites.net/api/Products/GetProductsWithColorAndPhoto") //A modifier quand API ~OK~
    .then((response) => {
      response.data.forEach((product) => products.push(product));
    });

    // function getOneProduct(id) {
    //   return products.find((product) => product.id === id);
    // }

    function GetProduct(id){
      axios.get("https://api-miliboo.azurewebsites.net/api/Products/GetProductPhotoColorById/" + id)
      .then((response) => {
        this.myProduct = response.data
      });
    }


  return { products,myProduct,GetProduct};
});
