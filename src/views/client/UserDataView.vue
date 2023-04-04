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
  
</script>

<template>
    <div class="form-container">
        <h1>Vos données personnelles</h1> 
        <p v-if="isLoaded">
            <form @submit.prevent="">

                <div class="form-group">
                    <label for="">Prénom </label>
                    <input class="form-text full" :value="user.user.value.firstName" placeholder="Prénom" type="text" required/>
                </div>

                <div class="form-group">
                    <label for="">Nom </label>
                    <input class="form-text full" :value="user.user.value.lastName" placeholder="Nom" type="text" required/>
                </div>

                <div class="form-group">
                    <label for="">E-mail </label>
                    <input class="form-text full" :value="user.user.value.mail" placeholder="E-mail" type="email" required/>
                </div>

                <div class="form-group">
                    <label for="">Téléphone </label>
                    <input class="form-text full" :value="user.user.value.phoneNumber" placeholder="Téléphone" type="tel" required/>
                </div>

                <div class="form-group">
                    <label for="">Mot de passe </label>
                    <input class="form-text full" :value="user.user.value.password" placeholder="Mot de passe" type="password"/>
                </div>

                <p>...</p>
                <!-- {{ user.user.value }} -->

                <div class="form-group">
                    <button class="button" type="submit">Modifier mes données</button>
                </div>
            </form>
        </p>
        <p v-else>
            <label for="">Chargement en cours...</label>
        </p>
        <RouterLink to="clientArea">
            <button class="button">Retour</button>
        </RouterLink>
    </div>
</template>


<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 2vw;
  }

  .form-text,
select {
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #000000;
  box-sizing: border-box;
  margin-bottom: 10px;
  background-color: #ffffff;
}

label{
    font-size: 16px;
}
</style>
  
  
  
  
  