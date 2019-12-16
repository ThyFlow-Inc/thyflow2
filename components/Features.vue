<template>
  <!---------------------Features-------->
  <section class="bg-white border-b py-12">
    <div class="container max-w-7xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-black-600"
      >Book with confidence</h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-orange-500 font-bold leading-none mb-3">Book the best</h3>
          <ul class="list-disc px-4">
            <li class="text-black-800 mb-5">ThyFlow barbers have years of experience.</li>
            <li class="text-black-800 mb-5">ThyFlow Barber provides exceptional customer service.</li>
            <li
              class="text-black-800 mb-5"
            >ThyFlow Master Barber verify every new barber upon joining the platform.</li>
            <li class="text-black-800 mb-5">World-class customer support.</li>
          </ul>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img class="zoom w-full md:w-5/5 z-50 shadow" src="~/assets/barber_showcase.png" />
        </div>
      </div>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <img class="zoom w-full md:w-5/5 z-50 shadow" src="~/assets/promise.png" />
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl text-orange-500 font-bold leading-none mb-3">Promise to customers</h3>
            <ul class="list-disc px-4">
              <li class="text-black-800 mb-5">Expect barbershop experience from your home.</li>
              <li class="text-black-800 mb-5">Like your haircut or your money back.</li>
              <li class="text-black-800 mb-5">Kids get a free haircut with any adult haircut.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-orange-500 font-bold leading-none mb-3">Vetted Barbers</h3>
          <ul class="list-disc px-4">
            <li class="text-black-800 mb-5">Barbers Background checked.</li>
            <li class="text-black-800 mb-5">Licensed Barbers.</li>
            <li class="text-black-800 mb-5">Two-step interview process.</li>
            <li class="text-black-800 mb-5">Friends and Family referral.</li>
          </ul>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img class="zoom w-full md:w-5/5 z-50 shadow" src="~/assets/barber_showcase.png" />
        </div>
      </div>
    </div>
  </section>
</template> 

<script>
export default {};
</script>

<style lang="css" scoped>
.zoom:hover {
  transform: scale(1.2);
}
.threeD {
  color: orange;
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  transition: 0.3s;
  text-shadow: 1px 1px 0 grey, 1px 2px 0 grey, 1px 3px 0 grey, 1px 4px 0 grey,
    1px 5px 0 grey, 1px 6px 0 grey, 1px 7px 0 grey, 1px 8px 0 grey,
    5px 13px 15px black;
}

.threeD:hover {
  transition: 0.3s;
  transform: scale(1.1) translate(-50%, -50%);
  text-shadow: 1px -1px 0 grey, 1px -2px 0 grey, 1px -3px 0 grey,
    1px -4px 0 grey, 1px -5px 0 grey, 1px -6px 0 grey, 1px -7px 0 grey,
    1px -8px 0 grey, 5px -13px 15px black, 5px -13px 25px #808080;
}
</style>
