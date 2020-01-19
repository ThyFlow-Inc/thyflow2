<template>
  <div>
    <Navbar />
    <Header />
    <OurStoryHome />
    <HowItWorks />
    <!------------First Book a barber--------------->

    <transition appear name="slide-in">
      <div class="bg-white mx-auto text-center">
        <button
          class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          <a href="https://zfrmz.com/YwaCWiBx7wEJ3E7hNmZl">Book a Mobile barber!</a>
        </button>
      </div>
    </transition>

    <Features />
    <transition appear name="slide-in">
      <div class="bg-white mx-auto text-center">
        <button
          class="mx-auto lg:mx-0 hover:underline gradient give-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          <a href="https://zfrmz.com/YwaCWiBx7wEJ3E7hNmZl">Book a Mobile barber!</a>
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
import OurStoryHome from "~/components/OurStoryHome.vue";
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
    OurStoryHome,
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