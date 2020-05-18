<template>
  <!---------------------Features-------->
  <section class="bg-blue-700 border-b py-12">
    <div class="container max-w-7xl mx-auto m-8 text-center">
      <!---<img src="~/assets/bookease.png" alt="bookease" class="h-48 text-center" />--->
      <h2 class="mb-4 text-white lg:text-5xl text-center leading-relaxed">
        Book<strong> <span class="text-orange-500"> With </span></strong>Ease
      </h2>

      <div class="w-full mb-4"></div>
      <div class="flex flex-wrap animate1">
        <div class=" align-middle w-6/6 sm:w-2/5 md:px-16 md:py-16">
          <h4
            class="text-base md:text-2xl sm:text-xl  font-bold text-orange-500"
          >
            ThyFlow Barbers Have Years Of Experience
          </h4>
          <p class="text-white md:text-lg sm:text-base mb-8">
            With the help of our industry professionals, we’ve partnered with
            the top barbers in your city. ThyFlow, only works with barbers that
            take pride in their work.
          </p>
          <h4 class="md:text-2xl sm:text-xl text-orange-500  font-bold">
            ThyFlow Barbers, Provide Exceptional Service.
          </h4>
          <p class="px-1 text-white md:text-lg sm:text-base mb-8">
            All of our barbers bring years of barbershop experience to you with
            every haircut.
          </p>
        </div>
        <!------<div
          class="w-full sm:w-3/5 mb-5"
          style="background: linear-gradient(60deg, #00EAC3, #1F9DD4);"
        >-->
        <div class="w-full sm:w-3/5 p-6 mt-6">
          <img
            class="zoom md:min-w-0 md:w-4/7  sm:w-full "
            src="~/assets/berber_44.jpg"
            alt="barber44"
          />
        </div>
      </div>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row animate2">
        <div class="w-full sm:w-3/5 p-6 mt-6">
          <img
            class="zoom md:min-w-0 md:w-4/7 z-50 sm:w-full sm:h-full "
            src="~/assets/barber_22.png"
            alt="barber_77"
          />
        </div>
        <div class="w-full sm:w-2/5 p-6 mt-6 mb-5">
          <div class="align-middle w-6/6 md:px-16 md:py-16">
            <h4 class="text-orange-500 md:text-2xl sm:text-xl font-bold">
              Our Barbers Carry Every Needed Tool for All Haircut Requests.
            </h4>
            <p class="px-1 text-white md:text-lg sm:text-base mb-8">
              Yes, our barbers clean their tools weekly. Yes, our barbers bring
              a chair with them for your haircut.
            </p>
            <h4 class="text-orange-500 md:text-2xl sm:text-xl font-bold">
              ThyFlow Barbers Are Just A Tap Away
            </h4>
            <p class="px-1 text-white md:text-lg sm:text-base mb-8">
              You can easily track your barber's E.T.A on our app until their
              arrival. After your haircut, leave the cleaning to your barber and
              rate your experience on our app.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row animate2">
        <div class="w-5/6 sm:w-2/5 md:px-16 md:py-16">
          <h4 class="text-orange-500 md:text-2xl sm:text-xl font-bold mb-3">
            Safety & Security a key priority to our team
          </h4>
          <h4 class="text-white md:text-2xl sm:text-xl font-bold">
            ThyFlow Barbers:
          </h4>
          <p class="text-white md:text-lg sm:text-base mb-3">
            Are Background Checked
          </p>
          <p class="text-white md:text-lg sm:text-base mb-3">
            Have A Barber/Hairstyling License
          </p>
          <p class="text-white md:text-lg sm:text-base mb-3">
            Go Through A Two-step Interview Process
          </p>
          <p class="text-white md:text-lg sm:text-base mb-3">
            Are Interviewed By Industry Professional
          </p>
          <p class="text-white md:text-lg sm:text-base mb-3">
            And The Thyflow Team Requests Friends And Family Referrals
          </p>
        </div>
        <!-----          style="background: linear-gradient(60deg, #C10149, #E97348);"--->

        <div class="w-full sm:w-3/5 p-6 w-3/4 mt-6">
          <img
            class="zoom md:min-w-0 md:w-4/7 z-50 sm:w-full sm:h-full"
            src="~/assets/barber66_.png"
            alt="barber_66"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: "ThyFlow Website",
      link: [      
       { 
         rel: 'stylesheet', href: 'href="https://fonts.googleapis.com/css2?family=Poppins&display=swap' }
      ],
    }
  }
};
</script>

<style lang="css" scoped>
body {
  font-family: "Poppins", Times, serif;
}
.animate1:hover {
  animation: moveInLeft 3s;
}

.animate2:hover {
  animation: moveInRight 3s;
}

.zoom:hover {
  transform: scale(1.1);
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80% {
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  70% {
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
