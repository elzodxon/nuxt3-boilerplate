<template>
  <div>
    Default layout

    <div class="flex items-center mb-4">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </div>

    <div>
      <slot></slot>
    </div>
  </div>
</template>
