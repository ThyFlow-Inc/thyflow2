<template>
  <div>
    <header class="pt-9 gradient">
      <div class="container px-1 py-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div
          class="flex flex-col w-full md:w-5/5 justify-center items-center content-center md:text-center"
        >
          <h1 class="my-4 text-4xl font-bold leading-tight text-center text-blue-700">THYFLOW</h1>

          <h3 class="my-4 text-4xl font-bold leading-tight text-center">Become a barber</h3>
        </div>
      </div>
    </header>
    <div class="container mx-auto lg:px-24">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >BECOME A BARBER</h1>

      <div class="pb-16">
        <div class="mb-4 text-2xl font-bold text-center">Become a Mobile Barber</div>
        <p class="text-center">
          If you are looking for a flexible way to earn great income doing what you enjoy, Join ThyFlow Barber Team. THYFLOW - Is an alternative way for men to get a haircut at home.
          ThyFlow offer customers Barbershop experience at home or wherever they at. ThyFlow Barbers work within their neighborhood to drive to customers home to provide a haircut service.
        </p>
      </div>
      <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <div class="w-full font-bold text-xl text-gray-800 px-6 text-center">Responsibility</div>
                <p
                  class="text-gray-800 text-base px-4 mb-5"
                >Provide all customers with a High Quality haircut</p>
                <p class="text-gray-800 text-base px-4 mb-5">Represent the ThyFlow Brand</p>
                <p class="text-gray-800 text-base px-4 mb-5">Provide exceptional customer service</p>
                <p class="text-gray-800 text-base px-4 mb-5">Repeat all customers&#39; homes</p>
              </a>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            ></div>
          </div>

          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <div class="w-full font-bold text-xl text-gray-800 px-6 text-center">Qualifications</div>
                <p class="text-gray-800 text-base px-4 mb-5">Haircut experience</p>
                <p class="text-gray-800 text-base px-4 mb-5">Have a smart phone</p>
                <p class="text-gray-800 text-base px-4 mb-5">Have a reliable transportation</p>
                <p class="text-gray-800 text-base px-4 mb-5">Have Barber license</p>
                <p class="text-gray-800 text-base px-4 mb-5">Friendly personality</p>
                <p class="text-gray-800 text-base px-4 mb-5">Take Pride in your work</p>
                <p class="text-gray-800 text-base px-4 mb-5">Can communicate with customers</p>
              </a>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            ></div>
          </div>

          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <div class="w-full font-bold text-xl text-gray-800 px-6 text-center">We Provide</div>
                <p class="text-gray-800 text-base px-6 mb-5">Yearly Training</p>
                <p class="text-gray-800 text-base px-6 mb-5">Bag for barber tools</p>
                <p class="text-gray-800 text-base px-6 mb-5">Barber chair for haircuts</p>
                <p class="text-gray-800 text-base px-6 mb-5">In app support</p>
                <br />
                <p class="text-gray-800 text-base px-6 mb-5">Weekly Pay</p>
              </a>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            ></div>
          </div>
        </div>
      </section>
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <a
          href="https://zfrmz.com/Zum2JBzGehXjwB9XNyUp"
          class="w-full my-2 text-5xl font-bold gradient leading-tight text-center text-white-200"
        >Apply here</a>
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
