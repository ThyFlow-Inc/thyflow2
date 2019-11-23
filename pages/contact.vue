<template>
  <div>
    <Navbar />
    <header class="pt-9 gradient">
      <div class="container px-1 py-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div
          class="flex flex-col w-full md:w-5/5 justify-center items-center content-center md:text-center"
        >
          <h1 class="my-6 text-5xl font-bold leading-tight text-center text-blue-600">THYFLOW</h1>
        </div>
      </div>
    </header>
    <div class="container mx-auto px-8 lg:px-48">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">CONTACT US</h1>

      <div class="pb-16">
        <div class="mb-4 text-2xl font-bold">ThyFlow Services</div>
        <p class="font-bold">San Francisco Bay Area</p>
        <p class="font-bold">Santa Clara, CA</p>
        <p class="font-bold">Contact: Support@ThyFlow.com</p>
        <p class="font-bold">Telephone number:</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="css" scoped>
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
</style>