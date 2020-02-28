<template>
  <!---------------------Features-------->
  <section class="bg-blue-700 border-b py-12">
    <div class="container max-w-7xl mx-auto m-8">
      <h1
        class="my-3 md:text-6xl uppercase sm:text-3xl font-bold leading-tight text-center text-white"
      >
        Book with ease
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-6/6 sm:w-1/2 p-6">
          <p class="text-base md:text-3xl sm:text-xl mb-3 font-bold text-white">
            Barbers have years of experience
          </p>
          <p class="px-1 text-white md:text-lg sm:text-base mb-3">
            With the help of our industry professionals, we have partnered with
            the top barbers in your city. ThyFlow, Only work with barbers that
            take pride in their work.
          </p>
          <h4 class="md:text-3xl sm:text-xl text-white mb-3 font-bold">
            Barbers, Provides Exceptional Service.
          </h4>
          <p class="px-1 text-white md:text-lg sm:text-base mb-3">
            All barbers will bring years of barbershop experience to you with
            every haircut.
          </p>
          <h4 class="md:text-3xl sm:text-xl text-white mb-3 font-bold">
            Profesionals handpicked new barbers.
          </h4>
          <p class="px-1 text-white md:text-lg sm:text-base mb-3">
            Industry professionals on our team have seen every new barber cut
            hair live! Also ensure all barbers are using only professional tools
            to provide a great haircut experience.
          </p>
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
            <h4 class="text-white md:text-3xl sm:text-xl mb-3 font-bold">
              Barbers carry all needed tools to all haircut requests.
            </h4>
            <p class="px-1 text-white md:text-lg sm:text-base mb-3">
              Yes, Barbers clean tools weekly. Yes, Barbers also have a chair
              for your haircut.
            </p>
            <h4 class="text-white md:text-3xl sm:text-xl mb-3 font-bold">
              ThyFlow Barbers are always a tap away
            </h4>
            <h5 class="px-1 text-white md:text-lg sm:text-base mb-3">
              Easily track your barber's E.T.A in app till arrival. After your
              haircut, leave the cleaning to the barber and rate your experience
              in app.
            </h5>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h4 class="text-white md:text-3xl sm:text-xl font-bold mb-3">
            Safety & Security is a key propriety to our team
          </h4>
          <ul class="px-1">
            <p class="text-white md:text-lg sm:text-base mb-3">
              Barbers background

              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </p>
            <p class="text-white md:text-lg sm:text-base mb-3 inline-block">
              Barbers license
              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </p>
            <li class="text-white md:text-lg sm:text-base mb-3">
              Two-step interview process

              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </li>
            <li class="text-white md:text-lg sm:text-base mb-3">
              Friends and family referral
              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </li>
            <li class="text-white md:text-lg sm:text-base mb-3">
              Interview by industry professional
              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
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

    <!---------------Changes Mimic Gulo Solutions--------------->
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
