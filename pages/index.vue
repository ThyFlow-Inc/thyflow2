<template>
  <div>
    <Header />
    <HowItWorks />
    <Features />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import HowItWorks from "~/components/HowItWorks.vue";
import Features from "~/components/Features.vue";
export default {
  components: {
    Header,
    HowItWorks,
    Features
  }
};
</script>

<style>
</style>
