<template>
  <!-----------------------How it works---------->
  <section class="bg-white border-b py-8">
    <a class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-4xl font-bold leading-tight text-center text-orange-500"
      >How ThyFlow works</h1>

      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden text-center">
          <img class="w-1/6 md:w-1/5 mx-auto" src="~/assets/number-one.png" alt="number-one" />

          <img class="w-full object-cover" src="~/assets/to_do.png" alt="number-one" />

          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-orange-500 px-6">Create an account</div>
            <p
              class="text-black-600 text-base px-6 mb-5"
            >Fill in basic info about yourself to create an account.</p>
          </a>
        </div>
      </div>

      <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden text-center">
          <img class="w-1/6 md:w-1/5 mx-auto" src="~/assets/number-two.png" alt="number-two" />
          <img class="w-full object-cover" src="~/assets/download.png" alt="download" />

          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-orange-500 px-6">Download App</div>
            <p
              class="text-black-600 text-base px-6 mb-5"
            >Use our website or Download App to book an appointment.</p>
          </a>
        </div>
      </div>

      <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden text-center">
          <img class="w-1/6 md:w-1/5 mx-auto" src="~/assets/number-three.png" alt="number-three" />
          <img class="w-full object-cover" src="~/assets/booking.png" alt="download" />

          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-orange-500 px-6">Appointment</div>
            <p
              class="text-black-600 text-base px-6 mb-5"
            >Once the appointment is confirmed, track the barber till arrival.</p>
          </a>
        </div>
      </div>

      <a class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
        <a class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden text-center">
          <img class="w-1/6 md:w-1/5 mx-auto" src="~/assets/number-four.png" alt="number-three" />

          <img class="w-full object-cover" src="~/assets/barber.png" alt="barber" />

          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-orange-500 px-6">Barber arrival</div>
            <p
              class="text-black-600 text-base px-6 mb-5"
            >ThyFlow barbers bring all state of the art tools for your haircut.</p>
          </a>
        </a>
      </a>
    </a>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
