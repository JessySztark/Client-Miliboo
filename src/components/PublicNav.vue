<template>
  <div>
    <div class="container">
      <header>
        <div>
          <nav>
            <div class="menu-container">
              <div class="menu-left">
                <ul>
                  <li><RouterLink to="/" id="logo">miliboo</RouterLink></li>
                  <li>
                    <form role="search" action="/search" method="GET">
                      <input
                        type="search"
                        name="research"
                        placeholder="Je recherche..."
                        title="Faire une recherche"
                      />
                    </form>
                  </li>
                </ul>
              </div>

              <div class="menu-right">
                <ul>
                  <li>
                    <RouterLink to="/help" aria-label="Aide"
                      ><img
                        src=".assets/picture/icons/icon-info.png"
                        alt="Aide"
                    /></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/login" aria-label="Connexion"
                      ><img
                        src=".assets/picture/icons/icon-user.png"
                        alt="Connexion"
                    /></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/cart" aria-label="Panier"
                      ><img
                        src=".assets/picture/icons/icon-cart.png"
                        alt="Panier"
                    /></RouterLink>
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
/*-----------------[Header]-----------------*/

#logo {
  font-size: 50px;
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
  /* Pour ajouter le logo de recherche( petite loupe), modifier le dernier paramètre du padding et enlever les commentaires des lognes qui suivent */
  /*background-image: url("searchicon.png");*/
  /* background-position: 10px 10px; */
  /* background-repeat: no-repeat; */
  /* padding: 12px 20px 12px 40px; */
  padding: 2vh 4vh 2vh 2vh;
  transition: width 0.4s ease-in-out;
  box-shadow: 5px 10px 30px rgb(205, 210, 194);
}

input[type="search"]:focus {
  width: 50vw;
}
</style>
