<script>
import PublicNav from "@/components/PublicNav.vue";
import PublicFooter from "@/components/PublicFooter.vue";
export default {
  components: {
    PublicNav,
    PublicFooter,
  },
};
</script>

<template>
  <div class="public">
    <PublicNav />
    <router-view />
    <PublicFooter />
  </div>
</template>

<style scoped></style>
