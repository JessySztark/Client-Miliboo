<script setup>
import { cartStore } from "@/stores/cart.js";
import aProduct from "@/components/aProduct.vue";

const cart = JSON.parse(sessionStorage.getItem("myCart"));
console.log(cart);
</script>

<template>
  <section class="grid">
    <aProduct v-for="prod in cart" :product="prod"></aProduct>
  </section>

  <div id="panier">
    <h1>Résumé de votre commande</h1>

    <div id="commandStep">
      <button class="commandStep">1</button>
      <button class="commandStep" disabled>2</button>
      <button class="commandStep" disabled>3</button>
    </div>

    <table>
      <thead>
        <tr>
          <th class="colmun-table-panier" id="title-table-panier">
            Les articles de mon panier :
          </th>
          <th></th>
          <th class="colmun-table-panier">QUANTITÉ</th>
          <th>SUPPRIMER</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th id="imgPanier">
            <a href="/nos-produits/{{unProduit.value.productid}}"></a>
          </th>
        </tr>
      </tbody>
      <!--
              <img
                class="imgPanier"
                src="{{unProduit['produit']->photos[0]->lienphoto}}"
              />
            </a>
          </th>
          <td>
            <p>{{(unProduit['libelleproduit'])}}</p>
            <b>
              {{ round(unProduit['prixproduit'] * (1- unProduit['pourcentagesoldeproduit']), 2)}}
              €</b
            >
          </td>
          <td>
            <form method="POST" action="/updatePanier">
              @csrf
              <select name="nbProduits">
                @foreach($cart as $produit)
                @if($i == $produit['quantite'])
                <option value="{{ $i }}" selected="selected">{{ $i }}</option>
                @else
                <option value="{{ $i }}">{{ $i }}</option>
                @endif @endforeach
              </select>
              <button
                class="button"
                type="submit"
                name="product"
                value="{{unProduit['numproduit']}}"
              >
                Modifier la quantite
              </button>
            </form>
          </td>
          <td>
            <form method="POST" action="/deletePanier">
              <button
                class="button deleteButton"
                type="submit"
                name="product"
                value="{{$unProduit['numproduit']}}"
              >
                Supprimer
              </button>
            </form>
          </td>
          <td>
            <p>
              {{round(unProduit['prixproduit'] * (1- unProduit['pourcentagesoldeproduit']) * unProduit['quantite'], 2)}}
            </p>
          </td>
        </tr>
        @endforeach
      </tbody>-->
    </table>
    <!-- <img
      id="sign-button"
      src="/picture/icones/icon-tooltip.png"
      width="50"
      height="50"
      alt="icon"
    /> -->

    <!-- <h3>Total de la commande {{ $total }}€</h3> -->

    <!-- @if (session('login') != null) -->
    <form method="GET" action="/">
      <button class="button">Commander</button>
    </form>

    <!-- @else -->
    <p>Vou devez vous connecter pour passer une commande</p>
    <RouterLink to="/connexion"
      ><button class="button">Se connecter</button></RouterLink
    >
    <!-- @endif @if (session('login') != null) -->
    <!-- <p>
      Vous avez {{session('login')->argentdepenser / 10}} points de fidélités
    </p>
    @endif -->
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

#panier {
  margin: 0vh 10vw;
}

#panier h1 {
  margin-top: 8vh;
  text-align: center;
}

#commandStep {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 5vh 20vw;
}

.commandStep {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  text-align: center;
}

.commandStep:disabled {
  background-color: rgba(0, 0, 0, 0.7);
}

#imgPanier {
  width: 15%;
}

.imgPanier {
  width: 100%;
}

#title-table-panier {
  width: 30%;
}
</style>
