<script setup>
import { computed } from "vue";

const props = defineProps({
  product: {
    required: true,
  },
});
</script>

<template>
  <h3>{{ product.comment.title }}</h3>
</template>
