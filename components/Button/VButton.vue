<template>
  <button class="bg-gray-100 p-4 rounded-lg text-gray-900 relative">
    {{ label }}

    <span
      class="absolute animate-ping top-0 right-0 bg-red-500 rounded-full h-2 w-2"
    ></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      requried: true,
    },
  },
}
</script>
