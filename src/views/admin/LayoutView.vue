<script>
import AdminNav from "@/components/AdminNav.vue";
export default {
  components: {
    AdminNav,
  },
};
</script>

<template>
  <div class="admin">
    <AdminNav />
    <router-view />
  </div>
</template>

<style scoped></style>
