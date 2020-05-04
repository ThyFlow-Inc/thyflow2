<template>
  <div>
    <Navbar />
    <section class="container">
      <div class="lg:my-32 text-center">
        <h1 class="hero__title mb-4">
          <strong> Privacy Policy</strong>
        </h1>
      </div>
    </section>
    <div class="container mx-auto px-8 lg:px-48">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-orange-800"
      >
        FAQ
      </h1>

      <div class="pb-6">
        <div class="mb-4 text-2xl font-bold">What if I do not like my cut?</div>
        <p>
          That has never happened, But we will take your request and refund your
          full payment.
        </p>
      </div>
      <div class="pb-6">
        <div class="mb-4 text-2xl font-bold">
          Can you accommodate groups or events? (Like a wedding for example)
        </div>
        <p>
          Yes, email our customer support with your inquiries, a member from our
          team will reach out to you.
        </p>
      </div>
      <div class="pb-6">
        <div class="mb-4 text-2xl font-bold">
          How experienced are the barbers?
        </div>
        <p>
          ThyFlow Barbers have a minimum of 3+ years of experience cutting hair,
          Before joining the platform.
        </p>
      </div>
      <div class="pb-6">
        <div class="mb-4 text-2xl font-bold">
          How far in advance can I book an appointment?
        </div>
        <p>You can book an appointment 2 hours in advance.</p>
      </div>

      <div class="pb-6">
        <div class="mb-4 text-2xl font-bold">
          About how long will each appointment last?
        </div>
        <p>
          It varies from one hour to an Hour and a half. Depending on the
          haircut you choose.
        </p>
      </div>

      <div class="pb-6">
        <div class="mb-4 text-2xl font-bold">
          Can I guarantee I will get the same barber each time?
        </div>
        <p>
          Depending on the area you live, Most of our barbers service their
          neighborhood and local areas, But if you rate a barber below 3 stars,
          you will not get the same barber again.
        </p>
      </div>
      <div class="pb-6">
        <div class="mb-4 text-2xl font-bold">
          How will quality be guaranteed?
        </div>
        <p>
          All of our Barbers are professionals that take pride in their work.
          They take the time to ensure the quality and standard is met. Barbers
          are handpicked by industry professionals.
        </p>
      </div>
      <div class="pb-6">
        <div class="mb-4 text-2xl font-bold">
          Do I need to provide anything?
        </div>
        <p>
          Yes, An area for the haircut to take place, Like your backyard,
          garage, or an empty room, You can use your office chair. Barbers will
          have own chair if you don't have a good standard chair.
        </p>
      </div>
      <div class="pb-6">
        <div class="mb-4 text-2xl font-bold">Do you do Kids hair cuts?</div>
        <p>
          Yes, All kids under 10 years old, get free haircut with any adult
          haircut.
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="css" scoped>
.hero__title {
  font-size: 2.667rem;
  color: orange;
  line-height: 1.2;
}

@media (min-width: 1024px) {
  .hero__title {
    font-size: 3.333rem;
  }
}
.content-page {
  position: relative;
  border-radius: 1.25rem;
  background-color: #fbfaf7;
}
.has-sticky-navbar .aside-sticky-fade-in {
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  animation: fade-in-delayed 1s both;
}
.bg-gallery {
  background-color: #ebefed;
}
.slice-text ol,
.slice-text p,
.slice-text ul {
  margin-bottom: 1rem;
}
.gradient {
  background: linear-gradient(90deg, #0a3ead 0%, #e38914 100%);
}
</style>
