<template>
  <div>Single posts/ <b>ID: {{ $route.params.id }}</b></div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

useHead({
  title: "Post - " + route.params?.id
})
</script>