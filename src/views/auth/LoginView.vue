<script>
import { accountService } from "@/_services";

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
          this.$router.push("/admin/dashboard");
          console.log(res.data);
        })
        .catch((err) => console.log(err));

      console.log(this.user);
    },
  },
};
</script>

<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <div class="formGroup">
        <label for="user_UserName">UserName</label>
        <input type="text" id="user_UserName" v-model="user.UserName" />
      </div>
      <div class="formGroup">
        <label for="user_Password">Mot de passe</label>
        <input type="text" id="user_Password" v-model="user.Password" />
      </div>
      <div class="formGroup">
        <button type="submit" class="button">Connexion</button>
      </div>
    </form>
  </div>
</template>
