import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const userStore = defineStore("user", () => {
    const user = reactive({});

  async function GetUserByMail(mail) {
    try {
      const response = await axios.get(
        "https://api-miliboo.azurewebsites.net/api/Accounts/GetAccountByEmail/" +
          mail
      );
      if (response.data) {
        user.value = response.data;
      } else {
        console.log(`Aucun utilisateur trouvé pour l'adresse e-mail ${mail}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function PostUser(userToPost) {
    try {
        const response = axios.post(
          "https://api-miliboo.azurewebsites.net/api/Accounts/PostAccount/",
          userToPost
        );
        console.log(response)
    } catch (error) {
      console.error(error);
    }
  }

  return { user, GetUserByMail, PostUser };
});
