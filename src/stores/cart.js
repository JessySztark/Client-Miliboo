import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const cartStore = defineStore("cart", () => {
  var cart = JSON.parse(sessionStorage.getItem("myCart"));
  const myCart = reactive(cart ?? []);
  
  function addToCart(myProduct){
    var product = myCart.find((item) => item.value.product.productId === myProduct.value.product.productId);
    if (product){
      product.quantity += 1;
    } else {
      myProduct.quantity = 1;
      myCart.push(myProduct);
    }
    sessionStorage.setItem("myCart", JSON.stringify(myCart));
  }

  function addOne(id){
    var product = myCart.find((item) => item.value.product.productId === id);
    if(product.quantity < product.value.product.nbStockProduct){
      product.quantity += 1;
    }
    sessionStorage.setItem("myCart", JSON.stringify(myCart));
  }

  function removeOne(id){
    var product = myCart.find((item) => item.value.product.productId === id);
    if (product.quantity > 1){
      product.quantity -= 1;
    } else {
      myCart.splice(myCart.indexOf(product), 1);
      location.reload();
    }
    sessionStorage.setItem("myCart", JSON.stringify(myCart));
  }

  

  return {myCart,addToCart,addOne,removeOne};
});
