<script>
import { accountService } from '@/_services';
import axios from "axios";
import { reactive } from 'vue';



export default{
  methods:{
    logout(){
        accountService.logout()
        this.$router.push('/')
    },
  }
}
</script>

<template>
  <div class="form-container">
    <h1>
      Bienvenue sur votre espace client
    </h1>
    <a href=""
      ><button class="button full">Voir ou modifier mes données</button></a
    >
    <a href=""
      ><button class="button full">Voir les produits que j'ai aimés</button></a
    >
    <a href=""><button class="button full">Voir mes commandes</button></a>
    <button class="button full" @click="logout()">Me déconnecter</button>
    <!-- {{ GetAccountByEmail() }} -->

    <!-- @if($compte->smsauth == 'TRUE')
    <a href="?auth=0"><button class="button total">Désactiver l'authentification à deux facteurs</button></a>
    @else
    <a href="?auth=1"><button class="button total">Activer l'authentification à deux facteurs</button></a>-->
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2vw;
}
</style>
