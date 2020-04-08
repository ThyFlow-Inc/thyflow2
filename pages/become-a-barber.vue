<template>
  <div id="applybarber" class="m-0">
    <Navbar />
    <div  class="header flex flex-wrap ">
      <!--Left Col-->
      <div
        class="w-full lg:w-3/6  sm:w-3/6 px-8 text-center lg:text-left self-center mt-5"
      >
        <h1 class="lg:mx-16 sm:mx-8 lg:text-4xl sm:text-2xl text-orange-600 mt-6">
          Become a ThyFlow Barber
        </h1>
        <p
          class="lg:mx-16 sm:mx-6 text-white font-bold lg:text-2xl md:text-1xl"
        >
          If you are looking for a flexible way to earn a great income doing
          what you enjoy, Join ThyFlow Barber Team.
        </p>
        <p
          class="lg:mx-16 sm:mx-4 text-white lg:text-2xl md:text-1xl"
        >
          This is an alternative way for men to get a haircut at home.
          ThyFlow, offer customers Barbershop experience at home or wherever
          they at. ThyFlow Barbers work within their neighborhood to drive to
          customer's homes to provide a haircut service.
        </p>
      </div>

      <!--Right Col-->
      <div
        class="w-full lg:w-3/6 px-4 text-center lg:center lg:text-left self-center lg:px-20 sm:px-10"
      >
        <form
          action="https://forms.zohopublic.com/thyflow/form/JobApplicationForm1/formperma/1Mjwi0GhpXVJPdj52haw-eWIuyNXje40sTFLllnIVEk/htmlRecords/submit"
          name="form"
          method="POST"
          accept-charset="UTF-8"
          enctype="multipart/form-data"
          id="form"
        >
          <div
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-8"
          >
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>

                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  name="Name_First"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  name="Name_Last"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-email"
                >
                  Email
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  name="Email"
                  type="text"
                  placeholder="Type your email"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-phone"
                >
                  Phone Number
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  name="PhoneNumber_countrycode"
                  type="text"
                  placeholder="Type your Phone"
                />
              </div>
            </div>
            <!-----Checkbox----->
            <div class=" mb-6">
              <span class="text-xs uppercase font-bold"
                >Are you a certified barber?
              </span>
              <div class="mt-2">
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="Radio"
                    value="Yes"
                  />
                  <span class="ml-2">Yes</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="Radio"
                    value="No"
                  />
                  <span class="ml-2">No</span>
                </label>
              </div>
            </div>
            <button
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Submit Information
            </button>
          </div>

          <!---<img src="~/assets/barber.png" class="w-full xl:w-4/5 z-50 inline-block" />-->
        </form>
      </div>
    </div>

    <!--------------Header Done----------->
    <div class="flex flex-wrap md:px-16 md:py-16">
      <div class="w-6/6 sm:w-1/2 p-6">
        <p
          class="text-base md:text-3xl sm:text-xl mb-3 font-bold text-orange mx-4"
        >
          Why ThyFlow?
        </p>
        <p class="px-3 text-orange md:text-2xl sm:text-base mb-3">
          ThyFlow Team, focus on building a trusted platform for anyone to find
          verified Mobile Service providers in their local area and book an
          appointment. We connect service providers with customers that need and
          want their service, in a safe and secure manner.
        </p>
      </div>
      <div class="w-full sm:w-1/2 mb-5">
        <img
          class="zoom md:min-w-0 md:w-4/7 z-50 sm:w-full sm:h-full rounded-lg"
          src="~/assets/barber_11.jpg"
        />
      </div>
    </div>

    <!-------New Babrber Responsibilities--->
    <div class="header2">
      <div class="container mx-auto px-4">
        <div class="flex justify-between py-16 sm:py-24">
          <div
            class="lg:w-1/2 xl:w-6/12 text-center lg:text-left py-4 sm:p-0 m-12"
          >
            <a
              v-on:click="activetab = 1"
              v-bind:class="[activetab === 1 ? 'active' : '']"
              class="bg-orange-500 text-white no-underline text-center block font-medium text-lg px-4 py-2 shadow uppercase rounded hover:shadow-md sm:mr-4 py-3 px-2 text-base mb-6"
              >What you will do</a
            >
            <a
              v-on:click="activetab = 2"
              v-bind:class="[activetab === 2 ? 'active' : '']"
              class="border hover:bg-orange-500 text-white no-underline text-center block font-medium text-lg px-4 py-2 shadow uppercase rounded hover:shadow-md sm:mr-4 py-3 px-2 text-base mb-6"
              >What you will need</a
            >
            <a
              v-on:click="activetab = 3"
              v-bind:class="[activetab === 3 ? 'active' : '']"
              class="border hover:bg-orange-500 text-white no-underline text-center block font-medium text-lg px-4 py-2 shadow uppercase rounded hover:shadow-md sm:mr-4 py-3 px-2 text-base mb-6"
              >Who we are looking for</a
            >
          </div>

          <div
            class="lg:w-1/2 xl:w-6/12 text-center lg:text-left py-4 sm:p-0 mx-12"
          >
            <div
              v-if="activetab === 1"
              class="rounded-lg shadow-lg overflow-hidden bg-gray-200"
            >
              <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div
                  class="mt-4 flex items-baseline text-4xl leading-none font-extrabold"
                >
                  Your Responsibilities
                </div>
              </div>
              <div class="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                <ul>
                  <li class="flex items-start">
                    <svg
                      class="mx-1 h-6 inline-block"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p class="ml-3 text-lg leading-6 text-gray-700">
                      Provide all customers with a <b>High-Quality haircut.</b>
                    </p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="mx-1 h-6 inline-block"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p class="ml-3 text-lg leading-6 text-gray-700">
                      Represent the <span class="text-orange-500"> Brand.</span>
                    </p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="mx-1 h-6 inline-block"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p class="ml-3 text-lg leading-6 text-gray-700">
                      Provide exceptional
                      <span class="text-orange-500">customer service.</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <!------Tab COntent 1------->

                     <div
              v-if="activetab === 2"
              class="rounded-lg shadow-lg overflow-hidden bg-gray-200"
            >
              <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div
                  class="mt-4 flex items-baseline text-4xl leading-none font-extrabold"
                >
                  Professionalism
                </div>
              </div>
              <div class="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                <ul>
                  <li class="flex items-start">
                    <svg
                      class="mx-1 h-6 inline-block"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p class="ml-3 text-lg leading-6 text-gray-700">
                      Barbing Experience 
                    </p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="mx-1 h-6 inline-block"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p class="ml-3 text-lg leading-6 text-gray-700">
                      Have <span class="text-orange-500">Barber</span> license
                    </p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="mx-1 h-6 inline-block"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p class="ml-3 text-lg leading-6 text-gray-700">
                      Interview by industry <span class="text-orange-500">professional</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <!------Second Content Finish Here--->

                     <div
              v-if="activetab === 3"
              class="rounded-lg shadow-lg overflow-hidden bg-gray-200"
            >
              <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div
                  class="mt-4 flex items-baseline text-4xl leading-none font-extrabold"
                >
                  Qualifications
                </div>
              </div>
              <div class="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                <ul>
                  <li class="flex items-start">
                    <svg
                      class="mx-1 h-6 inline-block"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p class="ml-3 text-lg leading-6 text-gray-700">
                      Can <b>communicate</b> with customers.
                    </p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="mx-1 h-6 inline-block"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p class="ml-3 text-lg leading-6 text-gray-700">
                      Have a smart <span class="text-orange-500">phone</span>.
                    </p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="mx-1 h-6 inline-block"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p class="ml-3 text-lg leading-6 text-gray-700">
                      Take Pride in your <span class="text-orange-500">work.</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <!-----End og tab Content------>
          </div>
        </div>
      </div>
    </div>


    <!------Third section-------->

    <!-------Finish Tabs------>
    <div class="mx-auto flex flex-wrap pt-24 pb-16">
      <h1
        class="mx-auto block text-5xl font-bold leading-none text-orange-500 self-center"
      >
        Interested?
      </h1>
    </div>
    <div class="w-full text-center pb-24 self-center">
      <a
        href="#" v-scroll-to="'#applybarber'"
        class="hover:bg-orange-400  hover:text-white text-orange-500 w-full font-bold py-4 px-4 border border-orange-600 hover:border-blue-500 rounded text-2xl"
        >Apply as a Barber <span class="">↑</span> </a
      >
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
  },

  data: function() {
    return {
      activetab: 1
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    }
  }
};
</script>
<style lang="scss" scoped>

.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
.header {
  background-image: linear-gradient(
      to right,
      rgba(88, 201, 236, 0.801),
      rgba(28, 58, 228, 0.603)
    ),
    url("~assets/barber_88.png");
  background-size: cover;
  background-position: top;
  position: relative;
}
.header2 {
  background-image: linear-gradient(
      to right,
      rgba(65, 99, 109, 0.801),
      rgba(28, 58, 228, 0.603)
    ),
    url("~assets/barber_11.jpg");
  background-size: cover;
  background-position: top;
  position: relative;
}

</style>
