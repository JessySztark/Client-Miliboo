<script></script>

<template>
  <div class="form-container">
    <h1>
      Bienvenue sur votre espace client
      <!--{{ session('login')->emailcompte }}-->
    </h1>
    <a href=""
      ><button class="button full">Voir ou modifier mes données</button></a
    >
    <a href=""
      ><button class="button full">Voir les produits que j'ai aimés</button></a
    >
    <a href=""><button class="button full">Voir mes commandes</button></a>

    <!-- @if($compte->smsauth == 'TRUE')
    <a href="?auth=0"><button class="button total">Désactiver l'authentification à deux facteurs</button></a>
    @else
    <a href="?auth=1"><button class="button total">Activer l'authentification à deux facteurs</button></a>
    @endif
    <a href="logout"><button class="button deleteButton total">Me déconnecter</button></a> -->
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2vw;
}
</style>
