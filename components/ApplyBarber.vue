<template>
  <div class="gradient">
    <section class=" flex items-center flex-col mx-auto">
      <div class="md:flex bg-white rounded-lg p-10 lg:m-16">
        <div class="flex flex-wrap items-center justify-between -mx-4">
          <div class="my-4 px-6 lg:w-auto">
            <h6 class="mb-3 text-white font-normal text-3xl text-orange-500">
              Imagine having your own personal barber, <br />
              <strong
                ><span class="text-2xl"
                  >When you want with a tap of a finger</span
                ></strong
              >
            </h6>
          </div>
          <div class="w-full px-4 md:w-auto lg:text-center">
            <nuxt-link
              to="/beta"
              class="rolling_tiles  ml-4 rounded-lg px-4 md:px-5 xl:px-4 py-4 md:py-4 xl:py-3 bg-transparent hover:bg-white rounded border border-orange-500 md:text-lg xl:text-xl text-orange-700 font-semibold leading-tight"
              >Book a Barber</nuxt-link
            >
            <nuxt-link
              class="bg-orange-500 rounded-lg ml-4 px-4 md:px-5 xl:px-4 py-4 md:py-4 xl:py-3 hover:bg-blue-600 md:text-lg xl:text-xl text-white font-semibold leading-tight shadow-md"
              to="/beta"
              >View Barbers Profile</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <!------footer button------>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

.mover-animate {
  animation: mover 1s infinite alternate;
}
</style>
