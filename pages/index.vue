<template>
  <div class="bg-blue-700">
    <Navbar/>
    <Header/>
    <OurStoryHome />

    <HowItWorks/>
    <!------------First Book a barber--------------->

    <Features2/>

    <!-----------------Second Book a barber---------->
    <CustomerSlider/>

    <faqComponent/>
    <ApplyBarber/>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from "~/components/Navbar.vue";
  import Header from "~/components/Header.vue";
  import HowItWorks from "~/components/HowItWorks.vue";
  //import Features from "~/components/Features.vue";
  import Features2 from "~/components/Features2.vue";
  import CustomerSlider from "~/components/CustomerSlider.vue";
  import faqComponent from "~/components/faqComponent.vue";
  import ApplyBarber from "~/components/ApplyBarber.vue";
  import OurStoryHome from "~/components/OurStoryHome.vue";
  import Footer from "~/components/Footer.vue";

export default {
  head() {
    return {
      script: [],
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        }
      ]
    };
  },
  components: {
    Navbar,
    Header,
    OurStoryHome,
    HowItWorks,
    //Features,
    Features2,
    CustomerSlider,
    faqComponent,
    ApplyBarber,
    Footer
  }
};
</script>

<style lang="css" scoped>
.gradient-back {
  background-color: rgba(6, 36, 207, 0.603);
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
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
</style>
