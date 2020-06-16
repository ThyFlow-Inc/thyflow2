<template>
  <div>
    <barberHeader />
    <div class="header2">
      <div class="container mx-auto">
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
              >Requirements</a
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
                      Provide customers with a
                      <span class="text-orange-500">High-Quality haircut.</span>
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
                      Interview by industry
                      <span class="text-orange-500">professional</span>
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
                      Take Pride in your
                      <span class="text-orange-500">work.</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <!-----End of tab Content------>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        class="pt-10 pb-12 text-center bg-gallery rounded-lg lg:pt-20 lg:pb-14"
      >
        <div class="px-10 lg:px-20">
          <h2 class="mb-6 text-orange-500 font-normal text-2xl lg:text-5xl">
            Fill the form below to show interest in joining ThyFlow as a Mobile
            Barber
          </h2>
        </div>
      </div>
    </div>
    <barberForm />
  </div>
</template>

<script>
import barberHeader from "~/components/barberHeader.vue";
import barberForm from "~/components/barberForm.vue";

export default {
  name: "barber",
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
  },
  head() {
    return {
      script: [],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Dosis&display=swap"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/bootstrap.min.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/font-awesome.min.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/plugins/mediabox/mediabox.min.css"
        },
        { rel: "stylesheet", href: "/assets/css/style.css" },
        { rel: "stylesheet", href: "/assets/css/responsive.css" },
        { rel: "stylesheet", href: "/assets/css/custom.css" }
      ]
    };
  },
  components: {
    barberHeader,
    barberForm
  }
};
</script>

<style lang="css" scoped>
body {
  font-family: "Dosis", Courier, monospace;
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
