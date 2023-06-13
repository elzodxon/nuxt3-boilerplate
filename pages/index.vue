<template>
  <BeerList v-bind="{beers}" :items-per-page="10" />
</template>

<script setup lang="ts">

import {useApi} from "~/composables/useApi";

const { data: beers, error, refresh } = await useAsyncData(
    'beers',
    () => useApi().get('/v2/beers', {
      params:{
          brewed_after: '11-2012'
      }
    })
)

</script>
