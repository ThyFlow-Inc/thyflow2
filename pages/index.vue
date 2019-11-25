<template>
  <div class="gradient">
    <Navbar />
    <Header />
    <section class="bg-white border-b py-8">
      <a class="container mx-auto flex flex-wrap pt-4 pb-12">
        <p class="w-full my-2 text-2xl font-bold text-center text-gray-800">Our Story</p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-20 my-0 py-0 rounded-t"></div>
          <p
            class="w-full my-2 text-1xl text-center text-black-600 px-8 sm:align-middle md:align-middle"
          >
            At ThyFlow, We believe a great looking haircut gives you confident to achieve your goals. Having confidence in yourself will help you do anything you want in this life and be a leader among your friends. ThyFlow Mobile Barbers help you be more confident by providing a world class haircut service at the comfort of your home or wherever.
            ThyFlow service is convenient and reliable for anyone with a busy lifestyle. Only the top local barbers on the platform!
          </p>
        </div>
      </a>
    </section>
    <HowItWorks />
    <!------------First Book a barber--------------->

    <transition appear name="slide-in">
      <div class="bg-white mx-auto text-center">
        <button
          class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          <a href="https://forms.zoho.com/thyflow/form/SoftwareEvaluation">Book a Mobile barber!</a>
        </button>
      </div>
    </transition>

    <Features />
    <transition appear name="slide-in">
      <div class="bg-white mx-auto text-center">
        <button
          class="mx-auto lg:mx-0 hover:underline gradient give-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          <a href="https://forms.zoho.com/thyflow/form/SoftwareEvaluation">Book a Mobile barber!</a>
        </button>
      </div>
    </transition>
    <!-----------------Second Boo a barber---------->
    <Customer />
    <Download />
    <ApplyBarber />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Header from "~/components/Header.vue";
import HowItWorks from "~/components/HowItWorks.vue";
import Features from "~/components/Features.vue";
import Customer from "~/components/Customer.vue";
import Download from "~/components/Download.vue";
import ApplyBarber from "~/components/ApplyBarber.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    Header,
    HowItWorks,
    Features,
    Customer,
    Download,
    ApplyBarber,
    Footer
  }
};
</script>

<style lang="css" scoped>
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
.slide-in-enter {
  opacity: 0;
  transform: scale(0.5);
}
.slide-in-enter-to {
  transition: all 0.4s ease;
}
.give-white {
  color: white !important;
}
</style>