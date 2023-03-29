<script>
import { accountService } from "@/_services";
import PublicNav from "@/components/PublicNav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Login",
  data() {
    return {
      user: {
        UserName: "",
        Password: "",
      },
    };
  },
  methods: {
    login() {
      accountService
        .login(this.user)
        .then((res) => {
          accountService.saveToken("token", res.data.access_token);
          this.$router.push("/client/dashboard");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      console.log(accountService.isLogged());
    },
  },
  components: {
    PublicNav,
    Footer,
  },
};
</script>

<template>
  <PublicNav />

  <div class="form-container">
    <div>
      <h1>Connexion</h1>
    </div>

    <form @submit.prevent="login">
      <p>Remplissez vos informations de connexion ci-dessous</p>

      <div class="form- group">
        <!-- <label for="user_UserName">UserName</label> -->
        <input
          class="form-text full"
          type="text"
          id="user_UserName"
          placeholder="E-mail"
          v-model="user.UserName"
          required
        />
        <!-- ajouter =>  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" -->
      </div>
      <div class="form-group">
        <!-- <label for="user_Password">Mot de passe</label> -->
        <input
          class="form-text half-full"
          type="text"
          id="user_Password"
          placeholder="Mot de passe"
          minlength="4"
          maxlength="24"
          v-model="user.Password"
          required
        />
      </div>
      <div class="formGroup">
        <button type="submit" class="button half-full">Connexion</button>
      </div>
    </form>
    <p>
      Pas encore de compte ?
      <RouterLink to="/sign-in">Je créé mon compte</RouterLink>
    </p>
  </div>

  <Footer />
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
