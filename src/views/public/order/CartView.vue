<script setup></script>

<template>
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
          <th class="colmun-table-panier">QUANTITE</th>
          <th>SUPPRIMER</th>
          <th>TOTAL</th>
        </tr>
      </thead>

      <!-- Faire les modifs pour que ça fonctionne -->

      <!-- <tbody>
        @if(session('panier') != null) @foreach(session('panier') as $unProduit)
        <tr>
          <th id="imgPanier">
            <a href="/nos-produits/{{$unProduit['produit']->numproduit}}">
              <img
                class="imgPanier"
                src="{{$unProduit['produit']->photos[0]->lienphoto}}"
              />
            </a>
          </th>
          <td>
            <p>{{$unProduit['produit']->libelleproduit}}</p>
            <b>
              {{ round($unProduit['produit']->prixproduit * (1- $unProduit['produit']->pourcentagesoldeproduit), 2)}}
              €</b
            >
          </td>
          <td>
            <form method="POST" action="/updatePanier">
              @csrf
              <select name="nbProduits">
                @for ($i = 1; $i < $unProduit['produit']->nbenstock +1; $i++)
                @if($i == $unProduit['quantite'])
                <option value="{{ $i }}" selected="selected">{{ $i }}</option>
                @else
                <option value="{{ $i }}">{{ $i }}</option>
                @endif @endfor
              </select>
              <button
                class="button"
                type="submit"
                name="product"
                value="{{$unProduit['produit']->numproduit}}"
              >
                Modifier la quantite
              </button>
            </form>
          </td>
          <td>
            <form method="POST" action="/deletePanier">
              @csrf
              <button
                class="button deleteButton"
                type="submit"
                name="product"
                value="{{$unProduit['produit']->numproduit}}"
              >
                Supprimer
              </button>
            </form>
          </td>
          <td>
            <p>
              {{round($unProduit['produit']->prixproduit * (1- $unProduit['produit']->pourcentagesoldeproduit) * $unProduit['quantite'], 2)}}
            </p>
          </td>
        </tr>
        @endforeach
      </tbody> -->
    </table>
    <!-- <img
      id="sign-button"
      src="/picture/icones/icon-tooltip.png"
      width="50"
      height="50"
      alt="icon"
    /> -->

    <h3>Total de la commande {{ $total }}€</h3>

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
