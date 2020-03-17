<template>
  <!---------------------Features-------->
  <section class="bg-blue-700 border-b py-12">
    <div class="container max-w-7xl mx-auto m-8">
      <!------<h1
        class="my-3 md:text-6xl uppercase sm:text-3xl font-bold leading-tight text-center text-white"
      >
        Book with ease
      </h1>----->
       <h1
        class="my-6 md:text-6xl  sm:text-3xl font-bold leading-tight text-center text-orange-500"
      >
        Book With Ease
      </h1>
      <div class="w-full mb-4">
        
      </div>
      <div class="flex flex-wrap">
        <div class=" align-middle w-6/6 sm:w-2/5 md:px-16 md:py-16">
          <h4 class="text-base md:text-2xl sm:text-xl  font-bold text-orange-500">
            Barbers have years of experience
          </h4>
          <p class="text-white md:text-lg sm:text-base mb-8">
            With the help of our industry professionals, we have partnered with
            the top barbers in your city. ThyFlow, Only work with barbers that
            take pride in their work.
          </p>
          <h4 class="md:text-2xl sm:text-xl text-orange-500  font-bold">
            Barbers, Provides Exceptional Service.
          </h4>
          <p class="px-1 text-white md:text-lg sm:text-base mb-8">
            All barbers will bring years of barbershop experience to you with
            every haircut.
          </p>
          
        </div>
        <!------<div
          class="w-full sm:w-3/5 mb-5"
          style="background: linear-gradient(60deg, #00EAC3, #1F9DD4);"
        >-->
        <div
          class="w-full sm:w-3/5 p-6 mt-6">
          <img
            class="zoom md:min-w-0 md:w-4/7  sm:w-full "
            src="~/assets/berber_44.jpg"
          />
        </div>
      </div>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div
          class="w-full sm:w-3/5 p-6 mt-6"
          
        >
          <img
            class="zoom md:min-w-0 md:w-4/7 z-50 sm:w-full sm:h-full "
            src="~/assets/barber_77.png"
          />
        </div>
        <div class="w-full sm:w-2/5 p-6 mt-6 mb-5">
          <div class="align-middle w-6/6 md:px-16 md:py-16">
            <h4 class="text-orange-500 md:text-2xl sm:text-xl font-bold">
              Barbers carry all needed tools to all haircut requests.
            </h4>
            <p class="px-1 text-white md:text-lg sm:text-base mb-8">
              Yes, Barbers clean tools weekly. Yes, Barbers also have a chair
              for your haircut.
            </p>
            <h4 class="text-orange-500 md:text-2xl sm:text-xl font-bold">
              ThyFlow Barbers are always a tap away
            </h4>
            <p class="px-1 text-white md:text-lg sm:text-base mb-8">
              Easily track your barber's E.T.A in app till arrival. After your
              haircut, leave the cleaning to the barber and rate your experience
              in app.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-5/6 sm:w-2/5 md:px-16 md:py-16">
          <h4 class="text-orange-500 md:text-2xl sm:text-xl font-bold">
            Safety & Security is a key propriety to our team
          </h4>
            <li class="text-white md:text-lg sm:text-base mb-3">
              Barbers background

              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </li>
            <li class="text-white md:text-lg sm:text-base mb-3">
              Barbers license
              <font-awesome-icon
                :icon="['fas', 'check']"
                class="mx-1 h-4 inline-block"
              />
            </li>
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
        </div>
        <!-----          style="background: linear-gradient(60deg, #C10149, #E97348);"--->

        <div
          class="w-full sm:w-3/5 p-6 w-3/4 mt-6"
        >
          <img
            class="zoom md:min-w-0 md:w-4/7 z-50 sm:w-full sm:h-full"
            src="~/assets/barber66_.png"
          />
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
