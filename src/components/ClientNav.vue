<script>

import { accountService } from "@/_services";

export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      window.location.href =
        "http://localhost:5173/recherche/" +
        encodeURIComponent(this.searchQuery);
    },
  },
};
</script>

<template>
  <div>
    <div class="banner">
      <div class="banner-title">
        <h3>Livraison gratuite & expédition en 24h<sup>(1)</sup></h3>
      </div>
    </div>
    <div class="container">
      <header>
        <div>
          <nav>
            <div class="menu-top-container">
              <div class="menu-left">
                <ul>
                  <li><RouterLink to="/" id="logo">miliboo</RouterLink></li>
                  <li>
                    <input
                      type="search"
                      placeholder="Je recherche..."
                      title="Faire une recherche"
                      v-model="searchQuery"
                      @keydown.enter="search"
                    />
                  </li>
                </ul>
              </div>

              <div class="menu-right">
                <ul>
                  <li>
                    <RouterLink class="iconsLink" to="/help" aria-label="Aide"
                      ><img
                        class="icons"
                        src="/picture/icons/icon-info.png"
                        alt="Aide"
                    /></RouterLink>
                  </li>


                  <li>
                    <RouterLink
                      class="iconsLink"
                      to="clientArea"
                      aria-label="Espace client"
                      ><img
                        class="icons"
                        src="/picture/icons/icon-user.png"
                        alt="Espace-client"
                    /></RouterLink>
                  </li>
                  <li>
                    <RouterLink class="iconsLink" to="/cart" aria-label="Panier"
                      ><img
                        class="icons"
                        src="/picture/icons/icon-cart.png"
                        alt="Panier"
                    /></RouterLink>
                    <!-- <RouterLink to="admin/dashboard"> Admin</RouterLink> -->
                  </li>
                </ul>
              </div>
              <div class="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div class="menu-container">
              <div class="menu-left">
                <ul>
                  <li>
                    <RouterLink to="/our-products">Nos produits</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/new-products">Nouveautés</RouterLink>
                  </li>
                  <li><RouterLink to="/promotions">Promotions</RouterLink></li>
                  <li>
                    <RouterLink to="/made-in-france">Made in France</RouterLink>
                  </li>
                </ul>
              </div>
              <div class="menu-right">
                <ul>
                  <li>
                    <RouterLink to="our-stores">Nos boutiques</RouterLink>
                  </li>
                </ul>
              </div>
              <div class="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>

<style scoped>
/*-----------------[Banière]-----------------*/

.banner {
  background-color: rgb(183, 185, 166);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1vh;
}

.banner-title {
  flex-basis: 100%;
  text-align: center;
  font-size: 1rem;
}
/*-----------------[Header]-----------------*/
.iconsLink {
  width: 5%;
  margin-left: 5px;
  margin-bottom: 5px;
}

.icons {
  width: 5vw;
}

#logo {
  font-size: 50px;
}

.menu-top-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 2vh;
}

.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 2vh;
}

.menu-left ul,
.menu-right ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.menu-left li,
.menu-right li {
  margin-right: 3vh;
}

.menu-left li:last-child,
.menu-right li:last-child {
  margin-right: 0;
}

.menu-left a,
.menu-right a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  transition: color 0.2s;
}

.menu-left a:hover,
.menu-right a:hover {
  color: rgb(98, 98, 98);
}

.menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  .menu-left,
  .menu-right {
    display: none;
  }

  .menu-toggle {
    display: block;
    cursor: pointer;
  }

  .menu-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin-bottom: 5px;
  }
}

input[type="search"] {
  width: 40vw;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 1vh;
  font-size: 20px;
  background-image: url("/picture/icons/icon-search.png");
  background-position: 2vh 2vh;
  background-repeat: no-repeat;
  background-size: 25px;
  padding: 2vh 4vh 2vh 8vh;
  transition: width 0.4s ease-in-out;
  box-shadow: 5px 10px 30px rgb(205, 210, 194);
}

input[type="search"]:focus {
  width: 50vw;
}
</style>
