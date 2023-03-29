<script>
import ClientNav from "@/components/ClientNav.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    ClientNav,
    Footer,
  },
};
</script>

<template>
  <div class="public">
    <ClientNav />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped></style>
