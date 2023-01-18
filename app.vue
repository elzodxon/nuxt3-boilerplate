<template>
  <NuxtLayout>
    <div>
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

if ('setup' in route.query) {
  throw new Error('error in setup')
}
if ('mounted' in route.query) {
  onMounted(() => {
    throw new Error('error in mounted')
  })
}

</script>
  