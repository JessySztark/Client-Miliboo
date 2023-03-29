<script>
import PublicNav from "@/components/PublicNav.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    PublicNav,
    Footer,
  },
};
</script>

<template>
  <div class="public">
    <PublicNav />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped></style>
