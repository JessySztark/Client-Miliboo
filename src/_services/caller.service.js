/** Import des modules  */
import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api-miliboo.azurewebsites.net/api",
});

export default Axios;
