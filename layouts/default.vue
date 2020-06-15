<template>
  <div>
    <div v-if="$nuxt.isOffline">Ops! You are offline</div>
    <nuxt keep-alive />
  </div>
</template>

<style></style>
