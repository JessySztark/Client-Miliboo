<script setup></script>

<template>
  <h1>Nos magasins</h1>
  <div class="grid">
    <div class="store">
      <img
        src="picture\icons\icon-localisation.png"
        alt="Icone magasin 1"
        class="icon"
      />
      <h3>Ville 1</h3>
      <div class="address">1 Rue du Magasin</div>
      <div class="zipcode">75000 Paris</div>
    </div>
    <div class="store">
      <img
        src="picture\icons\icon-localisation.png"
        alt="Icone magasin 1"
        class="icon"
      />
      <h3>Ville 1</h3>
      <div class="address">1 Rue du Magasin</div>
      <div class="zipcode">75000 Paris</div>
    </div>
    <div class="store">
      <img
        src="picture\icons\icon-localisation.png"
        alt="Icone magasin 1"
        class="icon"
      />
      <h3>Ville 1</h3>
      <div class="address">1 Rue du Magasin</div>
      <div class="zipcode">75000 Paris</div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.store {
  width: calc(33.33% - 1vh); /* 3 magasins par ligne */
  margin-bottom: 4vh;
  overflow: hidden;
  position: relative;
}

.store .icon {
  width: 3vh;
  display: inline-block;
  vertical-align: middle;
  margin: 1vh;
}

.store h3 {
  display: inline-block;
  vertical-align: middle;
  margin: 1vh;
  font-size: 18px;
}

.store .address {
  margin: 1vh;
  font-size: 16px;
}

.store .zipcode {
  margin: 1vh;
  font-size: 16px;
}

.store:not(:last-child)::after {
  content: "";
  display: block;
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ddd;
}

@media screen and (max-width: 767px) {
  .store {
    width: 100%;
  }

  .store:not(:last-child)::after {
    display: none;
  }
}
</style>
