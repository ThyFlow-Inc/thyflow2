<template>
  <!---------------------Features-------->
  <section class="bg-blue-700 border-b py-12">
    <div class="container max-w-7xl mx-auto m-8">
      <h1
        class="my-6 md:text-6xl uppercase sm:text-3xl font-bold leading-tight text-center text-orange-600"
      >Book with confidence</h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-6/6 sm:w-1/2 p-6">
          <h4
            class="text-base md:text-3xl sm:text-xl mb-2 font-bold text-white"
          >ThyFlow barbers have years of experience</h4>
          <ul class="px-1">
            <li class="text-white md:text-lg sm:text-base mb-2">
              <font-awesome-icon :icon="['fas', 'cut']" class="mx-1" />We only work with barber who take pride in their work.
            </li>
            <li class="text-white md:text-lg sm:text-base mb-2">
              <font-awesome-icon :icon="['fas', 'cut']" class="mx-1" />We choose the best local barbers in every city.
            </li>
          </ul>
          <h4
            class="md:text-3xl sm:text-xl text-white mb-2 font-bold"
          >ThyFlow Barbers provides exceptional service</h4>
          <ul class="px-1">
            <li class="text-white md:text-lg sm:text-base mb-2">
              <font-awesome-icon :icon="['fas', 'chair']" class="mx-1" />ThyFlow Barbers care about the overall customer satisfaction.
            </li>
            <li class="text-white md:text-lg sm:text-base mb-2">
              <font-awesome-icon :icon="['fas', 'chair']" class="mx-1" />ThyFlow barbers are trained on ways to improve their service.
            </li>
          </ul>
          <h4
            class="md:text-3xl sm:text-xl text-white mb-2 font-bold"
          >ThyFlow Industry Profesionals handpicked and verify new barbers</h4>
          <ul class="px-1">
            <li class="text-white md:text-lg sm:text-base mb-2">
              <font-awesome-icon :icon="['fas', 'store-alt']" class="mx-1" />Our industry professionals also manger and train new barbers.
            </li>
            <li class="text-white md:text-lg sm:text-base mb-2">
              <font-awesome-icon :icon="['fas', 'store-alt']" class="mx-1" />Our industry professionals have seen every new barber cut hair live!
            </li>
            <li class="text-white md:text-lg sm:text-base mb-2">
              <font-awesome-icon :icon="['fas', 'store-alt']" class="mx-1" />ThyFlow Barbers use only professional tools for the best haircut experience.
            </li>
          </ul>
        </div>
        <div
          class="w-full sm:w-1/2 mb-5"
          style="background: linear-gradient(60deg, #00EAC3, #1F9DD4);"
        >
          <img
            class="zoom md:min-w-0 md:w-4/7 z-50 sm:w-full sm:h-full md:px-16 md:py-16"
            src="~/assets/barber_showcase.png"
          />
        </div>
      </div>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div
          class="w-full sm:w-1/2 p-6 mt-6"
          style="background: linear-gradient(60deg, #FFC200, #FF7218);"
        >
          <img
            class="zoom md:min-w-0 md:w-4/7 z-50 sm:w-full sm:h-full md:px-16 md:py-16"
            src="~/assets/promise.png"
          />
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6 mb-5">
          <div class="align-middle w-6/6">
            <h4
              class="text-white md:text-3xl sm:text-xl mb-2 font-bold"
            >Expect barbershop Experience from your home</h4>
            <ul class="px-1">
              <li class="text-white md:text-lg sm:text-base mb-2">
                <font-awesome-icon :icon="['fas', 'cut']" class="mx-1" />Our barbers carry their own tools for each haircut.
              </li>
              <li class="text-white md:text-lg sm:text-base mb-2">Barber tools are cleaned weekly.</li>
              <li class="text-white md:text-lg sm:text-base mb-2">
                <font-awesome-icon :icon="['fas', 'cut']" class="mx-1" />Barbers carry a chair for every haircut.
              </li>
            </ul>
            <h4
              class="text-white md:text-3xl sm:text-xl mb-2 font-bold"
            >Like your haircut or your money back</h4>
            <ul class="px-1">
              <li class="text-white md:text-lg sm:text-base mb-2">
                <font-awesome-icon :icon="['fas', 'chair']" class="mx-1" />No questions asked to get your refund if needed.
              </li>
            </ul>
            <h4 class="text-white md:text-3xl sm:text-xl mb-2 font-bold">Barbers are always on time</h4>
            <ul class="1px-1">
              <li class="text-white md:text-lg sm:text-base mb-2">
                <font-awesome-icon :icon="['fas', 'store-alt']" class="mx-1" />Easily Keep track of your barber ETA in app till arrival.
              </li>
              <li class="text-white md:text-lg sm:text-base mb-2">
                <font-awesome-icon :icon="['fas', 'store-alt']" class="mx-1" />After your haircut easily pay and rate your barber in app.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h4 class="text-white md:text-3xl sm:text-xl font-bold mb-2">Barbers Background checked</h4>
          <ul class="px-1">
            <li class="text-white md:text-lg sm:text-base mb-2">
              <font-awesome-icon :icon="['fas', 'cut']" class="mx-1" />ThyFlow barbers undergo yearly background check.
            </li>
            <li class="text-white md:text-lg sm:text-base mb-2">
              <font-awesome-icon :icon="['fas', 'cut']" class="mx-1" />ThyFlow Barbers are safe and trustworthy.
            </li>
          </ul>
          <h4 class="text-white md:text-3xl sm:text-xl font-bold mb-2">Licensed Barbers</h4>
          <ul class="px-1">
            <li class="text-white md:text-lg sm:text-base mb-2">
              <font-awesome-icon :icon="['fas', 'chair']" class="mx-1" />Each barber has a licensed and has worked in a barbershop in the past.
            </li>
            <li class="text-white md:text-lg sm:text-base mb-2">
              <font-awesome-icon :icon="['fas', 'chair']" class="mx-1" />Barbers licensed are from top local barbering schools.
            </li>
          </ul>
          <h4 class="text-white md:text-3xl sm:text-xl mb-2 font-bold">Two Step Interview Process</h4>
          <ul class="px-1">
            <li class="text-white md:text-lg sm:text-base mb-2">
              <font-awesome-icon :icon="['fas', 'store-alt']" class="mx-1" />Barbers are interviewed by two different mangers.
            </li>
            <li class="text-white md:text-lg sm:text-base mb-2">
              <font-awesome-icon :icon="['fas', 'store-alt']" class="mx-1" />Each barber is also interviewed by our industry professionals.
            </li>
            <li class="text-white text-lg mb-2">
              <font-awesome-icon :icon="['fas', 'store-alt']" class="mx-1" />Barbers are trained On ThyFlow way of customer service.
            </li>
          </ul>
        </div>
        <div
          class="w-full sm:w-1/2 p-6 w-3/4 mt-6"
          style="background: linear-gradient(60deg, #C10149, #E97348);"
        >
          <img
            class="zoom md:min-w-0 md:w-4/7 z-50 sm:w-full sm:h-full md:px-16 md:py-16"
            src="~/assets/barber_showcase.png"
          />
        </div>
      </div>
    </div>

    <!---------------Changes Mimic Gulo --------------->
  </section>
</template> 

<script>
export default {};
</script>

<style lang="css" scoped>
.gradient-back {
}

.zoom:hover {
  transform: scale(1.1);
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
  text-shadow: 1px 1px 0 rgb(233, 77, 163), 1px 2px 0 grey, 1px 3px 0 grey,
    1px 4px 0 grey, 1px 5px 0 grey, 1px 6px 0 grey, 1px 7px 0 grey,
    1px 8px 0 grey, 5px 13px 15px white;
}

.threeD:hover {
  transition: 0.3s;
  transform: scale(1.1) translate(-50%, -50%);
  text-shadow: 1px -1px 0 grey, 1px -2px 0 grey, 1px -3px 0 grey,
    1px -4px 0 grey, 1px -5px 0 grey, 1px -6px 0 grey, 1px -7px 0 grey,
    1px -8px 0 grey, 5px -13px 15px white, 5px -13px 25px #808080;
}
</style>
