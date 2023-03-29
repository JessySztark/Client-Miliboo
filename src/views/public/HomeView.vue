<script setup>
import { productStore } from "@/stores/product.js";
import Promotions from "@/components/Promotion.vue";

const product = productStore();
</script>

<template>
  <!-- <div v-for="prod in product.products" :product="prod">
    {{ prod }} <br /><br />
  </div> -->
  <RouterLink to="/new-products">
    <img
      class="banner-top"
      src="/picture/banners/banner-home.jpg"
      alt="banner-home"
    />
  </RouterLink>
  <div class="container">
    <p>
      Miliboo.com est une enseigne de meubles design en ligne qui conçoit des
      meubles de qualité, élégants et faciles à vivre. Vous trouverez de quoi
      meubler toutes les pièces de votre maison. Rendez votre salon accueillant
      en choisissant un canapé aussi design que confortable pour l'ensemble de
      vos convives. Vous aurez le choix dans les matières : en tissu ou un
      canapé cuir? C'est à vous de choisir. Pour bien compléter votre salon,
      posez votre télé sur un meuble tv à la fois design et pratique grâce à de
      multiples rangements intégrés. Nous n'avons pas oublié l'autre pièce
      maitresse qu'est la cuisine et avons élaboré une sélection qui vous
      permettra de trouver la chaise design de vos rêves. Et pour les plus
      accros aux apéritifs autour du bar, choisissez le tabouret de bar qui vous
      conviendra le mieux en vous assurant de bons moments avec vos invités.
      Mais avant cela, il faut garantir un espace de travail agréable en optant
      pour un bureau design qui complètera parfaitement votre allié au quotidien
      : votre fauteuil de bureau qui, grâce à son assise confortable, rendra vos
      longues heures de travail aussi agréables que possibles! Miliboo.com c'est
      l'assurance de trouver le mobilier design qu'il vous faut pour la déco de
      toute la maison et toujours à prix discount. Miliboo.com c’est aussi le
      meuble personnalisé avec UpToYou, des promotions et des ventes flash toute
      l'année pour profiter de prix moins chers sur tout votre mobilier ! Entrez
      dans notre catalogue de plus de 2000 produits et partez à la recherche du
      meuble design qui conviendra à votre style et pour toutes les pièces de
      votre intérieur sans oublier les objets déco qui mettront des touches de
      design dans votre intérieur à petits prix.
    </p>
  </div>

  <div class="note">
    <p>
      (1) Livraison gratuite valable uniquement pour les livraisons en
      rez-de-chaussée, expédition possible le jour même pour les produits en
      stock et pour toute commande passée avant 15h
    </p>
  </div>

  <div class="banner">
    <div class="banner-title">
      <h2>
        Miliboo, c'est aussi <span class="bold">des services uniques !</span>
      </h2>
    </div>
    <div class="banner-item">
      <h3>Livraison<span class="bold"> Gratuite</span><sup>(1)</sup></h3>
      <img src="picture/icons/icon-livraison.svg" alt="Livraison" />
    </div>
    <div class="banner-item">
      <h3>Fidélité<span class="bold"> récompensée</span></h3>
      <img src="picture/icons/icon-fidelite.svg" alt="fidélité" />
    </div>
    <div class="banner-item">
      <h3>Expédition<span class="bold"> en 24h</span></h3>
      <img src="picture/icons/icon-expedition.svg" alt="expédition" />
    </div>
    <div class="banner-item">
      <h3>Appel gratuit<span class="bold"> 0 805 14 44 44</span></h3>
      <img src="picture/icons/icon-telephone.svg" alt="appel" />
    </div>
  </div>
</template>

<style scoped>
/*-----------------[Bannière d'en tête]-----------------*/
.banner-top {
  width: 100%;
}

/*-----------------[Bannière]-----------------*/

.banner {
  background-color: #b4b99a;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3vh;
}

.banner-title {
  flex-basis: 100%;
  text-align: center;
  margin-bottom: 3vw;
}

.banner-title h2 {
  font-size: 20px;
}

.bold {
  font-weight: bold;
}

.banner-item {
  flex-basis: 25%;
  text-align: center;
  margin-bottom: 3vw;
}

.banner-item h3 {
  font-size: 16px;
  margin-bottom: 1vw;
}

.banner-item img {
  max-width: 5vw;
}

@media (max-width: 768px) {
  .banner-item {
    flex-basis: 50%;
  }

  .banner-item img {
    max-width: 10vw;
  }
}

.note {
  margin: 0 0 2vw 0.7vw;
  font-weight: 200;
  color: #8f9091;
}
</style>
