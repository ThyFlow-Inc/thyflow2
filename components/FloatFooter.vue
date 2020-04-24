<template>
  <footer class="h-28">
    <div
      x-data="{ show: false }"
      x-init="setTimeout(() => show = true, 500)"
      x-show="show"
      x-transition:enter="ease-out duration-500"
      x-transition:enter-start="opacity-0 scale-98 translate-y-2"
      x-transition:enter-end="opacity-100 scale-100 translate-y-0"
      x-transition:leave="ease-in duration-500"
      x-transition:leave-start="opacity-100 scale-100 translate-y-0"
      x-transition:leave-end="opacity-0 scale-100 translate-y-2"
      class="transition transform fixed bottom-0 inset-x-0 px-2 pb-10 sm:px-0 sm:pb-6"
    >
      <a
        href="https://zfrmz.com/YwaCWiBx7wEJ3E7hNmZl"
        class="flex items-center justify-between rounded-lg shadow-lg pl-6 pr-4 py-3 bg-orange-900 sm:hidden"
      >
        <p class="text-gray-200 text-lg">
          <strong class="font-medium text-white">
            Book a mobile Barber
          </strong>
        </p>
        <span
          class="flex items-center justify-center px-3 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
        >
          →
        </span>
      </a>
      <div class="hidden sm:block max-w-8xl mx-auto px-4 lg:px-6">
        <div class="pt-1 pl-6 pr-3 rounded-lg bg-orange-600 shadow-lg">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-full flex-1 flex items-center sm:w-0">
              <p class="text-gray-200 truncate text-2xl">
                <strong class="font-medium text-white md:hidden">
                  Book a Mobile Barber
                </strong>
                <strong class="hidden md:inline font-medium text-white">
                  Imagine having your own personal barber
                </strong>
                <span class="lg:hidden">
                  for all of these components
                </span>
                <!-- <span class="hidden md:inline lg:hidden">
                to all of the components in Tailwind UI
              </span> -->
                <span class="hidden lg:inline">
                  When you want with a tap of a finger
                </span>
              </p>
            </div>
            <div class="flex-shrink-0">
              <div class="rounded-md shadow-sm">
                <a
                  href="https://zfrmz.com/YwaCWiBx7wEJ3E7hNmZl"
                  class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                >
                  Book a Barber →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
