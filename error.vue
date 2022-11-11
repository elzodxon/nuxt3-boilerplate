<template>
  <div class="relative font-sans" n="green6">
    <div class="container max-w-200 mx-auto py-10 px-4">
      <h1 class="text-red text-[60px]">{{ error.message }}</h1>

      <p class="text-[40px] text-red">      There was an error 😱
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object
})
</script>
