<template>
  <div class="form-container">
    <h1 v-if="isLoaded">
      Bienvenue sur votre espace client {{ user.user.value.firstName }}
    </h1>
    <h1 v-else>
      Chargement en cours...
    </h1>
    <RouterLink to="userData">
      <button class="button full">Voir ou modifier mes données</button>
    </RouterLink>
    <a href="">
      <button class="button full">Voir les produits que j'ai aimés</button>
    </a>
    <a href="">
      <button class="button full">Voir mes commandes</button>
    </a>
    <button class="button full" @click="logout()">Me déconnecter</button>
  </div>
</template>

<script setup>
import { accountService } from '@/_services';
import { userStore } from '@/stores/user.js';
import { useRouter } from 'vue-router';
import { ref } from 'vue';


const user = userStore();
const router = useRouter();
const isLoaded = ref(false);

async function fetchUser() {
  await user.GetUserByMail('cobb-shellie@yahoo.net');
  isLoaded.value = true;
}

fetchUser();

function logout(){
  accountService.logout();
  router.push('/');
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2vw;
}
</style>




