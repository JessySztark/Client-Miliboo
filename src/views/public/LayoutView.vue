<script>
import PublicNav from "@/components/PublicNav.vue";
export default {
  components: {
    PublicNav,
  },
};
</script>

<template>
  <div class="public">
    <PublicNav />
    <router-view />
  </div>
</template>

<style scoped></style>
