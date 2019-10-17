<template>
  <div>
    <Navbar />
    <div class="container mx-auto lg:px-24">
      <div class="pb-16">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >ThyFlow Cities</h1>

        <div class="mb-4 text-2xl font-bold text-center">ThyFlow Cities</div>
        <p class="text-center">
          Add a list of city we are launching in
          San Francisco Bay Area
          Santa Clara, San Jose, Mountain View, Palo Alto, Sunnyvale, Redwood City, San Mateo, Morgan Hill and Gilroy. .
        </p>
      </div>
      <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </div>
      </section>
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

<style lang="scss" scoped>
</style>
