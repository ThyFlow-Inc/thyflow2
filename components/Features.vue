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
          <h3 class="text-3xl text-orange-500 font-bold leading-none mb-8">Book the best</h3>
          <h4
            class="text-base text-black-800 mb-2 font-bold"
          >ThyFlow barbers have years of experience</h4>
          <ul class="list-disc px-4">
            <li
              class="text-black-800 text-sm mb-2"
            >We only work with barber who take pride in their work.</li>
            <li class="text-black-800 text-sm mb-2">We choose the best local barbers in every city.</li>
          </ul>
          <h4
            class="text-base text-black-800 mb-3 font-bold"
          >ThyFlow Barbers provides exceptional service</h4>
          <ul class="list-disc px-4">
            <li
              class="text-black-800 text-sm mb-2"
            >ThyFlow Barbers care about the overall customer satisfaction.</li>
            <li
              class="text-black-800 text-sm mb-2"
            >ThyFlow barbers are trained on ways to improve their service.</li>
          </ul>
          <h4
            class="text-base text-black-800 mb-2 font-bold"
          >ThyFlow Industry Proffesionals handpicked and verify new barbers</h4>
          <ul class="list-disc px-4">
            <li
              class="text-black-800 text-sm mb-2"
            >Our industry professionals also manger and train new barbers.</li>
            <li
              class="text-black-800 text-sm mb-2"
            >Our industry professionals have seen every new barber cut hair live!</li>
            <li
              class="text-black-800 text-sm mb-2"
            >ThyFlow Barbers use only professionals tools for the best haircut experience.</li>
          </ul>
        </div>
        <div class="w-full sm:w-1/2 p-6 mb-5">
          <img class="zoom w-full md:w-5/5 z-50 shadow h-full" src="~/assets/barber_showcase.png" />
        </div>
      </div>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <img class="zoom w-full md:w-5/5 z-50 shadow h-full" src="~/assets/promise.png" />
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl text-orange-500 font-bold leading-none mb-8">Promise to customers</h3>
            <h4
              class="text-black-800 text-base mb-2 font-bold"
            >Expect barbershop Experience from your home</h4>
            <ul class="list-disc px-4">
              <li
                class="text-black-800 text-sm mb-2"
              >Our barbers carry their own tools for each haircut.</li>
              <li class="text-black-800 text-sm mb-2">Barber tools are cleaned weekly.</li>
              <li class="text-black-800 text-sm mb-2">Barbers carry a chair for every haircut.</li>
            </ul>
            <h4
              class="text-black-800 text-base mb-2 font-bold"
            >Like your haircut or your money back.</h4>
            <ul class="list-disc px-4">
              <li
                class="text-black-800 text-sm mb-2"
              >No questions asked to get your refund if needed.</li>
            </ul>
            <h4 class="text-black-800 text-base mb-2 font-bold">Barbers are always on time.</h4>
            <ul class="list-disc px-4">
              <li
                class="text-black-800 text-sm mb-2"
              >Easily Keep track of your barber ETA in app till arrival.</li>
              <li
                class="text-black-800 text-sm mb-2"
              >After your haircut easily pay and rate your barber in app.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-orange-500 font-bold leading-none mb-6">Vetted Barbers</h3>
          <h4 class="text-black-800 text-base font-bold mb-2">Barbers Background checked</h4>
          <ul class="list-disc px-4">
            <li class="text-black-800 text-sm mb-2">ThyFlow barbers undergo yearly background check.</li>
            <li class="text-black-800 text-sm mb-2">ThyFlow Barbers are safe and trustworthy.</li>
          </ul>
          <h4 class="text-black-800 text-base font-bold mb-2">Licensed Barbers</h4>
          <ul class="list-disc px-4">
            <li
              class="text-black-800 text-sm mb-2"
            >Each barber has a licensed and has worked in a barbershop in the past.</li>
            <li
              class="text-black-800 text-sm mb-2"
            >Barbers licensed are from top local barbering schools.</li>
          </ul>
          <h4 class="text-black-800 text-sm mb-2 font-bold">Two Step Interview Process</h4>
          <ul class="list-disc px-4">
            <li
              class="text-black-800 text-sm mb-2"
            >Barbers are interviewed by two different mangers.</li>
            <li
              class="text-black-800 text-sm mb-2"
            >Each barber is also interviewed by our industry professionals.</li>
            <li
              class="text-black-800 text-sm mb-2"
            >Barbers are trained On ThyFlow way of customer service.</li>
          </ul>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img class="zoom w-full md:w-5/5 z-50 shadow h-full" src="~/assets/barber_showcase.png" />
        </div>
      </div>
    </div>
  </section>
</template> 

<script>
export default {};
</script>

<style lang="css" scoped>
h1 {
  position: relative;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}
@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}
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
