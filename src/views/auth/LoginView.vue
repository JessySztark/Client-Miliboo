<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      console.log("stop form");
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
        <label for="user_email">Email</label>
        <input type="text" id="user_email" v-model="user.email" />
      </div>
      <div class="formGroup">
        <label for="user_password">Mot de passe</label>
        <input type="text" id="user_password" v-model="user.password" />
      </div>
      <div class="formGroup">
        <button type="submit" class="button">Connexion</button>
      </div>
    </form>
  </div>
</template>
