<template>
  <div>
    <Navbar />
    <div class="container mx-auto lg:px-24">
      <div class="pb-16">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >ThyFlow Cities</h1>

        <div
          class="mb-4 text-3xl font-bold text-center xl:text-4xl"
        >Below are the Cities we are launching in</div>
        <div class="text-center pb-8">
          <h2 class="uppercase text pb-8">
            <span class="pb-2 border-b-2">San Francisco Bay Area</span>
          </h2>
        </div>
        <h3 class="leading-tight font-bold px-6 text-gray-900">San Francisco Bay Area</h3>
        <p>Add a list of city we are launching in</p>
        <ul class="list-outside">
          <li>Santa Clara</li>
          <li>San Jose</li>
          <li>Mountain View</li>
          <li>Sunnyvale</li>
          <li>Palo Alto</li>
          <li>Redwood City</li>
          <li>San Mateo</li>
          <li>Morgan Hill</li>
        </ul>
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
