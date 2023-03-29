/** Import des modules nécessaires */

import Axios from "./caller.service";

let login = (credentials) => {
  return Axios.post("/login", credentials);
};

let logout = () => {
  localStorage.removeItem("token");
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token; // '!!' transforme une chaine en booléen => s'il n'y a pas de token alors variable token vide donc !! token == false
};

export const accountService = {
  login,
  logout,
  saveToken,
  isLogged,
};
