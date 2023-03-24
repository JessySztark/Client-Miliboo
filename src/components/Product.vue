<script setup>
import { computed } from "vue";

const props = defineProps({
  product: {
    required: true,
  },
});
</script>

<template>
  <article>
    {{ product.user }}
  </article>
</template>

<style scoped></style>
