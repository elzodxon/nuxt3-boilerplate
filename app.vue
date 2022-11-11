<template>
  <NuxtLayout>
    <div>
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup>
import '@/assets/styles/main.css'
import { useRoute } from 'vue-router'
import {onMounted} from 'vue'
const route = useRoute()

if ('setup' in route.query) {
  throw new Error('error in setup')
}
if ('mounted' in route.query) {
  onMounted(() => {
    throw new Error('error in mounted')
  })
}
function triggerError () {
  throw new Error('manually triggered error')
}
</script>
