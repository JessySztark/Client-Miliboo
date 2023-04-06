<script>
import ClientNav from "@/components/ClientNav.vue";
import Footer from "@/components/Footer.vue";
import { ref, reactive } from "vue";
import { userStore } from "@/stores/user.js";

export default {
  name: "SignUp",
  setup() {
    const user = reactive({
      firstName: "",
      lastName: "",
      mail: "",
      phoneNumber: "",
      password: ""
    });
    const _userStore = userStore();

    function handleSubmit() {
        console.log(user)
      _userStore.PostUser(user);
    }

    return {
      user,
      handleSubmit
    };
  },
  components: {
    ClientNav,
    Footer,
  }
};
</script>

<template>
  <ClientNav/>
  <div class="form-container">
    <div>
      <h1>Inscription</h1>
    </div>
    <form @submit.prevent="handleSubmit">
      <p>Remplissez vos informations ci-dessous pour vopus inscrire</p>

      <div class="form-group">
          <input class="form-text full" placeholder="Prénom" type="text" v-model="user.firstName" required/>
      </div>

      <div class="form-group">
        <input class="form-text full" placeholder="Nom" type="text" v-model="user.lastName" required/>
      </div>

      <div class="form-group">
        <input class="form-text full" placeholder="E-mail" type="email" v-model="user.mail" required/>
      </div>

      <div class="form-group">
        <input class="form-text full" placeholder="Téléphone" type="tel" v-model="user.phoneNumber" required/>
      </div>

      <div class="form-group">
        <input class="form-text full" placeholder="Mot de passe" type="password" v-model="user.password" required/>
      </div>

      <div class="form-group">
        <button class="button" type="submit">Sign up</button>
      </div>
    </form>
    <p>
      Déjà un compte ?
      <RouterLink to="/login">Je me connecte</RouterLink>
    </p>
  </div>
  <Footer/>
</template>
  
<style scoped>
.form-text,
select {
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #000000;
  box-sizing: border-box;
  margin-bottom: 10px;
  background-color: #ffffff;
}
</style>
