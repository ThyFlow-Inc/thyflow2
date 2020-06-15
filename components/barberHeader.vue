<template>
  <div>
    <div x-data="{ open: false }" class="relative bg-white overflow-hidden">
      <div class="max-w-screen-xl mx-auto ">
        <div
          class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <div class="pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <nuxt-link to="/">
                    <img
                      class="h-8 w-auto sm:h-10"
                      src="~/assets/big_logo.png"
                      alt="ThyFlow"
                    />
                  </nuxt-link>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button
                      @click="open = true"
                      type="button"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        class="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div
            x-show="open"
            x-transition:enter="duration-150 ease-out"
            x-transition:enter-start="opacity-0 scale-95"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="duration-100 ease-in"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-95"
            class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div class="rounded-lg shadow-md">
              <div class="rounded-lg bg-white shadow-xs overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="~assets/big_logo.png"
                      alt="Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h2
                class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 md:text-4xl sm:text-5xl sm:leading-none md:text-6xl"
              >
                Become a barber and join
                <br class="xl:hidden" />
                <span class="text-orange-600">our amazing platform today.</span>
              </h2>
              <p
                class="mt-3 text-base text-blue-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                ThyFlow is an alternative way for people to get a haircut at
                home. ThyFlow, offers customers a barbershop experience at home
                or wherever they are.
              </p>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://www.youtube.com/watch?v=HRpI1cH5bbI"
                    class="mediabox w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-orange-500 hover:text-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="~/assets/barber_11.jpg"
          alt="Hero Image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "barberHeader",
  mounted() {
    MediaBox(".mediabox");
  }
};
</script>

<style lang="scss" scoped></style>
