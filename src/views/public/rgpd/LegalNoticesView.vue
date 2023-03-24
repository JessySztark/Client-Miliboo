<script setup></script>

<template>
  <div class="container">
    <div class="section">
      <h1>Mentions Légales</h1>
      <p>
        <a href="#editeurTitre">1. Editeur </a><br />
        <a href="#directeurTitre">2. Directeur de la publication </a><br />
        <a href="#hebergementTitre">3. Hébergement </a><br />
      </p>
    </div>

    <div class="section">
      <h2 id="editeurTitre">1.Editeur</h2>

      <p>
        Conformément aux dispositions de l'article 6-I 1° de la loi n°2004-575
        du 21 juin 2004 relative à la confiance dans l'économie numérique,
        l'éditeur du site www.miliboo.com est :
      </p>

      <p>
        Miliboo, société anonyme à conseil d'administration, au capital social
        de 525 778,20 euros, immatriculée au registre du commerce et des
        sociétés d'Annecy, sous le numéro 482 930 278, dont le siège social est
        situé Parc Altais - 17 rue Mira - 74650 Chavanod.
      </p>

      <p>Numéro de téléphone : 0 805 14 44 44 (appel gratuit)</p>

      <p>Adresse électronique : info@miliboo.fr</p>

      <p>N° de TVA intracommunautaire : FR10 482 930 278</p>
    </div>

    <div class="section">
      <h2 id="directeurTitre">2.Directeur de la publication</h2>

      <p>
        Le directeur de la publication du site www.miliboo.com est Monsieur
        Guillaume Lachenal, en qualité de Directeur général.
      </p>
    </div>

    <div class="section">
      <h2 id="hebergementTitre">3.Hébergement</h2>

      <p>
        Le prestataire assurant le stockage direct et permanent du site
        www.miliboo.com est :
      </p>

      <p>Google Cloud Platform,</p>

      <p>
        Lieu d'hébergement des données : Rue de Ghlin 100, 7331 Saint-Ghislain,
        Belgique
      </p>

      <p>
        Numéro de téléphone : 0805-540-801 (9:00-18:00 (du lundi au vendredi)
        UTC+1)
      </p>

      <p>
        Pour en savoir plus sur la sécurité mise en œuvre :
        <a href="https://cloud.google.com/security" target="blank"
          >https://cloud.google.com/security </a
        >.
      </p>
    </div>
  </div>
</template>

<style scoped>
a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  transition: color 0.2s;
}

.container,
p {
  text-align: justify;
  padding: 1vh 0;
  font-size: 14px;
}

a:hover {
  color: #ccc;
}

.section {
  margin-bottom: 10vh;
}

h1 {
  font-size: 20px;
  padding-bottom: 1vh;
}

h2 {
  font-size: 16px;
  padding-bottom: 1vh;
}
</style>
