<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 lg:max-w-2xl lg:w-full"
      >
        <div
          class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <div
              class="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base mb-6"
            >
              <span
                class="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold leading-4 bg-orange-400 text-white mr-3"
                >ThyFlow</span
              >
            </div>
            <h2
              class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
            >
              About ThyFlow
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              We, The team behind ThyFlow Services, enjoy collaborating to
              create excellent products and services that will unite people. We
              have designed a trusted platform to Connect Mobile Barbers and
              Hair Stylists with local clients. Other services will be added to
              the platform soon! Hope you join us on this journey.
            </p>
            <div class="mt-5 sm:mt-8 flex sm:justify-center lg:justify-start">
              <a
                href="https://youtu.be/HRpI1cH5bbI"
                class="mediabox cursor-pointer inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-orange-500  hover:bg-blue-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2"
                >
                  <path d="M8 5v14l11-7z"></path>
                </svg>
                Watch a video
              </a>
            </div>
          </div>
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>
        </div>
      </div>
      <!------Right Section----->
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full gatsby-image-wrapper"
          style="position:relative;overflow:hidden"
        >
          <div aria-hidden="true"></div>
          <img src="~/assets/barber_11.jpg" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-about",
  mounted() {
    MediaBox(".mediabox");
  }
};
</script>

<style lang="css" scoped>
.bg-thyflow {
  color: #004dc9;
}
</style>
