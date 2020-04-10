<template>
  <div>
    <Navbar />
    <header class="contact flex flex-wrap ">
          <div
        class="w-full lg:w-3/6 sm:w-3/6 px-16 m-20 text-center lg:text-left self-center mt-5 rounded-lg bg-gray-200"
      >
        <h1 class="lg:text-2xl sm:text-1xl text-orange-600 mt-6">
          Looking to Get in Touch?
        </h1>
      <p class="leading-5 text-5xl mb-20"> We'll Be Right with You.</p>
      <div class="mb-4">
      <div class="w-full md:w-auto md:m-auto">
        <a href = "mailto: support@thyflow.com" class="bg-orange-500 rounded text-white font-bold block w-full my-3 md:inline-block md:w-auto md:mr-4 px-4 py-4">
          <svg class="inline-block mr-2 text-white fill-current align-middle" xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 16 14.769">
<g><path d="M15.385 0H.615A.615.615 0 0 0 0 .615v9.847a.615.615 0 0 0 .615.615h1.847v3.692l4.923-3.692h8a.615.615 0 0 0 .615-.615V.615A.615.615 0 0 0 15.385 0zM4.308 6.462a.923.923 0 1 1 .923-.924.924.924 0 0 1-.923.924zm3.692 0a.923.923 0 1 1 .923-.924.924.924 0 0 1-.923.924zm3.692 0a.923.923 0 1 1 .923-.924.924.924 0 0 1-.923.924z"></path></g>
</svg>Send an Email
        </a>
        <a href="tel:123-456-7890" class="bg-white rounded text-black font-bold block w-full my-3 md:inline-block md:w-auto px-4 py-4">
          <svg class="inline-block mr-2 text-orange fill-current align-middle" xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 11 18.333">
<g><path d="M0 1.698v14.937a1.698 1.698 0 0 0 1.698 1.698h7.604A1.698 1.698 0 0 0 11 16.635V1.698A1.698 1.698 0 0 0 9.302 0H1.698A1.698 1.698 0 0 0 0 1.698zm5.5 15.46a1.309 1.309 0 1 1 1.309-1.308A1.31 1.31 0 0 1 5.5 17.16zm3.68-3.923H1.82a.82.82 0 0 1-.82-.82V2.095a.82.82 0 0 1 .82-.82h7.36a.82.82 0 0 1 .82.82v10.32a.82.82 0 0 1-.82.82z"></path></g>
</svg>  Call Us Now
        </a>
      </div>
      </div>
<p class="text-sm font-bold">
  <span class="text-gray-600">Office Hours</span> : 24/7 365 Days
</p>

      </div>
    </header>
    <section class="bg-white">
      <div class="relative container h-4 -mt-10 -mb-4 overflow-hidden text-center">
        <button class="relative z-10 inline-block w-8 h-8 text-gray-300 border-2 bg-white border-white rounded-full">
          <svg class="inline-block fill-current -mt-10" xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 13 6.793">
<path d="M6.5 6.792a.995.995 0 0 1-.707-.292L.146.854A.5.5 0 1 1 .854.146L6.5 5.793 12.146.146a.5.5 0 1 1 .708.708L7.207 6.5a.996.996 0 0 1-.707.292z"></path>
</svg>
        </button>
      </div>
    </section>

<section class="mb-20">
<div class="container">
  <div class="my-24 mx-20">
 <h2 class="mb-4 text-4xl text-gray-600 mx-auto text-center lg:text-5xl">Get in Touch <strong>with Us.</strong>
</h2>
<div class="text-lg text-center leading-snug">
  <p>Whatever you need, <strong>Our customer support</strong> will get back to you </p>
</div>
  </div>

</div>

</section>
    
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

.contact {
  height: 70vh;
  background-image:url("~assets/contact-us.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
}
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
</style>