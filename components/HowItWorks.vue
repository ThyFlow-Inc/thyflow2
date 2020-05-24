<template>
  <!--------------------How it works---------->

  <section class="bg-white border-b py-12">
    <a class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h2 class="w-full my-4 text-5xl text-center text-orange-500">
        How ThyFlow Works
      </h2>

      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
        <div
          class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden text-center"
        >
          <img
            class="w-1/6 md:w-1/5 mx-auto sticker"
            src="~/assets/number-one.png"
            alt="number-one"
          />

          <img
            class="w-full object-cover zoom"
            src="~/assets/to_do.png"
            alt="number-one"
          />

          <a class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-orange-500 px-6">
              Create an account
            </div>
            <p class="text-black-600 text-base px-6 mb-5">
              Fill out basic info about yourself to create an account
            </p>
          </a>
        </div>
      </div>

      <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
        <div
          class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden text-center"
        >
          <img
            class="w-1/6 md:w-1/5 mx-auto sticker"
            src="~/assets/number-two.png"
            alt="number-two"
          />
          <img
            class="w-full object-cover zoom"
            src="~/assets/download.png"
            alt="download"
          />

          <a class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-orange-500 px-6">
              Download App
            </div>
            <p class="text-black-600 text-base px-6 mb-5">
              Use our website or download our app on your phone!
            </p>
          </a>
        </div>
      </div>

      <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
        <div
          class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden text-center"
        >
          <img
            class="w-1/6 md:w-1/5 mx-auto sticker"
            src="~/assets/number-three.png"
            alt="number-three"
          />
          <img
            class="w-full object-cover zoom"
            src="~/assets/booking.png"
            alt="download"
          />

          <a class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-orange-500 px-6">
              Book an Appointment
            </div>
            <p class="text-black-600 text-base px-6 mb-5">
              Once your appointment is confirmed, you can track your barber
              until they arrive.
            </p>
          </a>
        </div>
      </div>

      <a class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
        <a
          class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden text-center"
        >
          <img
            class="w-1/6 md:w-1/5 mx-auto sticker"
            src="~/assets/number-four.png"
            alt="number-three"
          />

          <img
            class="w-full object-cover zoom"
            src="~/assets/barber.jpg"
            alt="barber"
          />

          <a class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-orange-500 px-6">
              Barber Arrival
            </div>
            <p class="text-black-600 text-base px-6 mb-5">
              Sit back & Relax! As our ThyFlow barber use state of the art tools
              for your haircut
            </p>
          </a>
        </a>
      </a>
    </a>
  </section>
</template>

<script>
export default {
  name: 'How it works',
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lobster&display=swap' }
    ]
  }
};
</script>

<style lang="css" scoped>
  h2{
    font-family: 'Lobster', sans-serif;

  }
.zoom {
  transition: all 1s;
}
.zoom:hover {
  transform: scale(1.2);
}

.sticker {
  animation: spin 10s linear infinite;
  /*Set our animation play state to paused initially */
  animation-play-state: paused;
}
.sticker:hover {
  /* Toggle our animation play state to running when we are hovering over our sticker */
  animation-play-state: running;
}

@keyframes spin {
  100% {
    transform: rotate(1turn);
  }
}


</style>
