<template>
  <div>
    <div v-if="$nuxt.isOffline">Ops! You are offline Please check your Internet Connection</div>
    <nuxt keep-alive />
  </div>
</template>

<style></style>
