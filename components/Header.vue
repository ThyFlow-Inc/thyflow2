<template>
  <div class="banner-area-inner">
    <div class="banner-inner-area banner-area1">
      <div class="flex flex-wrap my-5">
        <!--Left Col-->
        <div class="w-full lg:w-2/5 px-4 text-center lg:text-left self-center">
          <h1
            class="mb-12 text-3xl font-bold leading-none text-white xl:text-5xl"
          >Better Communication Means Better Service</h1>
          <p class="mb-12">
            <a
              class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
              href="#"
              v-scroll-to="'#requestrial'"
            >Sign up for a free pilot!</a>
          </p>
          <a
            class="mx-auto lg:mx-0 hover:underline text-gray-800 font-bold my-6 py-4 px-8"
            v-scroll-to="'#requestrial'"
          ></a>
        </div>

        <!--Right Col-->
        <div class="w-full lg:w-3/5 px-4 text-center lg:text-right lg:text-left self-center px-4">

        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {};
</script>
<style lang="css" scoped>
  .nodisplay {
    display: none;
  }
</style>
