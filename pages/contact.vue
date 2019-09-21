<template>
  <div>
    <header class="pt-9 gradient">
      <div class="container px-1 py-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div
          class="flex flex-col w-full md:w-5/5 justify-center items-center content-center md:text-center"
        >
          <h1 class="my-6 text-5xl font-bold leading-tight text-center text-blue-600">THYFLOW</h1>
          <h3 class="my-4 text-4xl font-bold leading-tight text-center">CONTACT US</h3>
        </div>
      </div>
    </header>
    <div class="container mx-auto px-8 lg:px-48">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">CONTACT US</h1>

      <div class="pb-16">
        <div class="mb-4 text-2xl font-bold">ThyFlow</div>
        <p class="font-bold">Eastwood Cir</p>
        <p class="font-bold">Santa Clara, California 95054</p>
        <p class="font-bold">
          Email Address:
          Sals@Thyflow.com
        </p>
        <p class="font-bold">
          Telephone number:
          3106500196
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>

<style lang="css" scoped>
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
</style>
