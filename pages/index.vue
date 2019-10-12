<template>
  <div class="gradient">
    <Navbar />
    <Header />
    <HowItWorks />
    <Features />
    <BarberProfile />
    <ApplyBarber />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Header from "~/components/Header.vue";
import HowItWorks from "~/components/HowItWorks.vue";
import Features from "~/components/Features.vue";
import BarberProfile from "~/components/BarberProfile.vue";
import ApplyBarber from "~/components/ApplyBarber.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Navbar,
    Header,
    HowItWorks,
    Features,
    BarberProfile,
    ApplyBarber,
    Footer
  }
};
</script>

<style>
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
</style>
