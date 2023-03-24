<script setup></script>

<template>
  <h1>Home</h1>

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
</style>
