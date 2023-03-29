<script setup></script>

<template>
  <div class="container">
    <footer>
      <div class="footer-section">
        <h3>À PROPOS DE MILIBOO</h3>
        <ul>
          <li>
            <RouterLink to="/data-protection"
              >Protection des données</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/cookies">Informations sur les cookies</RouterLink>
          </li>
          <li>
            <RouterLink to="/legal-notices">Mentions légales</RouterLink>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>AIDE & CONTACT</h3>
        <ul>
          <li><RouterLink to="/help">Besoin d'aide</RouterLink></li>
          <li><RouterLink to="/">Nous contacter</RouterLink></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>NOS BOUTIQUES</h3>
        <ul>
          <li><RouterLink to="/">Carte des magasins</RouterLink></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/*-----------------[Footer]-----------------*/

footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-section {
  flex: 1;
  margin: 0 2vw;
}

.footer-section h3 {
  font-size: 20px;
  margin-bottom: 2vh;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 0.5vw;
}

.footer-section a {
  color: rgb(192, 190, 190);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-section a:hover {
  color: #ccc;
}

@media (max-width: 768px) {
  footer {
    flex-direction: column;
  }

  .footer-section {
    margin-bottom: 2vw;
  }
}
</style>
