<template>
  <div>
    <Navbar />
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap -mx-4 my-5">
        <!--Left Col-->
        <div class="w-full lg:w-2/5 px-4 text-center lg:text-left self-center">
          <h1 class="mb-12 text-5xl font-bold leading-none text-orange">Become a ThyFlow Barber</h1>
          <p class="mb-12">
            <a
              class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
              href="#"
              v-scroll-to="'#requestrial'"
            >Fill the form here!</a>
          </p>
          <a
            class="mx-auto lg:mx-0 hover:underline text-gray-800 font-bold my-6 py-4 px-8"
            v-scroll-to="'#requestrial'"
          ></a>
        </div>

        <!--Right Col-->
        <div class="w-full lg:w-3/5 px-4 text-center lg:text-right lg:text-left self-center px-4">
          <img src="~/assets/barber.png" class="w-full xl:w-4/5 z-50 inline-block" />
        </div>
      </div>
    </div>
    <!--------------Header Done----------->
    <div class="container mx-auto lg:px-24">
      <div class="pb-16">
        <div class="mb-4 text-2xl font-bold text-center">Become a Mobile Barber</div>
        <p class="text-center">
          If you are looking for a flexible way to earn a great income doing what you enjoy, Join ThyFlow Barber Team. THYFLOW - This is an alternative way for men to get a haircut at home. ThyFlow, offer customers Barbershop experience at home or wherever they at.
          ThyFlow Barbers work within their neighborhood to drive to customer's homes to provide a haircut service.
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
                >Provide all customers with a High-Quality haircut.</p>
                <p class="text-gray-800 text-base px-4 mb-5">Represent the ThyFlow Brand.</p>
                <p class="text-gray-800 text-base px-4 mb-5">Provide exceptional customer service.</p>
                <p class="text-gray-800 text-base px-4 mb-5">Repeat all customers&#39; homes.</p>
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
                <p class="text-gray-800 text-base px-4 mb-5">Haircut experience.</p>
                <p class="text-gray-800 text-base px-4 mb-5">Have a smart phone.</p>
                <p class="text-gray-800 text-base px-4 mb-5">Have a reliable transportation.</p>
                <p class="text-gray-800 text-base px-4 mb-5">Have Barber license.</p>
                <p class="text-gray-800 text-base px-4 mb-5">Friendly personality.</p>
                <p class="text-gray-800 text-base px-4 mb-5">Take Pride in your work.</p>
                <p class="text-gray-800 text-base px-4 mb-5">Can communicate with customers.</p>
              </a>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            ></div>
          </div>

          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <div class="w-full font-bold text-xl text-gray-800 px-6">We Provide</div>
                <div class="text-gray-800 mb-5 px-5">Yearly Training.</div>
                <div class="text-gray-800 mb-5">Bag for barber tools.</div>
                <p class="text-gray-800 mb-5">Barber chair for haircuts.</p>
                <p class="text-gray-800 mb-5">In app support.</p>
                <p class="text-gray-800 mb-5">Weekly Pay.</p>
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
        >Fill the form here!</a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
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
