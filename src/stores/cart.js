import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const cart = defineStore("productid", () => {
  const product = reactive({});
  const myCart = reactive([]);
    function addToCart(){
        axios.get("https://api-miliboo.azurewebsites.net/api/Products/GetProductById/"+productid)
        .then((response) => {
        product = response;
        myCart.push(product);
        });
    }

    /*function ShowCart(){
      myCart.forEach(product => {
        
      });
    }*/


  return { myCart };
});
